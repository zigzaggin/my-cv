<template>
    <entry title="Incremental Query" meta="2/19/19" location="PAI" tags="Vue.js">
        <p>A critical piece of the web application at PAI is our lookup framework. Any given page will likely have
            at least one piece of information a user needs to lookup, and many times a single page will allow users to
            look up 5 or 6 different system objects and utilize them in various ways.</p>
        <p>Lookups are backed by our extensive report framework, which handles all of the common functionality you would
            expect from a data report - paging, filtering, sorting, etc.</p>
        <p>As system reports have grown, these lookups have gained positives and negatives by being backed by a
            full fledged report. Columns are readily available if needed, filtering improvements immediately cascade,
            etc. However, as system reports have grown, lookups have been punished by complex queries for no reason.
        </p>
        <p>As we transition more UI to the Vue.js framework, we have been presented with an opportunity to improve our
            system lookups.</p>
        <p>A pretty obvious path forward was to utilize our powerful Query API, and pipe that data into a "report".</p>
        <p>Getting Query into a filtering report was a simple task and came together quickly. However, we
            immediately needed to test it with large data sets and found that past 200k rows our PCs
            couldn't handle the load. Plus, with a majority of our users on mobile, pulling everything was obviously a
            non-starter.</p>
        <p>Enter Incremental Query.</p>
        <p>For this to work, we would need to keep track of what rows had been loaded, and what rows still needed data,
            in as small of memory footprint as possible. Luckily, our data is nicely normalized, and any singular row
            of data could be represented by a singular identifier.</p>
        <p>The strategy was thus: Fetch all IDs matching a set of filters, cache the IDs, and use the IDs to load
            the data as needed. This gave us a couple major advantages, 1st, our clients were only storing an ID for
            each possible row (prior to viewing the row), and 2nd, fetching additional information out of Query would
            not require the DB to run with the filters applied - we could simply ask for specific rows based on the
            primary key.</p>
        <p>This played out something like this:</p>
        <prism language="javascript">{{iq.e1}}</prism>
        <p>As a user, I will pass a couple arguments:</p>
        <ul>
            <li><strong>ID</strong>: a string describing the primary key column in the query</li>
            <li><strong>Columns</strong>: an object describing what the query will expose and defining the type of field
                (text, int, date, etc)
            </li>
            <li><strong>Query</strong>: a DataAPI query string</li>
        </ul>
        <p>And the resulting class will expose one public method <code>loadNRows</code> that takes an <code>n</code>
            of how many rows need to be fetched and a <code>filters</code> object describing the current user applied
            filters.</p>
        <p>The <code>loadNRows</code> method is pretty uninteresting - it just chains a couple promises together. The
            real work happens in <code>_hydrate</code> and <code>_loadFromAvailable</code>.</p>
        <p><code>_hydrate</code> is pretty simple, the key piece is what happens if a particular set of filters has not
            been seen before.</p>
        <prism language="javascript">{{iq.e2}}</prism>
        <p><code>_idFetchQuery</code> is pretty interesting, but ultimately just takes the query string provided and
            asks for just the ids matching the current filters. Something like this gets sent to the server:
        </p>
        <prism language="javascript">{{iq.e2b}}</prism>
        <p>From this query, we take the resulting IDs, cross reference them through the IDs we've already seen, and
            record what IDs need to pull for the current set of filters.</p>
        <prism language="javascript">{{iq.e3}}</prism>
        <p>From here, we can execute <code>_loadFromAvailable</code>. The <code>_findQuery</code> method is used to pull
            in our set of available ids, and from there we can run a query splicing in <code>n</code> ids from the
            available set.</p>
        <prism language="javascript">{{iq.e4}}</prism>
        <p><code>_rowFetchQuery</code> simple selects all of the columns defined in <code>columns</code> with a wrapper
            around <code>query</code> specifying <code>n</code> ids. Something like this goes up to the server:</p>
        <prism language="javascript">{{iq.e4b}}</prism>
        <p>From here, we push the results into <code>viewed</code>, clean up any other filter id arrays that may have
            included the IDs we've just pulled, and send the result to the origin point of <code>loadNRows</code>.</p>
    </entry>
</template>

<script>
    import Prism from 'vue-prism-component'
    import dedent from "dedent"

    export default {
        name: "IncrementalQuery",
        data() {
            return {
                iq: {
                    e1: dedent(`
                    class IncrementalQuery {

                        constructor({id, columns, query}) {
                            //record params, etc
                            this.runQueries = {}; //{hashOfFilters: {hydrated, ids}...}
                            this.viewed = [];
                        }

                        loadNRows(n, filters) {
                            return new Promise((success, error) => {
                                this._hydrate(filters)
                                .then(() => {
                                    return this._loadFromAvailable(n, filters)
                                })
                                .then((result) => {
                                    success({rows: result});
                                });
                            });
                        }

                        _hydrate(filters) {
                            return new Promise((success) => {
                                let query = this._findQuery(filters);
                                if (!query.hydrated) {
                                    this._idFetchQuery(filters).then((result) => {
                                        query.ids = result.filter(f => !this.viewed.includes(f[this.id]));
                                        query.hydrated = true;
                                        query.matchingRows = query.ids.length;
                                        success(query.matchingRows);
                                    })
                                } else {
                                    success(query.matchingRows);
                                }
                            });
                        }

                        _findQuery(filters) {
                            let h = hash(filters);
                            if (typeof this.runQueries[h] === 'undefined')
                                this.runQueries[h] = {hydrated: false, ids: []};

                            return this.runQueries[h];
                        }

                        _loadFromAvailable(n, filters) {
                            return new Promise((success) => {
                                let query = this._findQuery(filters);
                                if (query.hydrated && query.ids.length > 0) {
                                    this._rowFetchQuery(query.ids.splice(0, n))
                                    .then((result) => {
                                        let resultSet = result.filter(f => !this.viewed.includes(f[this.id]));
                                        this.viewed.push(...resultSet.map(f => f[this.id]));
                                        this._cleanAvailableIds();
                                        success(resultSet);
                                    });
                                } else {
                                    success([]);
                                }
                            });
                        }

                        // Query Decorator methods, where builders, etc. excluded from example
                    }
                    `),
                    e2: dedent(`
                    let query = this._findQuery(filters);
                    if (!query.hydrated) {
                        this._idFetchQuery(filters).then((result) => {`
                    ),
                    e2b: dedent(`
                        SELECT a.id FROM (SELECT id, code, name FROM Businesses) a
                    `),
                    e3: dedent(`
                    query.ids = result.filter(f => !this.viewed.includes(f[this.id]));
                    `),
                    e4: dedent(`
                    this._rowFetchQuery(query.ids.splice(0, n))
                    .then((result) => {
                        let resultSet = result.filter(f => !this.viewed.includes(f[this.id]));
                        this.viewed.push(...resultSet.map(f => f[this.id]));
                        this._cleanAvailableIds();
                        success(resultSet);
                    });
                    `),
                    e4b: dedent(`
                        SELECT a.* FROM (SELECT id, code, name FROM Businesses) a WHERE a.id IN (1,2,3,....)
                    `),
                }
            }
        },
        components: {
            Prism
        }
    }
</script>

<style scoped>

</style>
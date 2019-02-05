<template>
    <div class="solutions-page">
        <entry title="Call method on arbitrary $ref object in Vue" meta="2/4/19" location="PAI" tags="Vue.js">
            <p>I am integrating Vue.js into a massive legacy application right now and am attempting to create base components
                that easily accomplish the tasks I know our application will demand of them in the future.</p>
            <p>One of these tasks, is a very common need for a button to open a modal.</p>
            <p>I have created a Vue.js component for our modals that can be inherited from to create sub-modals that will house all of their appropriate behavior.
                The parent modal component's only responsibility is to house the base layout for modals and handle visibility - they also deal with the browser history API.</p>
            <p>Child Modals inherited from modal gain a couple of key methods, primarily <code>.open()</code> and
                <code>.close()</code> - these methods then ensure that the visibility is appropriately set and the browser history is stacked correctly.
            </p>
            <p>Because I want a modal to operate by executing a method, I need to add a
                <code>ref</code> attribute so that I can target them in my Vue code.</p>
            <p>Ultimately a modal use will end up looking something like this:</p>
            <prism language="html">{{refentry.e1}}</prism>
            <p>And then I would like to open the modal by adding a property to my button object like so:</p>
            <prism language="html">{{refentry.e2}}</prism>
            <p>The <i>problem</i> is that <code>$refs</code> isn't available like this...</p>
            <p>So... how do we solve this? The immediate thought was to move the behavior into a method and handle it in the current Vue context.</p>
            <p>This has a major drawback though since we're going to do this on almost every button we create. We could put the behavior in a mixin that can access the current contexts $refs and then use it
                something like
                <code>:open-modal="ref('prompt')"</code>, but this is also sub-optimal because my team needs to know to call the ref method, and we're now mixing quotes.
            </p>
            <p>Instead, what if we move the <code>$refs</code> interaction into
                <code>pai-btn</code> and instead pass it the object name to look for - <code>:modal-open="prompt"</code>
            </p>
            <p>Now, all <code>pai-btn</code> needs to do is traverse the object structure interrogating the component's <code>$refs</code> until it finds one that matches the provided string.</p>
            <p>This method ultimately ended up looking something like this:</p>
            <prism language="javascript">{{refentry.e3}}</prism>
            <p>And then we can call the <code>.open()</code> method with ease:</p>
            <prism language="javascript">{{refentry.e4}}</prism>
        </entry>
    </div>
</template>

<script>
    import Prism from 'vue-prism-component'

    export default {
        name: "solutions",
        data() {
            return {
                refentry: {
                    e1: `<pai-yes-no-prompt ref="prompt"></pai-yes-no-prompt>`,
                    e2: `<pai-btn text="Open Modal" :open-modal="$refs.prompt"></pai-btn>`,
                    e3: `this.lookForRef = function (comp) {
    if (typeof comp === 'undefined')
        return comp;

    let search = comp.$refs[this.openModal];
    if (search) {
        return search;
    }

    return this.lookForRef(comp.$parent);
}`,
                    e4: `if (this.openModal) {
    let ref = this.lookForRef(this);
    if (typeof ref !== 'undefined' && typeof ref.open !== "undefined")
        ref.open();
}`
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
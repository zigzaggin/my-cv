<template>
    <div class="entry">
        <div class="header" @click="toggleShow">
            <h2>{{title}}</h2>
            <div class="meta">
                <span v-if="meta">{{meta}}</span>
                <span class="location" v-if="location">
                    <a :href="locationUrl" target="_blank">
                        <fai class="icon" icon="map-marker-alt"></fai>{{location}}
                    </a>
                </span>
                <span class="website" v-if="website"><a :href="website" target="_blank"><fai class="icon" icon="external-link-alt"></fai>{{website}}</a></span>
                <span class="tags" v-if="tags"><fai class="icon" icon="tags"></fai>{{tags}}</span>
            </div>
        </div>
        <div class="ellipse">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {library} from "@fortawesome/fontawesome-svg-core"
    import {faTags, faMapMarkerAlt, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

    library.add(faTags, faMapMarkerAlt, faExternalLinkAlt);

    export default {
        name: "entry",
        props: {
            title: {},
            meta: {},
            tags: {},
            location: {},
            locationUrl: {},
            website: {}
        },
        data() {
            return {
                show: false
            }
        },
        methods: {
            toggleShow() {
                this.show = !this.show;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .entry {
        width: 100%;
        + .entry {
            margin-top: 30px;
        }
    }

    .header {
        margin-bottom: 15px;
        h2 {
            font-size: 1.5em;
        }
        .meta {
            background: $gray;
            padding: 5px 10px;
            font-size: .8em;
            width: 100%;
            border-left: solid 3px $dark-gray;
            span + span {
                margin-left: 10px;
                border-left: solid 1px $dark-gray;
                padding-left: 10px
            }
        }
        a {
            color: black;
        }
        .icon {
            display: inline-block;
            margin-right: 7px;
        }
    }

    .ellipse {
        ul, ol {
            list-style-position: inside;
            margin-left: 20px;
        }
        * + * {
            margin-top: 15px;
        }
    }
    @media #{$responsive} {
        .header {
            .icon {
                float: right;
                margin-right: 0;
            }
            .meta {
                span {
                    padding: 5px 0;
                    display: block;
                    border-left: none !important;
                    padding-left: 0 !important;
                    margin-left: 0 !important;
                }
            }
        }
    }
</style>

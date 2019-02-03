<template>
    <div class="entry">
        <div class="header" @click="toggleShow">
            <h2>{{title}}</h2>
            <div class="meta">
                <span>{{meta}}</span>
                <span class="tags"><fai class="icon" icon="tags"></fai>{{tags}}</span>
            </div>
        </div>
        <div class="ellipse">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {library} from "@fortawesome/fontawesome-svg-core"
    import {faTags} from "@fortawesome/free-solid-svg-icons";

    library.add(faTags);

    export default {
        name: "entry",
        props: {
            title: {},
            meta: {},
            tags: {}
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
    }

    .header {
        cursor: pointer;
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
        }
        .tags {
            float: right;
            .icon {
                display: inline-block;
                margin-right: 10px;
            }
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
</style>
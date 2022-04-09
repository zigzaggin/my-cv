<template>
    <div :class="['iframe-container', show?'show':'hide']">
        <div class="showing" @click="hideFrame" v-if="show">Hide</div>
        <iframe v-bind="$attrs" v-if="show"></iframe>
        <div class="iframe-hidden button" @click="showFrame" v-else>
            {{showText}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "iframe-container",
        props: {
            showText: {
                default: "View More"
            }
        },
        data() {
            return {show: false}
        },
        methods: {
            showFrame() {
                this.show = true;
            },
            hideFrame() {
                this.show = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .iframe-container {
        position: relative;
        &.show {
            background: $gray url('../assets/bars.svg') center no-repeat;
            background-size: 50px;
        }
    }

    .showing {
        padding: 5px 10px;
        text-align: center;
        background: $menu-bg;
        color: #fff;
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
    }

    .iframe-hidden {
        padding: 15px;
        background: $menu-bg;
        color: #fff;
        border-left: solid 3px $dark-menu-bg;
        cursor: pointer;
        display: inline-block;
    }

    iframe {
        position: relative;
        z-index: 2;
    }
</style>

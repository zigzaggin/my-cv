<template>
    <div :class="['rail', open?'open': '']">
        <div class="about">
            <h1>Ben Potter</h1>
            <span class="tag-line">
                Software Developer and UX Designer
            </span>
            <div class="menu-activator">
                <div :class="['hamburger', 'hamburger--squeeze', open?'is-active': '']" @click="toggleMenu">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </div>
            </div>
        </div>
        <div class="menu-container">
            <ul>
                <li v-for="route in $router.options.routes" :key="route.path">
                    <router-link :to="route.path">
                        {{ route.meta.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rail",
        data() {
            return {open: false}
        },
        methods: {
            toggleMenu() {
                this.open = !this.open;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/hb/hamburgers";

    .rail {
        padding: 15px;
        background: $menu-bg;
        border-right: solid 3px $dark-menu-bg;
        width: 235px;
        height: 100%;
        color: white;
    }

    h1 {
        font-size: 1.7em;
        width: 100%;
        margin: -3px 0 0;
    }

    .about {
        position: relative;
        margin-bottom: 15px;
        span {
            display: block;
            margin-top: -3px;
            font-size: .8em;
        }
    }

    .menu-activator {
        display: none;
    }

    ul {
        list-style: none;
        margin-bottom: -7.5px;
        li {
            a {
                color: white;
                text-decoration: none;
                padding: 7.5px 15px;
                margin: 0 -15px;
                display: block;
                &:hover, &.router-link-exact-active {
                    background: rgba(0, 0, 0, .1);
                }
            }
        }
    }

    @media #{$responsive} {
        .rail {
            width: 100%;
            border-right: none;
            border-bottom: solid 3px $dark-menu-bg;
            &.open {
                ul {
                    display: block;
                }
            }
        }
        .about {
            margin-bottom: 0;
        }
        ul {
            display: none;
            margin-top: 15px;
            li a {
                padding: 15px;
            }
        }
        .menu-activator {
            display: block;
            position: absolute;
            right: -15px;
            top: 0;
        }
    }
</style>
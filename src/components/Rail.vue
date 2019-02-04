<template>
    <div class="rail">
        <div class="about">
            <h1>Ben Potter</h1>
            <span class="tag-line">
                Software Developer and UX Designer
            </span>
        </div>
        <ul>
            <li v-for="route in $router.options.routes" :key="route.path" >
                <router-link :to="route.path">
                    {{ route.meta.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Rail"
    }
</script>

<style lang="scss" scoped>
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
        margin-bottom: 15px;
        span {
            display: block;
            margin-top: -3px;
            font-size: .8em;
        }
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
</style>
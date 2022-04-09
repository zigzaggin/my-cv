<template>
    <div>
        <vue-particles color="#dedede" :move-speed="1" :particles-number="60"></vue-particles>
        <div class="app-pad">
            <div id="app">
                <div class="rail-wrapper">
                    <Rail></Rail>
                </div>
                <div class="page-wrapper">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Rail from "./components/Rail"

    export default {
        name: 'app',
        components: {
            Rail
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400');

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #particles-js {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100vh;
        background: linear-gradient(-45deg, #93aeee, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        animation: Gradient 300s ease infinite;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
    }

    h1 {
        font-size: 1.4em;
    }

    h2 {
        font-size: 1.3em;
    }

    h3 {
        font-size: 1.2em;
    }
    code {
        font-weight: bold;
    }

    .app-pad {
        padding: 30px;
    }

    #app {
        max-width: 1400px;
        margin: 0 auto 300px;
        background: white;
        box-shadow: 3px 3px 1px rgba(0, 0, 0, .1);
        display: flex;
        position: relative;
        z-index: 2;
        .rail-wrapper {
            display: flex;
        }
        .page-wrapper {
            width: 100%;
            height: 100%;
            padding: 15px;
        }
    }

    @media #{$responsive} {
        .app-pad {
            padding: 10px;
        }
        #app {
            display: block;
            margin: 0 0 300px;
            .rail-wrapper {
                display: block;
            }
        }
    }

    .button {
      padding: 15px;
      background: $menu-bg;
      color: #fff;
      border-left: solid 3px $dark-menu-bg;
      cursor: pointer;
      display: inline-block;
      text-decoration: none;
      &:hover {
        background: darken($menu-bg, 5%);
      }
      + .button {
        margin-left: 15px;
      }
    }
</style>

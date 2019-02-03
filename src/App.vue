<template>
    <div id="app">
        <div class="rail-wrapper">
            <Rail></Rail>
        </div>
        <div class="page-wrapper">
            <router-view></router-view>
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
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700');

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: #f7f7f7;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6 {
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

    #app {
        max-width: 1200px;
        margin: 30px auto;
        background: white;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
        display: flex;
        .rail-wrapper {
            width: 300px;
            display: flex;
        }
        .page-wrapper {
            width: 100%;
            height: 100%;
            padding: 15px;
        }
    }
</style>

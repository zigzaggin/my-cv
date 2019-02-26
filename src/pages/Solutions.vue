<template>
    <div class="solutions-page">
        <IncrementalQuery></IncrementalQuery>
        <refEntry></refEntry>
    </div>
</template>

<script>
    import refEntry from "./solutions/RefEntry"
    import IncrementalQuery from "./solutions/IncrementalQuery"

    export default {
        name: "solutions",
        data() {
            return {}
        },
        components: {
            refEntry,
            IncrementalQuery
        }
    }
</script>

<style scoped>
</style>
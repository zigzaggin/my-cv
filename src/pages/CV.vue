<template>
    <div class="cv-page">
        <h2>About Me</h2>
        <p>My name is Ben Potter and I am a software developer and UX designer in Billings Montana.</p>
        <p>
            I am currently a leading voice in the software development team at Payment Alliance International (PAI) and have been contributing to my team's success since 2014.<br/>
            Prior to my time at PAI I worked for the Missoulian newspaper and the Montana Marketing Group in Missoula
            Montana, producing web solutions for many diverse customers.
        </p>
        <p>
            During my time at PAI I have had many opportunities to expand my team's reach and potential. I have been a key integrator for
            new systems and frameworks, as well as leading a complete style shift in our primary web application, PAI Reports.
        </p>
        <p>
            Some key successes at PAI have included a complete conversion from static CSS to compiled SCSS, moving our Javascript from
            giant monolithic files to reusable modules, and publishing a UI revision that had >87% adoption prior to final cut over.
            I have also spent a significant effort improving build pipelines to allow for the integration of Node.js into a legacy Java application.
        </p>
    </div>
</template>

<script>
    export default {
        name: "c-v"
    }
</script>

<style lang="scss" scoped>
    .cv-page {
        * + * {
            margin-top: 15px;
        }
    }

    h2 {
        border-bottom: solid 2px $gray;
        padding-bottom: 12px;
    }
</style>
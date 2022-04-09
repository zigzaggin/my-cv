<template>
    <div class="cv-page">
        <h2>About Me</h2>
        <p>My name is Ben Potter and I am a lead software developer in Billings Montana.</p>
        <p>
            I am currently a team lead in the software development department at PAI and have been contributing to my team's success since 2014.<br/>
            Prior to my time at PAI I worked for the Missoulian newspaper and the Montana Marketing Group in Missoula
            Montana, producing web solutions for many diverse customers.
        </p>
        <p>
            During my time at PAI I have had many opportunities to expand my team's reach and potential. I have been a key integrator for
            new systems and frameworks. I am continuously working with my team to expand our capacity, both personally and technically.
        </p>
        <a href="https://www.linkedin.com/in/benjamin-potter-4b4b5256/" target="_blank" class="button">
          Come say 'Hi' on LinkedIn
        </a>
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

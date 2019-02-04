<template>
    <div class="speaking-page">
        <entry title="Building Javascript...?" meta="January 2019" location="PAI"
               tags="Javascript, Gradle, NPM, RequireJS">
            <p>I thought that was interpreted!</p>
            <p>Internal discussion on how Javascript is processed at PAI. Talk entailed a start to finish walk through
                detailing our static resource build pipeline, how files are found, what processing we do, and where
                files are put when finished.</p>
        </entry>
        <entry title="Mobilizing a Legacy User Base" meta="June 2018" tags="CSS, Gradle, Servlets"
               location="Big Sky Devcon, Bozeman, MT" location-url="https://bigskydevcon.org/">
            <p>Lightning Talk entitled "Mobilizing a Legacy User Base" presented at the 2018 Big Sky Devcon.</p>
            <p>Due to a user base largely using "Modern" mobile devices and "Legacy" desktop devices, a creative
                solution was required to prevent old PC's from experiencing a mobile platform as mobile screen
                resolutions increase.</p>
            <p>Talk covered splitting SCSS files into "desktop-only" and "mobile-only" and dynamically selecting the
                appropriate sheet based on user agent.</p>
            <iframe-container
                    show-text="View Presentation"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vT4jSLf8QD6xtkLmUz-VwsTii5IpGCTgQ5MBgTKBXoL8QQ0lBdhBC5woni7LXtxiQj7MKPkzGKidOLC/embed?start=false&loop=false&delayms=10000"
                    frameborder="0" width="100%" height="670" allowfullscreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true">
            </iframe-container>
        </entry>
        <entry title="The Butterfly Effect" meta="June 2017" location="PAI" tags="Programming, Java, Full Stack">
            <p>A discussion on how to trace the impacts of a change through a large application.</p>
            <iframe-container
                    show-text="View Presentation"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQkE671wvqVMFDEP2aUvFcQ4j_vs3IZ-HtfujO23E8udOPqufK6yST1BtABjTC3dJxDcWKRpJIS0kEB/embed?start=false&loop=false&delayms=10000"
                    frameborder="0" width="100%" height="670" allowfullscreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true">
            </iframe-container>
        </entry>
    </div>
</template>

<script>
    export default {
        name: "speaking"
    }
</script>

<style scoped>

</style>
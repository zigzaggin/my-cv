<template>
    <div class="speaking-page">
        <entry title="Building Javascript...?" meta="January 2019" location="PAI"
               tags="Javascript, Gradle, NPM, RequireJS">
            <p>I thought that was interpreted!</p>
            <p>Internal discussion on how Javascript is processed at PAI. Talk entailed a start to finish walk through
                detailing our static resource build pipeline, how files are found, what processing we do, and where
                files are put when finished.</p>
            <iframe-container
                    show-text="View Presentation"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRvkaT2_9b_QRS8M9WsR67nVLg_eekULUOn-sq49XSi0rtHYvFSu5bL6Xz391IvanJRdf19id063G_G/embed?start=false&loop=false&delayms=10000"
                    frameborder="0" width="100%" height="670" allowfullscreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe-container>
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
            <p>Presentation contained code examples of a simple imaginary system and a desired set of changes. This
                allowed us to discuss impact paths, and alternatives to proposed changes to reduce potential
                fallout.</p>
            <iframe-container
                    show-text="View Presentation"
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQkE671wvqVMFDEP2aUvFcQ4j_vs3IZ-HtfujO23E8udOPqufK6yST1BtABjTC3dJxDcWKRpJIS0kEB/embed?start=false&loop=false&delayms=10000"
                    frameborder="0" width="100%" height="670" allowfullscreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true">
            </iframe-container>
        </entry>
        <entry title="Stylesheets in PAI Reports" meta="March 2016" location="PAI" tags="Programming, CSS, Practices">
            <p>Internal presentation at PAI about our stylesheet eco system and best practices when creating styles.</p>
            <p>Due to the scale of PAI Reports, ensuring that styles are appropriately isolated is essential. This talk
                presented the patterns to follow to control styles at scale.</p>
        </entry>
        <entry title="Javascript and Its Role" meta="March 2016" location="PAI"
               tags="Programming, Javascript, Practices">
            <p>Internal presentation at PAI about expanding our Javascript stack and how to grow features without
                impacting other systems.</p>
            <p>In this talk I discussed how to prevent Javascript from escaping its intended behavior, how to share the
                page with
                other scripts and best practices for segregating logic by building logical modules.</p>
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
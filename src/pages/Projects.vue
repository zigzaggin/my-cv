<template>
    <div class="projects-page">
        <entry title="Tribal 106" meta="Jan. 2014 - Nov. 2015" tags="Java, Spring, Web, DB">
            <p>
                Web application designed to assist with National Historic Preservation Act, Section 106 (<a
                    href="https://www.nps.gov/history/tribes/Documents/106.pdf">?</a>)
                proposal authorization on tribal land in Northern Montana.
            </p>
            <p>
                The provided Software solution allowed companies desiring to build infrastructure on preserved land
                a tool to manage and submit all required paperwork to any involved tribes for an effected region.
            </p>
            <p>
                The software managed claims, invoicing, and payment tracking.
            </p>
            <p>
                Additionally, software for in person monitoring was provided that allowed tribe-authorized individuals
                to report on a project's status from a remote device and sync this data to the appropriate active proposal.
            </p>
            <p>
                The solution was written in Java, and utilized the Spring Web MVC as a front controller. Data was backed
                by a PostgreSQL DB. The web application was deployed to a VPS cluster with redundant backups and server
                fail-overs. Uploaded documents were stored in AWS S3 and archived into glacial storage several months
                after a proposal was approved/rejected.
            </p>
        </entry>
        <entry title="Go Do Things" meta="Aug. 2013 - Apr. 2014" tags="Java, Spring, Web, Startup" website="http://godothings.com">
            <p>Start Up in Missoula Montana working towards a platform that allowed users to answer a simple question: "What Should We DO Today?"</p>
            <p>The platform allowed companies to register activities and display photos, hours, pricing, etc.</p>
            <p>The long-term goal was to create a platform that dominate Google on terms like "What to do in Seattle?" and then provide a platform
                for ticket purchase, event registration, etc.</p>
            <p>I was the only developer on the project and built everything currently available on godothings.com.
                The LLC housing the project ultimately folded and I removed myself from the startup. The project was a great learning opportunity.</p>
            <p>The project was build with Java using JSPs and no proper front controlling framework. Spring was used for dependency wiring in the backend.</p>
        </entry>
    </div>
</template>

<script>
    export default {
        name: "projects"
    }
</script>

<style scoped>

</style>
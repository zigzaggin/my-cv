<template>
    <div class="projects-page">
        <entry title="Tribal 106" meta="Sep. 2013 - Nov. 2015" tags="Java, Spring, Web, DB">
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
                Additionally, software for in person monitoring was provided that allowed tribe authorized individuals
                to report on a project's status from a remote device and sync this data to the appropriate active proposal.
            </p>
            <p>
                The solution was written in Java, and utilized the Spring Web MVC as a front controller. Data was backed
                by a PostgreSQL DB. The web application was deployed to a VPS cluster with redundant backups and server
                fail-overs. Uploaded documents were stored in AWS S3 and archived into glacial storage several months
                after a proposal was approved/rejected.
            </p>
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
<template>
  <div class="code-doodles-page">
    <entry title="Cribbage Score Board" tags="Vue.js">
      <p>Lightweight set of widgets for keeping score while playing Cribbage on the beach!</p>
      <p>Uses Pinia to store score so that scores can be reversed easily. Fun evening of work.</p>
      <a href="https://github.com/zigzaggin/cribbage" class="button" target="_blank">View Source</a>
      <a href="https://zigzaggin.github.io/cribbage/" class="button" target="_blank">View Doodle</a>
    </entry>
    <entry title="Fretboard" tags="Vue.js">
      <p>A visual representation of a stringed instrument neck, allows users to select a string at a fret and
        view the note and its other positions across the neck.</p>
      <p>Supports any fretted string instrument.</p>
      <a href="https://zigzaggin.github.io/fretboard/" class="button" target="_blank">View Doodle</a>
    </entry>
    <entry title="Stopwatch" tags="Vue.js">
      <p>A simple tool built for my wife to run concurrent timers and keep running totals per timer.</p>
      <p>Uses local storage to persist state between uses.</p>
      <a href="https://github.com/zigzaggin/stopwatch" class="button" target="_blank">View Source</a>
      <a href="https://zigzaggin.github.io/stopwatch/" class="button" target="_blank">View Doodle</a>
    </entry>
    <entry title="Ticker" tags="Vue.js">
      <p>A simple tool built for my wife to monitor positive and negative goal 'ticks' while executing therapy sessions.</p>
      <p>Uses local storage to persist state between uses.</p>
      <a href="https://github.com/zigzaggin/ticker" class="button" target="_blank">View Source</a>
      <a href="https://zigzaggin.github.io/ticker/" class="button" target="_blank">View Doodle</a>
    </entry>
    <entry title="OCR Sheet" tags="Hackday">
      <p>A hack day project to take lead sheets in standard musical notation and convert them to Nashville Number Notation.</p>
      <p>Not actively deployed anywhere at this point.</p>
      <a href="https://github.com/zigzaggin/ocrsheet" class="button" target="_blank">View Source</a>
    </entry>
  </div>
</template>

<script>
import entry from "@/components/Entry"

export default {
  name: "CodeDoodles",
  components: {entry}
}
</script>

<style scoped>

</style>

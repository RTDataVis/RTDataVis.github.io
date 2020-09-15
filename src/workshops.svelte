<script>
  import Grid from "./grid2.svelte";
  let Heading = "Workshops";
  import TilesArray from "./workshops_data.js"
</script>

<Grid {Heading} {TilesArray} />
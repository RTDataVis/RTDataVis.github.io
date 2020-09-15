<script>
  import Grid from "./grid.svelte";
  import Grid2 from "./grid2.svelte"
  import TilesArray from "./project_data.js"
  let Heading = "Projects";
</script>

<Grid2 {Heading} {TilesArray} />
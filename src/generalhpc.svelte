<script>
  import Grid from "./grid2.svelte";
  let Heading = "General HPC Protocols";
  import TilesArray from "./hpc_data.js"
</script>

<Grid {Heading} {TilesArray} />
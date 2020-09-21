<script>
  import Grid from "./grid.svelte";
  import Grid2 from "./grid2.svelte"
  import ProjectTilesArray from "./project_data.js"
  import OrgTilesArray from "./organization_data.js"
  import WorkshopTilesArray from "./workshops_data.js"
  import HPCTilesArray from "./hpc_data.js"
  let Heading = "Showcase";
</script>

<style>
#holder {
  height:100%
}</style>
<div id="holder">
<Grid2 {Heading} TilesArray ={[...ProjectTilesArray,...OrgTilesArray,...WorkshopTilesArray,...HPCTilesArray]} />
</div>
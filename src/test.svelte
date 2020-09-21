<script>
  import ProjectTilesArray from "./project_data.js";
  import STile from "./simple_tile.svelte";
</script>

<style>
  #holder {
    display: flex;
    flex-direction: column;
    width:80%;
    flex-wrap: wrap;
    align-content:space-between;
  }
  #outer {
      display:flex;
      justify-content: center;
      height:1000px;
  }
</style>
<div id="outer">
<div id="holder">
  {#each ProjectTilesArray as tile}
    <STile Info={tile} />
  {/each}

</div>
</div>
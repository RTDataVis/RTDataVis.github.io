<script>
  import ProjectTilesArray from "./project_data.js";
  import OrgTiles from "./organization_data.js";
  import WorkshopsTiles from "./workshops_data.js";
  import HPCTiles from "./hpc_data.js";

  import STile from "./simple_tile.svelte";
  import { onMount } from "svelte";
  let holder;
  onMount(() => {
    console.log(ProjectTilesArray.length);
    let allTiles = [
      ...OrgTiles,
      ...WorkshopsTiles,
      ...ProjectTilesArray,
      ...HPCTiles
    ];
    for (let tile of allTiles) {
      new STile({
        target:holder,
        props: {
          Info: tile
        }
      });
    }
    console.log(holder.getBoundingClientRect().height)
    // setTimeout(()=> {
    //     let avHeight = holder.getBoundingClientRect().height/allTiles.length
    //     holder.style.height = `${holder.getBoundingClientRect().height/2.5}px`
    // },3000)
  });
</script>

<style>
  .holder {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    height:1500px;
    overflow:scroll;
    background:lightgray;
    border-radius:10px;
    overflow-y:hidden;
  }
  #outer {
    display: flex;
    justify-content: center;
  }
</style>

<div id="outer">
  <div class="holder" bind:this={holder} />
</div>

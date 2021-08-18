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
    let sorted = [...allTiles].sort((a,b)=>{
      // if under construction put first
      if (a.image =="developing.png"){
        return -1
      } else {
        return 1
      }
    })
    for (let tile of sorted) {
      console.log(tile)
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
    background:lightgray;
    border-radius:10px;
    columns:4;
    padding:2%;
  }
  #outer {
    display: flex;
    width:100%;
    justify-content: center;
  }
</style>

<div id="outer">
  <div class="holder" bind:this={holder} />
</div>

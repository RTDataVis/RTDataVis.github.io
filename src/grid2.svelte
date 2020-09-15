<script>
  import { onMount } from "svelte";
  import Tile from "./TileElement.svelte"
  export let Heading, TilesArray;
  onMount(()=> {
      console.log(TilesArray)
  })
</script>

<style>
  #holder {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
  }
  #center {
    display: flex;
    justify-content: center;
  }
</style>

<h2>{Heading}</h2>
<div id="center">
  <div id="holder" >
     {#each TilesArray as tile} <Tile {tile}></Tile> {/each}
  </div>
</div>

<script>
  import { onMount } from "svelte";
  import Tile from "./TileElement.svelte";
  export let Heading, TilesArray;
  onMount(() => {
    console.log("content of showcase", TilesArray);
  });
</script>

<style>
  #holder {
    display: flex;
    width: 80%;
    height: 30%;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
  #center {
    display: flex;
    justify-content: center;
  }
  #headingHolder {
    width: 20%;
  }
</style>

  <div id="holder">
    {#each TilesArray as tile}
      <Tile {tile} />
    {/each}
  </div>

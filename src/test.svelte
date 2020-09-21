<script>
  import ProjectTilesArray from "./project_data.js";

  import STile from "./simple_tile.svelte";
  import { onMount } from "svelte";
  let col1, col2, col3,col4;
  onMount(() => {
    console.log(ProjectTilesArray.length);
    let columns = [col1, col2, col3,col4];
    for (let i = 0; i < ProjectTilesArray.length; i += 3) {
      console.log(i);
      for (let j = 0; j < columns.length; j++) {
        if (ProjectTilesArray[i + j] != undefined) {
          new STile({
            target: columns[j],
            props: {
              Info: ProjectTilesArray[i + j]
            }
          });
        }
      }
    }
  });
</script>

<style>
    #columnsHolder {
        width:80%;
        display:flex;
    }
  .holder {
    display: flex;
    flex-direction: column;
  }
  #outer {
    display: flex;
    justify-content: center;
  }
</style>

<div id="outer">
<div id="columnsHolder">
  <div class="holder" id="col1" bind:this={col1} />
  <div class="holder" id="col2" bind:this={col2} />
  <div class="holder" id="col3" bind:this={col3} />
  <div class="holder" id="col4" bind:this={col4} />
</div>
</div>

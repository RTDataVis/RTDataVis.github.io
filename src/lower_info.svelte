<script>
  import { onMount } from "svelte";
  import InfoSection from "./info_section.svelte"
  export let Heading, InfoArray;
  onMount(()=> {
      console.log(InfoArray)
  })
</script>

<style>
  #holder {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: start;
  }
  #center {
    display: flex;
    justify-content: center;
  }
</style>

<h2>{Heading}</h2>
<div id="center">
  <div id="holder" >
     {#each InfoArray as info} <InfoSection {info}></InfoSection> {/each}
  </div>
</div>
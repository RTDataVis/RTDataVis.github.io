<script>
  export let info;
  let holder
  import { onMount } from "svelte";
  onMount(()=> {
      holder.id = `${info.link}`
      console.log("info is",info)
  })
</script>


<div class="infoDiv" bind:this={holder}>
<div id="contents">
  <div id="text">
    <h2>{info.title}</h2>
    <p>{info.subtext}</p>
    {#if info.contact!= ""}
    <p>Contact: {info.contact}</p>
    {/if}

  </div>
</div>
</div>
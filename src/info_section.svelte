<script>
  export let info;
  let holder
  import { onMount } from "svelte";
  onMount(()=> {
      holder.id = `${info.link}`
      console.log("info is",info)
  })
</script>

<style>
.links-holder {
display:flex;
flex-direction:column;
align-items:center;
}
.links-holder li {
width:80%
}
</style>

<div class="infoDiv" bind:this={holder}>
<div id="contents">
  <div id="text">
    <h2>{info.title}</h2>
    <p>{info.subtext}</p>
    {#if info.contact!= ""}
    <p>Contact: {info.contact}</p>
    {/if}
    {#if info.projlinks != undefined }

	    <div class="links-holder">
	     {#each info.projlinks as {text,url},i}
	     {#if url==""}
	     {:else}
		      {#if text != "In progress"}
		     <li>
				<p>{text} </p>
				<a href="{url}">{url}</a>
			</li>
				{:else}
				<p> In progress</p>
			{/if}
			{/if}
	     {/each}
	     </div>
     {/if}
  </div>
</div>
</div>

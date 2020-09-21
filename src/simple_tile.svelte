<script>
  export let Info;
  import { onMount } from "svelte";
  onMount(() => {
    console.log(Info);
  });
</script>

<style>
  .tile {
    border: 1px black solid;
    width:80%;
    border-radius: 10px;
  }
  img{
      display:block;
      width:100%;
  }
</style>

<div class="tile">
    <img src={Info.image} alt="">
  <h2>{Info.title}</h2>
</div>

<script>
  export let Info;
  import { onMount } from "svelte";
  onMount(() => {
    console.log(Info);
  });
</script>

<style>
  .tile {
       border: rgba(0, 0, 0, 0.25) solid 2px; 
    width:25%;
    border-radius: 10px;
    padding:2px;
    margin:2%;
  }
  img{
      display:block;
      width:100%;
  }
  h2{
      text-align: center;
  }
  a{
      color:black;
  }
</style>

<div class="tile">
<a href={"#"+Info.link}>
    <img src={Info.image} alt="">
  <h2>{Info.title}</h2>
  </a>
</div>

<script>
  export let tile;
  import { onMount } from "svelte";
  onMount(() => {
    console.log(tile);
  });
</script>

<style>
  .tileDiv {
    width: 25%;
    margin: 2%;
    border-radius: 0.5em;
    border: rgba(0, 0, 0, 0.25) solid 2px;
  }
  img {
    display: block;
    width:100%;
  }
  #text {
      margin:1%;
  }
  h2{
      text-align:center;
  }
  a {
      color:black;
  }

</style>

<div class="tileDiv">
<div id="contents">
<a href={"#"+tile.link}>
  <!-- <img src={tile.image} alt="" /> -->
  <div id="text">
    <h2>{tile.title}</h2>
  </div>
</a>
</div>
</div>

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
    border-radius: 10px;
    padding: 2px;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  img {
    display: block;
    width: 100%;
  }
  h2 {
    text-align: center;
  }
  a {
    color: black;
  }
</style>

<div>
  <a href={'#' + Info.link}>
    <div class="tile">
      <div>
        <img src={Info.image} alt="" />
      </div>
      <div>
        <h2>{Info.title}</h2>
      </div>
    </div>
  </a>
</div>

<script>
  let can, range, ctx;
  let a = 1,
    b = 1;
  import { onMount } from "svelte";

  $: {
    if (ctx != undefined) {
      ctx.clearRect(0, 0, can.width, can.height);
      ctx.fillRect(0, 0, parseFloat(a), parseFloat(b));
    }
  }

  onMount(() => {
    ctx = can.getContext("2d");
    ctx.fillRect(0, 0, 20, 20);
  });
</script>

<canvas bind:this={can} />
<label for="">
  <input bind:value={a} min="0" max="200" type="range" />
  <input type="text" bind:value={a} />
</label>

<label for="">
  <input bind:value={b} min="0" max="200" type="range" />
  <input type="text" bind:value={b} />
</label>
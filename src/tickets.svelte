<script>
  import Grid from "./grid.svelte";
  let Heading = "Tickets (emails, short chats)";
  let TilesArray = [
    {
      title: "First",
      image: "test.png",
      link: "test.html",
      subtext: "lorem"
    },
    {
        title:"Second",
        image:"test.png",
        link:"test.html",
        subtext:"lorem"
    }
  ];
</script>

<Grid {Heading} {TilesArray} />
<script>
  import { onMount } from "svelte";
  export let Heading, TilesArray;
  let holder

  let Tile = () => ({
    title,
    image,
    link
  });

  let TileElement = ({ tile }) => ({
    tile,
    makeDomEle() {
      let tileDiv = document.createElement("div");
      tileDiv.className = "TileElement";
      let contents = this.makeContents();
      for (let c of contents) {
        tileDiv.append(c);
      }
      return tileDiv;
    },
    makeContents() {
      let titleDiv = document.createElement("div")
      let titleEle = document.createElement("h2");
      titleDiv.append(titleEle)
      titleEle.innerHTML = this.tile.title;
      let linkEle = document.createElement("a");
      linkEle.href = this.tile.link;
      let imageEle = document.createElement("img");
      imageEle.src = this.tile.image;
      let subText = document.createElement("p");
      subText.innerHTML = this.tile.subtext.length > 20?  this.tile.subtext.slice(0,20) + "..." : this.tile.subtext;
      return [imageEle,titleDiv, linkEle, subText];
    }
  });

  let BaseTileMaker = ({ tiles }) => ({
    tiles,
    getElements() {
      return this.elements;
    },
    makeManyNum() {
      this.elements = [];
      for (let tile of this.tiles) {
        let tileElement = TileElement({ tile });
        this.elements.push(tileElement.makeDomEle());
      }
    }
  });

  // demo set, its a kind of builder for the demo version of tiles
  let DemoBuilder = () => ({
    build() {
      let tile = {
        title: "test",
        image: "test.png",
        link: "test.html",
        subtext: "loremipsum"
      };
      let bt = BaseTileMaker({
        tiles: Array(20)
          .fill(0)
          .map(e => {
            return { ...tile };
          })
      });
      bt.makeManyNum();
      return bt;
    }
  });
let ExternalInputBuilder =()=>({
  build() {
    let bt = BaseTileMaker({
      tiles:TilesArray
    })
    bt.makeManyNum()
    return bt
  }
})
  let director = () => ({
    start(builder) {
      let bt = builder.build();
      console.log(bt);
      for (let d of bt.getElements()) {
        holder.append(d);
      }
    }
  });

  onMount(() => {
    let d = director();
    if (TilesArray == undefined) {
      d.start(DemoBuilder());
    } else {
      // use a real Builder
      d.start(ExternalInputBuilder())
    }
  });
</script>

<style>
  #holder {
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: center;
  }
  #center {
    display: flex;
    justify-content: center;
  }
</style>

<h2>{Heading}</h2>
<div id="center">
  <div id="holder" bind:this={holder} />
</div>

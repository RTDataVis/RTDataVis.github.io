<script>
import LowerInfo from "./lower_info.svelte"
  import InfoArray from "./workshops_data.js"
  let Heading = "Workshops";
</script>
<LowerInfo {Heading} {InfoArray}></LowerInfo>
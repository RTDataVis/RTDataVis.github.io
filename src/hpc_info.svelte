<script>
import LowerInfo from "./lower_info.svelte"
  import InfoArray from "./hpc_data.js"
  let Heading = "General HPC Protocols";
</script>
<LowerInfo {Heading} {InfoArray}></LowerInfo>

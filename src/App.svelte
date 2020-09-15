<script>
  //import Examples from "./examples.svelte"
  //import Canvas from "./canvas.svelte"
  import Projects from "./projects.svelte";
  import GeneralHPC from "./generalhpc.svelte";
  import Organization from "./organization.svelte";
  import Dropins from "./dropins.svelte";
  import Workshops from "./workshops.svelte";
  import ProjectsInfo from "./projects_info.svelte";
  import HPCInfo from "./hpc_info.svelte";
  import OrgInfo from "./organization_info.svelte";
</script>

<style>
  /* vertical text holder */
  .vtholder {
    display: flex;
    flex-direction: column;
  }
  .vholder {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .hholder {
    display: flex;
    width: 80%;
    align-items: baseline;
  }
  .hholder div {
    margin-right: 5%;
  }

  #center {
    display: flex;
    justify-content: center;
  }
  #top {
    display: flex;
    justify-content: center;
  }
  .infoOuter {
    display: flex;
    justify-content: center;
  }
  .infoInner {
    width: 80%;
  }
</style>

<div id="top">
  <div class="hholder">
    <div id="buffer">
      <img src="logo.png" />
    </div>
    <div id="info">
      <a href="#infoText">
        <h3>RTDV-Info</h3>
      </a>
    </div>
    <div id="who">
      <a href="#whoText">
        <h3>Members</h3>
      </a>
    </div>
    <div id="intake">
      <a href="rtdv-intake.glitch.me">
        <h3>Project Request</h3>
      </a>
    </div>
    <div id="hpc">
      <a href="#hpcText">
        <h3>UA HPC</h3>
      </a>
    </div>
  </div>
</div>
<div id="center">
  <div class="vholder">
    <h1>Enablement</h1>
    <Projects />
    <GeneralHPC />
    <Organization />
    <h1>Engagement</h1>
    <Dropins />
    <Workshops />

    <div id="infoSection">
      <!-- this is where the tiles and links should take us -->
      <div id="infoText">
        <h1>RTDV - Info</h1>
        <div class="infoOuter">
          <div class="infoInner">
            <h3>What is Visualization?</h3>
            <p>
              Visualization Consulting is a service that allows researchers to
              create graphical representations of their data. These
              computer-generated images and animations allow researchers to
              visually analyze that data and see the results of changing
              specific parameters.
            </p>
            <h3>What we do</h3>
            <ul>

              <li>Visualization, Animation, and Mapping Software</li>
              <li>Virtual reality (VR) and augmented reality (AR)</li>
              <li>Interactive web visualizations</li>
              <li>3D modeling</li>
              <li>Photogrammetry</li>
              <li>Advanced or large scale visualizations using the HPC</li>

            </ul>

          </div>
        </div>
      </div>
      <div id="whoText">
        <h1>Meet our team</h1>
        <div class="infoOuter">
          <div class="infoInner">
            <h3>Devin Bayly</h3>
            <p>
              I'm a member of the Research Technologies Data & Visualization
              team at the University of Arizona. I work with researchers,
              students and faculty to bring your data to life through drop ins,
              1:1 consultations, collaborative projects both short & long term,
              and general protocols enhancing the visualization offerings of our
              High Performance Computer (HPC).
            </p>

          </div>
        </div>
      </div>
      <div id="hpcText">
        <h1>University of Arizona's HPC</h1>
        <div class="infoOuter">
          <div class="infoInner">
            <h3>Homepage</h3>
            <a href="https://it.arizona.edu/service/high-performance-computing">
              <p>
                Here you can find an overview of the HPC service and other info
                such as eligibility or support
              </p>
            </a>

          </div>
        </div>
      </div>
    </div>
    <h1>Additional Information</h1>
    <!-- verbose section, where the tiles link -->
    <ProjectsInfo />
    <HPCInfo />
    <OrgInfo />

  </div>
</div>

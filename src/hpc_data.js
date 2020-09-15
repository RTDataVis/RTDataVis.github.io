export default [
  {
      "title":"VirtualGL for nVidia Accelerated Remote HPC Visualizations",
      "subtext":"This protocol will expand on previous work in letting users connect their local work machines to graphical applications running on the HPC. The benefit will be that the actual screen rendering will be accomplished by the GPU allocated to their session. This will lead to increased frames per second, and more responsive applications. It will also make it possible to perform web visualizations on the HPC with the benefit of the hardware on the HPC. This will greatly improve the range of projects I can tackle with the benefit of the HPC.",
      "image":"developing.png",
      "link":"virtualgl",
      "projlinks":"",
      "contact":""
     },
  {
    "title": "Iodide on HPC",
    "subtext": "Iodide was an effort to do data science entirely in the browser. I believed it could be used for researchers to explore and visualize their results all from within the HPC environment. Unfortunately, I moved away from this as there are memory bottlenecks that prevent browser solutions from being a best fit for the HPC environment. ",
    "link":"iodide",
    "image": "iodide.png",
    "projlinks": "",
    "contact": ""
  },
  {
    "title": "Network Managed Computation with Jetstream and HPC",
    "subtext": "A networked program is one where the graphical interface runs in a different machine than the computation. I successfully created a method to run the Metashape program between a Jetstream virtual machine, and the HPC. This made it possible to use Metashape as if it was on your local computer, but with the performance of the HPC allocation.",
    "link":"jetstreamhpc",
    "image": "metashape_jetstream.png",
    "projlinks": "",
    "contact": ""
  },
  {
    "title": "Xpra and Singularity for Comprehensive Graphical Application Support on HPC",
    "subtext": "I continued to experiment with the above methods and created a technique that doesn’t require Jetstream, and works with all the programs I’ve tested. This means a user can use any specific program like it is installed on their local computer, but with the performance of whatever active job they are running on the HPC. ",
    "image": "xpra_singularity.png",
    "link":"xprasingularity",
    "projlinks": "",
    "contact": ""
  }
] 
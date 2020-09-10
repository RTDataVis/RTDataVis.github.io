<script>
  import * as THREE from "three/build/three.module.js"
  import{OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
  import Stats from 'three/examples/jsm/libs/stats.module.js';
  var camera, controls,stats,scene, renderer;
  var geometry, material, mesh;
let boxes;
  let simpleBox = ({ coords, size }) => ({
    coords,
    size,
    make() {
      this.material = new THREE.MeshNormalMaterial();

      this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
      this.mesh = new THREE.Mesh(this.geometry, this.material);
      this.mesh.position.x = this.coords.x;
      this.mesh.position.y = this.coords.y;
      this.mesh.position.z = this.coords.z;
    },
    getMesh() {
      return this.mesh;
    }
  });

  init();
  animate();
  
  function init() {
    camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.z = -100;

    scene = new THREE.Scene();
    boxes = [];
    for (let i = 0; i < 1000; i++) {
      let box = simpleBox({
        coords: {
          x: Math.random() * 50 - 20,
          y: Math.random() * 50 - 20,
          z: Math.random() * 50 - 20
        },
        size: 1
      });
      box.make();
      boxes.push(box.getMesh());
      scene.add(box.getMesh());
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    controls = new OrbitControls(camera,renderer.domElement)
    // create states
    stats = new Stats()
    document.body.append(stats.dom)
  }

  function animate() {
      controls.update()
    requestAnimationFrame(animate);
    if (boxes.length > 0) {
      for (let box of boxes) {
        box.rotation.x += 0.01;
        box.rotation.y += 0.0002;
      }
    }
    stats.update()

    renderer.render(scene, camera);
  }
</script>

<div id="holder">
  <p>testing</p>
</div>

define(["threelib/three"], function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  
  var scene = new THREE.Scene();
  var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, -20, 20 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  var geometry = new THREE.PlaneGeometry(width,height, 1, 1);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  var plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  camera.position.z = 5;

  var render = function () {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
  };
      
  return {
    render: render,
    renderer: renderer
  }
});

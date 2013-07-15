define(["threelib/three"], function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  
  var scene = new THREE.Scene();
  var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  var geometry = new THREE.CubeGeometry(1,1,1);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  var render = function () {
    requestAnimationFrame(render);
    
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
  };
      
  return {
    render: render,
    renderer: renderer
  }
});

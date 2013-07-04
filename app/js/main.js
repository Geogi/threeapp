requirejs.config({
  paths: {
    threelib: "../bower_components/threejs/build"
  }
})

require(["canvas"], function(canvas) {
  document.body.appendChild(canvas.renderer.domElement);
  canvas.render();
});
var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
// Add your code here matching the playground format
var createScene = function () {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;
    // Import Red Yeti
    BABYLON.SceneLoader.ImportMesh("", "assets", "scene.glb", scene, function (newMeshes) {
        var yetiMesh = newMeshes[0];
        yetiMesh.material.diffuseColor = BABYLON.Color3.Red();
        yetiMesh.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    });
    return scene;
};
var scene = createScene(); //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
//# sourceMappingURL=helloworld.js.map
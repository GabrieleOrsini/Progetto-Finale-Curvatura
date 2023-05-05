function preload(){
  treeModel = loadAsset("albero.glb")


}
function setup() {
  createCanvas3D(600, 400);
  background3D("#333333");
  
  var albero = beginGroup();
  
  endGroup()
  
  var lato= 100;
  var lato2= 100;
  var numeroAlberi = 50;
  
  for (var i=0; i<=numeroAlberi; i++){
    
    var x = random(-lato/2, lato/2);
    var y = 0;
    var z = random(-lato/2, lato/2);
    
    clone(treeModel, x, y, z);
  }
  

  
  
  
  
}
function draw() {

}

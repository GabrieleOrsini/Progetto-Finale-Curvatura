function preload(){
  treeModel = loadAsset("albero.glb")
  burnedTree = loadAsset("rock_and_burned_tree.glb")
  cherryTree = loadAsset("cherry_tree.glb")


}
function setup() {
  createCanvas3D(600, 400);
  background3D("#333333");
  
  var albero = beginGroup();
  
  endGroup()
  
  var lato= 100;
  var lato2= 100;
  var numeroAlberi = 10;
  
  for (var i=0; i<=numeroAlberi; i++){
    
    var x = random(-lato/2, lato/2);
    var y = 0;
    var z = random(-lato/2, lato/2);

    var a = random(-lato/2, lato/2);
    var b = 0;
    var c = random(-lato/2, lato/2);
    
    clone(cherryTree, x, y ,z);
    clone(burnedTree, a, b, c);
  }
  

  
  
  
  
}
function draw() {

}

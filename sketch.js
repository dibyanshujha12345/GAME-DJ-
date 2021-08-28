const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;
var enemy;
var rock;
let engine,world;
var aeroplane;
var aeroImg,skyImg;
var space;
var g1,g2;
var bridge;
var join;
var btn;
var rocket;
var rocketImg,no;
function preload(){

  aeroImg = loadImage("./assets/Aeroplane.png");
  skyImg = loadImage("./assets/SKYi.png");
  rocketImg = loadImage("./assets/rocket.png");
}



function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile ){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth+80,displayHeight);
  }else{
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth,windowHeight);
  }

  engine = Engine.create();
  world = engine.world;




var rokOpt ={
  restitution:0.99,
  isStatic:true
}

aeroplane = Bodies.rectangle(100,100,200,200,rokOpt);
  World.add(world,aeroplane);

  var options={
    isStatic:true
  }
  g1 = Bodies.rectangle(0,0,width,200,options);
World.add(world,g1);
  g2 = Bodies.rectangle(0,height-12,width,10,options);
World.add(world,g2);

bridge = new Bridge(16, {x:width/2,y:0});


btn  = createImg('./assets/cut_btn.png');
btn.position(width/2-20,50);
btn.size(60,60);
btn.mouseClicked(create);


enemy =Bodies.rectangle(random(width-500,width-100),random(50,height-50),200,200 );
World.add(world,enemy);


enemy2 =Bodies.rectangle(random(width-500,width-100),random(50,height-50),200,200 );
World.add(world,enemy2);

enemy3 =Bodies.rectangle(random(width-500,width-100),random(50,height-50),200,200 );
World.add(world,enemy3);

enemy4 =Bodies.rectangle(random(width-500,width-100),random(50,height-50),200,200 );
World.add(world,enemy4);

enemy5 =Bodies.rectangle(random(width-500,width-100),random(50,height-50),200,200 );
World.add(world,enemy5);




}


function draw() 
{
  background(51);
  
 




  
 


 

 if(enemy.position.x<0){
   enemy.position.x = random(width-300,width-20);
 }
 if(enemy2.position.x<0){
  enemy2.position.x = random(width-300,width-20);
}
if(enemy3.position.x<0){
  enemy3.position.x = random(width-300,width-20);
}
if(enemy4.position.x<0){
  enemy4.position.x = random(width-300,width-20);
}
if(enemy5.position.x<0){
  enemy5.position.x = random(width-300,width-20);
}
 
  image(skyImg,0,0,width,height);
  imageMode(CENTER); 
  
  image(aeroImg,aeroplane.position.x,aeroplane.position.y,200,200);
  image(rocketImg,enemy.position.x,enemy.position.y,200,200);
  image(rocketImg,enemy2.position.x,enemy2.position.y,200,200);
  image(rocketImg,enemy3.position.x,enemy3.position.y,200,200);
  image(rocketImg,enemy4.position.x,enemy4.position.y,200,200);
  image(rocketImg,enemy5.position.x,enemy5.position.y,200,200);
  
  Engine.update(engine);

  rect(g1.position.x,g1.position.y,width,10);
  rect(g2.position.x,g2.position.y,width,10); 

 

 
bridge.show();



drawSprites();
}


function create(){
  
bridge.break();

Matter.Body.applyForce(enemy,{x:0,y:0},{x:-5,y:0})
if(enemy.position.x<0){
  enemy.position.x = random(width-300,width-20);
}
if(enemy2.position.x<0){
 enemy2.position.x = random(width-300,width-20);
}
if(enemy3.position.x<0){
 enemy3.position.x = random(width-300,width-20);
}
if(enemy4.position.x<0){
 enemy4.position.x = random(width-300,width-20);
}
if(enemy5.position.x<0){
 enemy5.position.x = random(width-300,width-20);
}



engine.world.gravity.y = -0.000000001;


  


}


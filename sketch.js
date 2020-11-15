const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;

var box1, box2, ground1;

function setup() {

  var canvas=createCanvas(400,400);
  myEngine=Engine.create(); 
  myWorld=myEngine.world;
  box1=new Box(200,100,50,100);
  box2=new Box(200,300,50,50);
  ground1=new Ground(200,390,400,20);
}

function draw() {
  background(0,0,0); 
  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground1.display();
}
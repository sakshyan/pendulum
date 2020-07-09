const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var chain1;

function setup() {
 var canvas =  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  stand= new Box(400,150,200,30);
  chain= new SlingShot(stand.body,weight.body);
  weight   = new Circle(450,300,50);
}

function draw() {
  background("white");  
  
  Engine.update(engine);

  stand.display();
  weight.display();
  chain.display();

}

function keyPressed(){
 if(keyCode === 32){
    weight.body.position.x = mouseX;
    weight.body.position.y = mouseY;
 
  }

}
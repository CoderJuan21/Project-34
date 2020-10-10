const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball1;
var sling1;


function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

 ball1 = new Ball(100,100, "orange");
 ball2 = new Ball(165,100, "blue");
 ball3 = new Ball(230,100, "lime");
 ball4 = new Ball(295,100, "red");
 ball5 = new Ball(360,100, "purple");

 sling1 = new Sling(ball1.body, {x:100, y:50});
 sling2 = new Sling(ball2.body, {x:165, y:50});
 sling3 = new Sling(ball3.body, {x:230, y:50});
 sling4 = new Sling(ball4.body, {x:295, y:50});
 sling5 = new Sling(ball5.body, {x:360, y:50});
 
 // rope = new Rope( ball.body, {x:300, y:50});

}

function draw() {
 Engine.update(engine);

  background("green");  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}



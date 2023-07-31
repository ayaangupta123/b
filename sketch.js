var ball;
var leftSide,rightSide;
var groundobj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundobj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(950,600,20,120);


    var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density: 1.2
	}
   ball = Bodies.circle(200,200,10,ball_options);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groundobj.display();
  leftSide.display();
  rightSide.display();

  drawSprites();
 KeyPressed();
}

function KeyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce (ball,{x:0,y:0},{x:0.05,y:0});
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var leftbin;
var rightbin;
var bottombin;
var bin
var paper;

function preload(){
	bin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,590,1200,20);
	leftbin=new Ground1(800,510,20,150);
	rightbin=new Ground1(1000,510,20,150);
	//bottombin=new Bin(900,550,200,400);
	bin1=createSprite(900,500,150,300);
	bin1.addImage(bin);
	paper=new Paper(100,500,50);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  if (keyDown("up")){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:19,y:-40});
  }
  ground.display();
  //bottombin.display();
  leftbin.display();
  rightbin.display();
  paper.display();
  drawSprites();
}




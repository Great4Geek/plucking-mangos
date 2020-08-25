
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground1 = new ground(400,675,800,50)
	tree1 = new tree (600,440,20,100)
	stone1 = new Stone (210,630,30)
	kid1 = new kid (250,625,70,100)
	mango1 = new mango (630,270,30)
	mango2 = new mango (560,380,30)
	mango3 = new mango (700,340,30)
	mango4 = new mango (620,390,30)
	mango5 = new mango (600,320,30)
	slingshot1 = new rope(stone1.body,{x:220,y:560});
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(13,219,216));
  
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
 
  ground1.display();
  tree1.display();
  stone1.display();
  kid1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot1.display();



  //drawSprites();
 
}

function mouseDragged()
{
   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased()
{
  slingshot1.fly();  
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  //console.log(distance)
  //console.log(lmango.radius+lstone.radius)
  if(distance<=lmango.radius+lstone.radius)
  {
	Matter.Body.setStatic(lmango.body,false);
  }
  }

  function keyPressed()
{
    if (keyCode===32){
      slingshot1.attach(stone1.body);
    }
}
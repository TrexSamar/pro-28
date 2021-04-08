
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneObj;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7

var mango, stone

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new stoneObj(235, 420, 30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
detectCollosion();

}

function detectCollosion(stone, mango) {

mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position 

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango.r + stone.r){

	Matter.Body.setStatic(mango.body, false)

}


detectCollosion(stoneObj, mango1);
detectCollosion(stoneObj, mango2);
detectCollosion(stoneObj, mango3);
detectCollosion(stoneObj, mango4);
detectCollosion(stoneObj, mango5);
detectCollosion(stoneObj, mango6);
detectCollosion(stoneObj, mango7);


}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body)
	}

}


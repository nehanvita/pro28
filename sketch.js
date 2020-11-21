
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,mango1,stone1;
var boyImage;

function preload() {
    boyImage = loadImage("plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	tree = new Tree(650,400,200,600)
	mango1 = new Mango(650,340,40,50)
	mango2 = new Mango(595,290,40,50)
	mango3 = new Mango(630,210,40,50)
	mango4 = new Mango(740,280,40,50)
	mango5 = new Mango(670,190,40,50)
	mango6 = new Mango(690,250,40,50)
	stone1 =new Stone(75,465,60,50)
	
	slingShot = new Slingshot(stone1.body,{x:20,y:340});

}


function draw() {
  background(84,147,240);
  
  textSize(25)
  text("press space to get second chance to play !!",50,50);
  image(boyImage,20,340,300,450)

 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 stone1.display();


 detectCollision(stone1,mango1)
 detectCollision(stone1,mango2)
 detectCollision(stone1,mango4)
 detectCollision(stone1,mango4)
 detectCollision(stone1,mango5)
 detectCollision(stone1,mango6)
 
 
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly()
}



function detectCollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{ Matter.Body.setStactic(lmango.body,false);

}

}

function keyPressed(){
	if(keyCode === 32){
   Matter.Body.setPosition(stone1.body,{x:235,y:420})
	launcherObject.attach(stone1.body);
	}
	}
	
	
	
	




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
    stone1 =new Stone(150,300,60,50)
  
}


function draw() {
  background(84,147,240);
  
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 stone1.display();
 

 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly()
}





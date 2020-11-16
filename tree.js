class Tree {

    constructor(x,y,width,height){
        var options ={
            isStatic :true,
            friction :0.1,
            density :0.3
        }
this.body =Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world,this.body)
this.image = loadImage("plucking mangoes/tree.png");

    }
     
    display(){
    var treepos=this.body.position
    imageMode(CENTER)
    image(this.image,treepos.x,treepos.y, this.width, this.height); 

    }








}
class Stone{

    constructor(x,y,width,height){

        var options = {
            isStatic:false,
            friction: 0.5,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.image = loadImage("plucking mangoes/stone.png");
        World.add(world, this.body)
       
    }
    display(){
        var stonepos =this.body.position;
        push()
        translate(stonepos.x,stonepos.y)
        imageMode(CENTER);
        fill(255,0,255);
        image(this.image,0,0,this.width,this.height);
        pop()
        
    }
}
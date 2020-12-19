class invisibleGround{

    constructor(x,y,width,height){
        //create physics rect/body
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world,this.body);
        this.w=width;
        this.h = height;
    }

    display(){
        rectMode(CENTER);
        fill("pink");
        rect(this.body.position.x,this.body.position.y, this.w, this.h);
    }
}



class Box{
constructor(x,y,width,height){
    var options={
        'restitution':0.8
    }
this.body=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER)
fill(255)
    rect(0,0,this.width,this.height);
}
}









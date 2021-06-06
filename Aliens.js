class Aliens{
    constructor(x,y, height, width){
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            
        }
        this.image = loadImage("images/pic1.png");
        this.alien = Bodies.rectangle(x, y,height, width, options);
        this.width = width;
        this.height = height;
        World.add(world,this.alien);
 }
 
 display(){
     var pos = this.alien.position
     imageMode(CENTER);
     image(this.image,pos.x,pos.y+70,this.width,this.height);
     
     if(this.alien.speed > 3){
        World.remove(world,this.alien);
     }
    }

}
class Hero{
    constructor(x,y, height, width){
        var options = {
            'isStatic': true,
            'restitution':0.8,
            'friction':1.0,
           
        }
        this.image = loadImage("images/pic8.png");
        this.hero = Bodies.rectangle(x, y,height, width, options);
        this.width = width;
        this.height = height;
        World.add(world,this.hero);
 }
 
 display(){
     var pos = this.hero.position
     imageMode(CENTER);
     image(this.image,pos.x,pos.y+70,this.width,this.height);
     pos.x = mouseX;
     pos.y = mouseY;
 }
}
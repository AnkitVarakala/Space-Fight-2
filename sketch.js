const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var alien1, aliensGroup;
var hero;

function preload(){
  backgroundImg = loadImage("images/pic11.jpg");
}

function setup() {
  engine = Engine.create();
 world = engine.world;
 //canvas size
 createCanvas(windowWidth,windowHeight);
  
 alien1 = new Aliens(windowWidth/2-150,0,100,100);
 alien2 = new Aliens(windowWidth/2-500,0,100,100);
 alien3 = new Aliens(windowWidth/2+150,0,100,100);
 alien4 = new Aliens(windowWidth/2+500,0,100,100);

hero = new Hero(windowWidth/2,windowHeight-150,100,100);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  alien1.display();
  alien2.display();
  alien3.display();
  alien4.display();

  hero.display();

  
drawSprites();
}
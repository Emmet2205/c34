const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var ball;
var rope;


function setup(){
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,500,1000,30);
    box = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(900,100,70,70);
    box8 = new Box(900,100,70,70);
    box9 = new Box(900,100,70,70);
    box10 = new Box(900,100,70,70);
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x: 700, y: 50});
}

function draw(){
    background(180);
    Engine.update(engine);
ground.display();
box.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
ball.display();
rope.display();
}

function mouseDragged(){
    Matter.body.setPosition(ball.body,{x: mouseX, y: mouseY});
}
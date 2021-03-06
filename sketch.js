const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundMain, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var ground1, ground2, stone, slingShot;

function preload() {

}

function setup() {
    createCanvas(1300, 700);

    engine = Engine.create();
    world = engine.world;
    groundMain = new Ground(650, 680, 1300, 10);
    ground1 = new Ground(700, 500, 250, 20);
    box1 = new Box(600, 450, 50, 50);
    box2 = new Box(650, 450, 50, 50);
    box3 = new Box(700, 450, 50, 50);
    box4 = new Box(750, 450, 50, 50);
    box5 = new Box(800, 450, 50, 50);
    box6 = new Box(620, 370, 50, 50);
    box7 = new Box(670, 370, 50, 50);
    box8 = new Box(720, 370, 50, 50);
    box9 = new Box(770, 370, 50, 50);
    box10 = new Box(690, 250, 50, 50);
    //part2
    ground2 = new Ground(1000, 300, 250, 20);
    box11 = new Box(900, 200, 50, 50);
    box12 = new Box(950, 200, 50, 50);
    box13 = new Box(1000, 200, 50, 50);
    box14 = new Box(1050, 200, 50, 50);
    box15 = new Box(1100, 200, 50, 50);
    box16 = new Box(950, 150, 50, 50);
    box17 = new Box(960, 150, 50, 50);
    box18 = new Box(990, 150, 50, 50);
    box19 = new Box(1070, 150, 50, 50);
    box20 = new Box(1000, 100, 50, 50);

    stone = new Stone(100, 500, 50, 50);
    slingShot = new SlingShot(stone.body, { x: 150, y: 300 });
    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);
    groundMain.display();
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    stone.display();
    slingShot.display();
    drawSprites();

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly();
}
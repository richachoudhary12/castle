const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
world = engine.world;

 stick1 = new stick (200, 200,50 , 200); 
 stick2 = new stick (250,250,50,200);
 stick3 = new stick (150,150,50,250);
 stick4 = new stick (100,200,50,200);
stick5 = new stick (50,250,50,200);
stick6 = new stick (10,100,10,300);
stick7 = new stick (330,100,10,300);
stick8 = new stick (158,140,35,10);
stick9 = new stick (163,130,25,10);
stick10 = new stick (167,120,15,10);

}

function draw() {
  background("black"); 
  Engine.update(engine) ;
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
 stick5.display();
 stick6.display();
 stick7.display();
 stick8.display();
 stick9.display();
 stick10.display();
}
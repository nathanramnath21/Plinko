const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var devider1, devider2, devider3, devider4, devider5, devider6, devider7;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(485,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 780, 1200, 10);

  devider1 = new Division(0, 680, 5, 200);
  devider2 = new Division(80, 680, 10, 200);
  devider3 = new Division(160, 680, 10, 200);
  devider4 = new Division(240, 680, 10, 200);
  devider5 = new Division(320, 680, 10, 200);
  devider6 = new Division(400, 680, 10, 200);
  devider7 = new Division(480, 680, 5, 200);

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375,10));
     
  }
  
}

function draw() {
   background(0);

   Engine.update(engine);





   devider1.display();
   devider2.display();
   devider3.display();
   devider4.display();
   devider5.display();
   devider6.display();
   devider7.display();
   ground.display();

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   

}
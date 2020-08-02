var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  fill(80,80,80);
}


function draw() {
  background(0);  
  collide(bullet, wall)
  drawSprites();
  } 




var car,wall
var weight,speed



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  //RANDOM SPEED AND WEIGHT
speed = random(55,90)
weight = random(400,1500)

car = createSprite(50,200,20,20)
car.velocityX = speed


wall = createSprite(1500,200,60,height/2)
wall.shapeColor = color(80,80,80)


}

function draw() {
  background(255,255,255);  
  drawSprites();



}
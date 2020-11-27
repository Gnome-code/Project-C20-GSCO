var car, wall, speed, weight;



function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 50, 50);
  wall = createSprite(1300,200,60, height/2)
  wall.shapeColor = (80,80,80)
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed
}

function draw() {
  background("black");  
  drawSprites();

  if(wall.x-car.x < (car.width + wall.width))
{
  car.velocityX = 0
  var defor = 0.5*weight*speed*speed/22509
  if(defor>180){
    car.shapeColor=color(255,0,0)
  }
  if(defor<180 && defor>100){
    car.shapeColor=color(230,230,0)
  }
  if(defor<100){
    car.shapeColor=color(0,255,0)
  }

  }
}
var thickness, speedie, weight, sniperBullet, wall, damage;

function setup() {
  createCanvas(1600, 400);
 
  thickness = random(22, 83);
  sniperBullet = createSprite(100, 200, 30, 15);
  sniperBullet.shapeColor = color(255, 255, 255);

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80);

  speedie= random(223, 321);
  weight = random(30, 52);

  sniperBullet.velocityX = speedie;

}

function draw() {

  background(0);
  if(collide(wall, sniperBullet)){
    sniperBullet.velocityX = 0;

    damage = (0.5 * weight * speedie * speedie) / (thickness**3);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is not effective", 700, 150);
      text("Damage Done : "+Math.round(damage), 700, 200)
    }
    
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
      textStyle("bold");
      textSize(30);
      fill(130, 130, 255);
      text("Wall is effective", 700, 150);
      text("Damage Done : "+Math.round(damage), 700, 200)
    }
  
    drawSprites();
  
  }
}
function collide(o1, o2){
  if(o1.x - o2.x < (o1.width+o2.width)/ 2){
    return true;
  }
  return false;
  
  
}
var bullet, wall
var speed, weight

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)

  bullet=createSprite(50, 200, 50, 50)
  wall=createSprite(1500,200,60, height/2)
  wall.shapeColor = color(80, 80, 80)
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet, wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10){

      wall.shapeColor=color(255,0,0);

    }

    if(damage<10)[

      wall.shapeColor(0,255,0)

    ]

  }
  
  hasCollided();
  drawSprites();
}

function hasCollided(lbullet, lwall)

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    
    return true
  
  }
  
  return false;

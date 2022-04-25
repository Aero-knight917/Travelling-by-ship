var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg=loadAnimation("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;
  sea.velocityX = -3;
  
  ship = createSprite(50,200,20,50);
  ship.addAnimation("movingShip",shipImg);
  ship.scale = 0.25;
  
}

function draw() {
  background("blue");

  if(keyDown("space")) {
   ship.velocityX = 4;
  }
  
  if(keyDown("left")) {
   ship.velocityX = -5;
  }
  
  if(keyDown("enter")) {
   ship.velocityX = 0;
  }
  
  if(sea.x < 0) {
   sea.x = sea.width/2;
  }
    
  drawSprites();
}

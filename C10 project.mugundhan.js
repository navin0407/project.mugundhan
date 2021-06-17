var sea,ship ;
var seaimg,shipimg ;
function preload(){
 seaimg = loadImage("sea.png");
 shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background ("blue");
  sea = createSprite (400,200);
  sea.addImage(seaimg);
  sea.velocityX = -4;
  sea.scale =0.4;

  ship = createSprite(130,200);
  ship.addAnimation ("movimgship",shipimg);
  ship.scale =0.3;
}

function draw() {
  background("blue");
 sea.velocityX = -4;
 if (sea.x<0){
   sea.x =sea.width/8;

 }
 drawSprites();
 
}
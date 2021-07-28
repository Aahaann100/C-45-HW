var steve, steveImg
var mech, mechImg
var robot, robotImg
var portal, portalImg
var gun1, gun1Img
var gun2, gun2Img
var gun3, gun3Img
var gun4, gun4Img
var knife, knifeImg
var bullet, bulletImg
var missile, missileImg
var GameBackgroundImg

function preload(){
//mechImg=loadImage("Images/mech-1.jpg")
steveImg=loadImage("Images/steve-1.png")
GameBackgroundImg=loadImage("images/Background-images.jpg")


}


function setup(){
  createCanvas(1200,600)
  mech=createSprite(50,50,100,100)
  //mech.addImage("MECH",mechImg)
  steve=createSprite(100,100,50,50)
  steve.addImage("Steve",steveImg)
}


function draw(){
 background(GameBackgroundImg)
 if(keyWentDown(LEFT_ARROW)){
   steve.x=steve.x-20
 }
 if(keyWentDown(RIGHT_ARROW)){
  steve.x=steve.x+20
}
if(keyWentDown(UP_ARROW)){
  steve.y=steve.y-20
}
if(keyWentDown(DOWN_ARROW)){
  steve.y=steve.y+20
}
 drawSprites();
}
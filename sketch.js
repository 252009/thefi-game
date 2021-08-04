//playing character
var jackson,jacksonimg
//npc
var police,policeimg
//background
var backgrounds,backgroundimg
//obstacles
var obstacles
var busimg,carimg,scooterimg
//powerups
var powerUp
var coin,coinimg,shoeimg
var coinCount = 0
var coinGroup,obstacleGroup
var gameState="play"

function preload(){
  //background image
  backgroundimg = loadImage("road.png")
  jacksonimg = loadAnimation("Runner-1.png","Runner-2.png")
  policeimg = loadImage("police.png")
  carimg = loadImage("car.png")
  busimg = loadImage("bus.png")
  scooterimg=loadImage("scooter.png")
  shoeimg=loadImage("powerUp.png")
  coinimg=loadImage("coin.png")
  

}
function setup() {
  createCanvas(1500,500);

  jackson = createSprite(500,200,20,20)
  police=createSprite(200,200,30,30)
  police.addImage("car",policeimg)
  police.scale=0.4
  backgrounds=createSprite(500,300,20,20)
  backgrounds.addImage(backgroundimg)
 
  jackson.addAnimation("running",jacksonimg)
  jackson.scale=0.05
  
  coinGroup = createGroup()
  obstacleGroup = createGroup() 
  
  
}
function draw() {
   background(0)
   powerUps()
   obstacle()
   coins()
   textSize(20)
   fill("cyan")
   text( "Coins Collected: "+coinCount,1300,50)

   if(keyDown(UP_ARROW))
  {
    jackson.y=jackson.y-5
  }
  if(keyDown(DOWN_ARROW))
  {
    jackson.y=jackson.y+5
  }
 
  //put coin if here to destroy the coin and increase the coin count make the variable and also put functionality to the boy use the code if(coin.isTouching.boy)
  //{destroy the coin
  if(jackson.isTouching(obstacleGroup))
  {
    jackson.destroy()
    gamestate="end"
    obstacleGroup.setVelocityXEach(0)
    coinGroup.setVelocityXEach(0)
  }
  /* if(coinGroup.isTouching(jackson))
  {
    coinGroup.destroyEach()
    coinCount=coinCount+1
  }  */
  
  drawSprites()
}

function obstacle()
{
  if(frameCount%200===0)
  {
  obstacles = createSprite(1600,random(50,450),20,20)
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacles.addImage(carimg);
              break;
      case 2: obstacles.addImage(busimg);
              break;
      case 3: obstacles.addImage(scooterimg);
              break;
      default: break;
    }
    obstacles.scale=0.5
    obstacles.velocityX=-5
    obstacleGroup.add(obstacles)
  }
 
}

function powerUps()
{
  if(frameCount%300===0)
  {
  powerUp = createSprite(1600,random(50,450),30,20) 
  powerUp.addImage(shoeimg)
  powerUp.scale=0.3
  powerUp.velocityX=-3
  
  }
}
  
function coins()
{
  if(frameCount%20==0)
  {
  coin = createSprite(1600,random(50,450),30,20) 
  coin.addImage(coinimg)
  coin.scale=0.08
  coin.velocityX=-6
  
  coinGroup.add(coin)
  }
  
}


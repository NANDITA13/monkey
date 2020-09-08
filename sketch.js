var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkeyAnimation, monkeysGroup ;

var banana ,bananaImage, obstacle, obstacleImage;

var bananaGroup, obstacleGroup;

var score;





function preload(){
  
  
  monkeyAnimation = loadImage ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png",

                            "sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")


  bananaImage = loadImage("banana.png");


  obstacleImage = loadImage("obstacle.png");
                             

}



function setup() {

 createCanvas(800, 350);
   
 monkey = createSprite (50,300,20,50);

 monkey.addAnimation("walk1",monkeyAnimation);
 monkey.addAnimation("walk2",monkeyAnimation);
 monkey.addAnimation("walk3",monkeyAnimation);
 monkey.addAnimation("walk4",monkeyAnimation);
 monkey.addAnimation("walk5",monkeyAnimation);
 monkey.addAnimation("walk6",monkeyAnimation);
 monkey.addAnimation("walk7",monkeyAnimation);
 monkey.addAnimation("walk8",monkeyAnimation);
 monkey.addAnimation("walk9",monkeyAnimation);

 
 monkey.scale = 0.1;


 banana = createSprite (50,180,50,50);
 banana.addImage("bana",bananaImage);
 banana.scale = 0.1;


 score = 0;


 monkeysGroup = new Group();
  
 bananassGroup = new Group();
  
}


function draw() {

  background(180);
  
  text("Score: "+ score, 500,50);
  
  

  if(gameState === PLAY){

    score = score + Math.round(getFrameRate()/60);




    if(keyDown("space" )  && monkey.y >= 161) {
      monkey.velocityY = -13;
  }


    monkey.velocityY = monkey.velocityY + 0.8

   spawnBanana();

   spawnObstacle();

if(obstacleGroup. isTouching (monkey)){
    
      gameState = "end";

}
  
  }

else if (gameState === END){

    monkey.velocityX = 0;

    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);    


}


  drawSprites();

}

function spawnObstacle(){
  if (frameCount % 60 === 0){

    var obstacle = createSprite(600,165,10,40);
    var rand = Math.round(random(1));
     {
       obstacle .addImage(obstacle1);     
}

    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
}
}



function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(cloudImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;

    monkey.depth = monkey.depth + 1;
    
    cloudsGroup.add(cloud);
  }
}






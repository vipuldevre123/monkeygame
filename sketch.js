var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var time = 0;
var score = 0;
var bg,og;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(50,320,10,10)
  monkey.scale = 0.2;
   monkey.addAnimation("monkey_running", monkey_running)
  
  ground = createSprite(200,390,400,10)
  
  bg = new Group();
  og = new Group();
}
 
function draw() {
background("white");
  if(gameState = PLAY){
    ground.velocityX = -2;
  if(ground.x < 200){
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -10; 
  }
    
    spawnObstacles();
  fruitbanana();
    if(bg.isTouching(monkey)){
    bg.destroyEach();
    
  }
   else{ 
    if(og.isTouching(monkey)){
      gameState = END;
   og.setVelocityXEach(0); 
  bg.setVelocityXEach(0);
    score = 0
  }
   }
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  
  
  
   score = score + Math.round(getFrameRate()/60);
  stroke("black")
  fill("red");
  textSize(20);
  text("Score : "+ score,150,60);
  
  stroke("black")
  fill("red");
  textSize(20);
  time = Math.ceil(frameCount/frameRate());
  text("Survival time : "+time,100,30);
  
  drawSprites();
  
}
function spawnObstacles(){
  if(frameCount % 160 === 0 ){
  obstacle = createSprite(400,350,10,10)
  obstacle.scale = 0.2;
 obstacle.addImage(obstacleImage)
  obstacle.velocityX = -3;
    og.add(obstacle);
  } 
}  
function fruitbanana(){
  if(frameCount % 160 === 0 ){
 var banana=
     createSprite(400,Math.round(random(70 ,200)),10,10);
  banana.scale = 0.1;
 banana.addImage(bananaImage)
  banana.velocityX = -3;
    bg.add(banana);
  } 
}  







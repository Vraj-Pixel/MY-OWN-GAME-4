var road,roadImage;
var car,carImage;
var carImage2;
var carImage3;
var carImage4;
var carImage5;
var carImage6;
var vehicleGroup,vehicleImage;
var lifeCounter=3;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOver,gameOverImage;
var restart,restartImage;

function preload(){
  roadImage=loadImage('track.png');
  carImage=loadImage('Car2.png');
  vehicleImage=loadImage('Vehicle.png');
  car2Image=loadImage('Car3.png')
  car3Image=loadImage('Car4.png')
  car4Image=loadImage('Car5.jpg')
  car5Image=loadImage('Car6.png')
  gameOverImage=loadImage("gameOver.png");
  restartImage=loadImage("Restart.png");

}

function setup(){
 createCanvas(600,600);

  vehicleGroup=new Group(); 

 road=createSprite(300,300);
 road.addImage(roadImage);
 road.scale=1;

 car=createSprite(370,350);
 car.addImage(car5Image);
 car.scale=0.2

 gameOver=createSprite(250,250);
 gameOver.addImage(gameOverImage);
 gameOver.scale=0.5;

 restart=createSprite(250,350);
 restart.addImage(restartImage);
 restart.scale=0.5
}

function draw(){
console.log(gameState);
  if(gameState===PLAY){
    gameOver.visible=false;
    restart.visible=false;
    road.velocityY=2;
    if(road.y>400){
      road.y=300;
    }

    if(keyIsDown(LEFT_ARROW)){
      car.x=car.x-5;
    }

    if(keyIsDown(RIGHT_ARROW)){
      car.x=car.x+5;
    }
    //console.log(road.y);
    spawnVehicles();

    if(vehicleGroup.isTouching(car)){
      vehicleGroup.destroyEach();
      lifeCounter--;
    }

    if(lifeCounter===0){
      gameState=END
    }
    drawSprites();

    textSize(20);
    fill(255)
    
}

if(gameState===END){
  gameOver.visible=true;
  restart.visible=true;
  vehicleGroup.setVelocityYEach(0);
  road.velocityY=0;
  
  textSize(10);
  fill(0,0,0);
  strokeWeight(2);
  text("PRESS SPACE TO RESTART",230,350); 
}
  
 if(mousePressedOver(restart)){
   gameState =PLAY;
   lifeCounter = 3;
 }
drawSprites();
text("Lifes Remaining:"+lifeCounter,430,50);
  
}

function spawnVehicles(){   
  if(frameCount%100===0){
    
    vehicle1=createSprite(55,600,30,30);
    vehicle1.addImage(vehicleImage);
    vehicle1.scale=0.3
    
      var randX=Math.round(random(150,500));
      vehicle1.x=randX;
      vehicle1.y=600;
      vehicle1.velocityY=-2;
    
     vehicleGroup.add(vehicle1);
  }

}
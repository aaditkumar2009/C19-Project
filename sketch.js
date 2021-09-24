var road,roadimg,car, carimg;
var PLAY = 1;
var END = 0;
var gameState = 1;
let vid;
var tires,tireimg,box,boximg;
var hello,themesong,tiregrp,boxgrp,conegrp;
var score = 0;
var death,deathimg;
var cone,coneimg;
var goodright,grassimg,goodleft;



function preload(){
    roadimg = loadImage("Road.png");
    carimg = loadAnimation("Runner-A1.png","Runner-A2.png");
    tireimg = loadImage("tire.png");
    boximg = loadImage("box.png");
     hello = loadSound("hello.mp3");
     themesong = loadSound("123hello.mp3");
     deathimg = loadImage("dead.png");
    coneimg = loadImage("cone.png");
    grassimg = loadImage("grass.jpg")
    }

function setup() {
    createCanvas(windowWidth,windowHeight);
    // goodright = createSprite(500,500,20,20);
     vid = createVideo(
         ["final.mp4"]
         )
         vid.position(350,100)
         vid.hide();
         
  road = createSprite(windowWidth/2,windowHeight/2);
  road.addImage("road",roadimg);
  road.velocityY = 45;
  goodright = createSprite(0,320,400,1000);
 // goodright.shapeColor = "#7CFC00";
  goodright.scale = 1.2
  goodright.addImage("grass1",grassimg);
  goodleft = createSprite(1350,320,400,1000)
  //goodleft.shapeColor = "#7CFC00";
  goodleft.addImage("grass2",grassimg);
   goodleft.scale = 1.2
  car = createSprite(windowWidth/2,570);
 car.addAnimation("running",carimg);
 car.scale = 0.1
 tiregrp=new Group();
boxgrp=new Group();
conegrp=new Group();
themesong.play();
//death = createSprite(1000,300,20,20);
//car.debug();
//death.hide();
car.setCollider("circle",0,0,500);
// car.debug = true
tiregrp.debug = true;
boxgrp.debug = true;
conegrp.debug = true;
//car.
}

function draw() {
    drawSprites();
 
    //car.debug();
   
    // if (score===50){
//
  // }
  car.bounce(goodright);
  car.bounce(goodleft);
    
    if(gameState===PLAY){
        createTire();
        createBox();
        createCone()
        push();
      fill("orange")      
      textSize(40);
      textFont("Fleur De Leah")
      text("Score :"+ score,970,50)
     pop();
      score = score + Math.round(getFrameRate()/50);

    edges= createEdgeSprites();
      
    car.collide(edges);
    if (road.y > height){
        road.y = height/2;
      }


      //vid.show();
    //  vid.play();
      if (keyDown("RIGHT_ARROW")){
          car.x += 20;
          //car.y -= 2;
      }
      if (keyDown("LEFT_ARROW")){
        car.x -= 20;
        //car.y += 2
    }
    if(keyDown("space")) {
      hello.play();
    }
  }
  if (car.isTouching(boxgrp)){
    gameState = END;
    push()
  textFont("Fleur De Leah")
  text("Press the R Key to reset");
  fill("orange")
  pop()
  if (keyDown("R")){
      reset();
  }
    vid.play()
    vid.show();
    themesong.stop()
    car.velocityY = 0;
    road.velocityY = 0;
    box.velocityY = 0
    boxgrp.destroy();
    tiregrp.destroy();
   // car.addAnimation("running",gameoverimg);
    tiregrp.lifetime = -1
    boxgrp.lifetime = -1
    //death.addImage("dead0",deathimg);
    push();
  text("GAME OVER",300,30);
  fill("orange") 
pop();
    
}
if (car.isTouching(tiregrp)){
  gameState = END;
  push()
  textFont("Fleur De Leah")
  text("Press the R Key to reset");
  fill("orange")
  pop()
  if (keyDown("R")){
      reset();
  }
  vid.play()
  vid.show();
  themesong.stop()
  car.velocityY = 0;
  //car.addAnimation("running",gameoverimg);
  road.velocityY = 0;
  box.velocityY = 0
  box.destroy();
  tire.destroy();
  tire.velocityY=0
  tire.lifetime = -1
  box.lifetime = -1
  //death.addImage("dead0",deathimg);
  //car.changeAnimation("dead0",deathimg);
}
if (car.isTouching(conegrp)){
    gameState = END;
    push()
  textFont("Fleur De Leah")
  text("Press the SPACEBAR to reset",1000,1000);
  fill("orange")
  pop()
  if (keyDown("SPACE")){
      reset();
  }
    vid.play()
    vid.show();
    themesong.stop()
    car.velocityY = 0;
    //car.addAnimation("running",gameoverimg);
    road.velocityY = 0;
    box.velocityY = 0
    box.destroy();
    cone.velocityY = 0;
    cone.destroy()
    cone.lifetime = -1;
    tire.destroy();
    tire.velocityY=0
    tire.lifetime = -1
    box.lifetime = -1

  }
}

function createTire() {
    if (World.frameCount % 100 == 0) {
    tires = createSprite(Math.round(random(300, 1130),40, 10, 10));
    tires.addImage(tireimg);
    tires.scale=0.3;
    tires.velocityY = 20;
    tires.lifetime = 150;
    tiregrp.add(tires);
    }
  }
  function createBox(){
    if (World.frameCount % 200 == 0) {
    box = createSprite(Math.round(random(300,1130),40,10,10));
    box.addImage(boximg);
    box.scale = 0.4;
    box.velocityY = 10;
    box.lifetime = 150;
    boxgrp.add(box);

  }
}
function createCone(){
    if (World.frameCount % 500 == 0) {
    cone = createSprite(Math.round(random(300,1130),40,10,10));
    cone.addImage(coneimg);
    cone.scale = 0.7;
    cone.velocityY = 10;
    cone.lifetime = 150;
    conegrp.add(cone);
  }
}
function reset(){
    //create reset function here
    gameState = PLAY;
    car.addAnimation("running",carimg);
    vid.hide();
    themesong.play();
    tiregrp.destroyEach();
    boxgrp.destroyEach();
    conegrp.destroyEach();
    score = 0;
    }
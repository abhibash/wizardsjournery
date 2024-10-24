//Name:Abhi Bashyal
//Date:April 9th 2021
//Purpose:collect points and avoid monsters

//Background
var frame1 = createSprite(200,200);
frame1.setAnimation("forest3.jpg_1");
frame1.scale=1.15;

//Wizard
var hero = createSprite(35,350);
hero.setAnimation("idle");
hero.scale=0.8;

var monster = createSprite(400,50);
monster.setAnimation("mon1.png_1");
monster.scale=0.6;
monster.velocityX=-5;

var monster2=createSprite(400,360);
monster2.setAnimation("mushroom1.png_1");
monster2.scale=1.8;
monster2.velocityX=-3;

var monster3=createSprite(400,400);
monster3.setAnimation("monster3");
monster3.scale=1.5;
monster3.velocityX=0;
monster3.velocityY=5;
monster3.visible=false;

var coin = createSprite(200,80);
coin.setAnimation("coin_gold_1");
coin.scale=0.3;

//Walk
var walk=0;
//Health
var health=40;
//Score
var score=0;
//Screen
var screen = 1;
//Monster3 movement
var rand = randomNumber(1,40);
//Level
var level = 1;
//Which background
var background=1;

function draw (){
  drawSprites();
  //Next
  if(keyWentDown("n")){
    screen++;
  }
  if(screen==0){
    //Win screen
    win();
  } else if (screen==1) {
    //Title screen
    drawScreen1();
  } else if (screen==2) {
    //Instructions
    drawScreen2();
  } else if (screen==3) {
    //Activate pieces
    activatePieces();
    screen++;
  } else {
    //Game screen
    playGame();
  }
  
}

function drawScreen1(){
  //Background
  frame1.x=200;
  frame1.y=200;
  frame1.setAnimation("tittlescreen.jpg_1");
  frame1.scale=1;
  //Wizard
  hero.x=-35;
  hero.y=-350;
  hero.setAnimation("idle");

  monster.x=-400;
  monster.y=-50;
  monster.setAnimation("mon1.png_1");
  monster.scale=0.6;
  monster.velocityX=0;

  monster2.x=-400;
  monster2.y=-360;
  monster2.setAnimation("mushroom1.png_1");
  monster2.scale=1.8;
  monster2.velocityX=0;
  
  monster3.x=400;
  monster3.y=400;
  monster3.setAnimation("monster3");
  monster3.scale=1.5;
  monster3.velocityX=0;
  monster3.velocityY=0;
  monster3.visible=false;

  coin.x=-200;
  coin.y=-80;
  coin.setAnimation("coin_gold_1");
  coin.scale=0.3;

  walk=0;
  //Health variable
  health=40;
  //Score variable
  score=0;
  //Monster3 movement
  rand = randomNumber(1,40);
  //Level
  level = 1;
  //Which background
  background==1;
  
}
function drawScreen2(){
  //Instructions
  frame1.setAnimation("instructionscreen.jpg_2");
  frame1.scale=1;
}

function activatePieces(){
  frame1.x=200;
  frame1.y=200;
  frame1.setAnimation("forest3.jpg_1");
  frame1.scale=1.15;

  hero.x=35;
  hero.y=350;
  hero.setAnimation("idle");

  monster.x=400;
  monster.y=50;
  monster.setAnimation("mon1.png_1");
  monster.scale=0.6;
  monster.velocityX=-5;

  monster2.x=400;
  monster2.y=360;
  monster2.setAnimation("mushroom1.png_1");
  monster2.scale=1.8;
  monster2.velocityX=-3;
  
  monster3.x=400;
  monster3.y=400;
  monster3.setAnimation("monster3");
  monster3.scale=1.5;
  monster3.velocityX=0;
  monster3.velocityY=5;
  monster3.visible=false;

  coin.x=200;
  coin.y=80;
  coin.setAnimation("coin_gold_1");
  coin.scale=0.3;

  walk=0;
  //Health variable
  health=40;
  //Score variable
  score=0; 
  //Monster3 movement
  rand = randomNumber(1,40);
  //Level
  level = 1;
  //Which background
  background==1;
}

function playGame() {
 //Hero Movement:
 if (walk!=0){
   walk++;
 }
 if(walk>=20){
   walk=0;
 }
 //right
 if (keyDown("d")) {
  hero.x = hero.x + 7;
  hero.setAnimation("right");
  walk++;
}
  //left
 else if (keyDown("a")){
   hero.x=hero.x+-7;
   hero.setAnimation("left");
   walk++;
}
//jump
else if(keyWentDown("w")){
   hero.velocityY=-10;
   hero.setAnimation("up");
  walk=0;
  hero.Y-=20;
 }
else if (walk==0){
  hero.setAnimation("idle");
}
  //down
if(hero.y>=352){
  hero.velocityY=0;
  hero.y=350;
 } else if (hero.y <= 270) {
  hero.velocityY = hero.velocityY+1;
 }
 //hero collision
 if (hero.isTouching(monster)){
   //lose health
   health--;
 }
 if (hero.isTouching(monster2)){
   //lose health
   health--;
 }
 if (hero.isTouching(coin)){
   coin.x=randomNumber(20,350);
   coin.y=randomNumber(20,350);
   //gain score
   score++;
 }
 //monster and collison
 if (monster.x <=-25||hero.isTouching(monster)){
  monster.x = 500;
  monster.y = randomNumber(35, 200);
  }
 if (monster2.x <=-25||hero.isTouching(monster2)){
  monster2.x = 450;
  }
 if (monster3.isTouching(hero)){
  monster3.x=randomNumber(-50,450);
  monster3.y=randomNumber(0,400);
  //loose health
  health--;
 }
 //Monster3 movement
 rand = randomNumber(1,40);
 if (rand<=1){
   if (hero.x<monster3.x){
     monster3.velocityX=-3;
   } else {
     monster3.velocityX=3;
   }
   if (hero.y<monster3.y){
     monster3.velocityY=-3;
   } else {
     monster3.velocityY=3;
   }
 }
 //Scrolling
 if (hero.x >= 400) {
    if (background == 1){
      frame1.setAnimation("forest3.jpg_2");
      frame1.scale=1.23;
      background = 2;
    } else {
      frame1.setAnimation("forest3.jpg_1");
      background = 1;
    }
    hero.x = 0;
  }
 //Barrier
 if (hero.x<=0)
  hero.x=0;
 hero.velocityX=0;
 if (hero.y<0){
    hero.velocityY=hero.velocityY+1;
 }
 //Level increase condition
 if (score==10){
   score=0;
   level++;
 }
 if (level==2){
   monster3.visible=true;
   monster2.velocityX=randomNumber(-5,-6);
 }
 if (level==3){
   rand = randomNumber(1,30);
   monster.velocityX=randomNumber(-6,-9);
   monster.velocityX=randomNumber(-5,-7);
 }
 if (level==4){
  if (rand<=2){
   if(hero.x<monster3.x){
     monster3.velocityX=-3;
   } else {
    monster3.velocityX=3; 
   }
   if(hero.y<monster3.y){
     monster3.velocityY=-3;
   } else {
     monster3.velocityY=3;
   } 
  }
 }
 //Win condition
 if (level>4){
  win();
  playSound("sound://category_achievements/vibrate_success_1_up.mp3", false);
 }
 //Lost condition
 if(health<=0){
   screen=1;
 }
 //level
 textSize(20);
 fill("yellow");
 text("Level:"+level,5,20);
 //health
 textSize(20);
 fill("red");
 text("HP:"+health,340,20);
}


function win(){
  //message
  textSize(60);
  fill ("purple");
  text("You win",90,150);
  textSize(20);
  fill("yellow");
  text("Press 'n' to play again",100,200);
  //stop everything
  hero.velocityX=0;
  hero.velocityY=0;
  monster.velocityX=0;
  monster2.velocityX=0;
  monster3.velocityX=0;
  monster3.velocityY=0;
  screen=0;
}


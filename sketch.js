//Create variables here
var dog,dogImg,dogImg1,database,foodStock,x;
var foodS=20;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(400,350,50,50);
  dog.addImage(dogImg);
  dog.scale=0.5;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background("lightgreen");
  if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogImg1);
  }
  drawSprites();
  //add styles here
    fill("red");
    textSize(15);
     text("food remaining="+foodS,170,200);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
  x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



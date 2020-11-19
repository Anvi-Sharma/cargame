var fixedRect
var movingRect;
var box1,box2;
function setup() {
  createCanvas(800,800);
  // fixedRect= createSprite(400, 200, 50, 50);
  // fixedRect.shapeColor= "green";
  
  // movingRect=createSprite(260,200,50,50)
  // movingRect.shapeColor="green"

  box1=createSprite(200,50,40,40)
  box1.shapeColor="blue";
  box1.velocityY= 5;

  box2=createSprite(200,500,30,30)
  box2.shapeColor="green";
  box2.velocityY= -5;
}

function draw() { 
  background(0); 

  bounceOff(box1,box2);
  // movingRect.x= mouseX;
  // movingRect.y= mouseY;
  

  // if(isTouching(movingRect,box1)){
  //   movingRect.shapeColor="red";
  //   box1.x=500
  // }
  
  // else{
  //   movingRect.shapeColor="green";
  //   box1.x=200;
  // }
  
  
  drawSprites();
}


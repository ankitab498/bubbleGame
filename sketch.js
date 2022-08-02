

function preload(){

  backBoardImg= loadImage("back.jpg")
}


function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  
}

function draw() {
  background("#BDA297");
  
  drawSprites()
}


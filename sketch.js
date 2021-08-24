var iss,spacecraft
var bg,issimg,scimg
var isdocked=false

function preload(){
  bg =loadImage("spacebg.jpg")
  issimg = loadImage("iss.png")
  scimg = loadImage("spacecraft1.png")
  scimg1 = loadImage("spacecraft2.png")
  scimg2 = loadImage("spacecraft3.png")
  scimg3 = loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issimg)
  iss.scale = 0.7
  spacecraft = createSprite(300,350,50,50)
  spacecraft.addImage(scimg)
  spacecraft.scale = 0.2
  
  

  
}

function draw() {
  background(bg);  
  if(!isdocked){
    console.log(spacecraft.x)
    console.log(spacecraft.y)
    if(keyIsDown(UP_ARROW)){
      spacecraft.y= spacecraft.y-2
      
    }
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.y= spacecraft.y+2
      
    }
    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.x= spacecraft.x+2
      spacecraft.addImage(scimg2)
    }
    if(keyIsDown(LEFT_ARROW)){
      spacecraft.x= spacecraft.x-2
      spacecraft.addImage(scimg3)
      
    }
    
  }
  if(spacecraft.x<=250&&spacecraft.y<=286){
    isdocked=true;
    textSize(40)
    fill("white")
    text("DOCKING SUCCESFULL",400,300)
  }
  drawSprites();
}
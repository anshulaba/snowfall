var bgimg,bg,snowimg,snow;

function preload()
{
  bgimg=loadImage("snow2.jpg");
  snowimg=loadImage("snow5.webp");
}

function setup()
{
  createCanvas(800,800);
  bg=createSprite(0,390,800,800);
  bg.addImage("background",bgimg);
  
}

function draw() 
{
  background("bg");  
  
  spawnsnow();

  drawSprites();
}

function spawnsnow()
{
  if(frameCount%60===0)
  {
    snow=createSprite(Math.round(random(100,700)),200,20,20);
    snow.addImage("snowfall",snowimg);
    snow.y=Math.round(random(100,200));
    snow.scale=0.02;
    snow.velocityY=2;
    snow.lifetime=100;
  }
}
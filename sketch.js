var box 


function setup() {
  createCanvas(400,400);
  box = createSprite(100,100,40,40)
}

function draw() 
{

  background("orange");
drawSprites ()
if (keyDown("left")){
box.position.x=box.position.x-2

}
if(keyDown("right")){
  box.x=box.x+2
}
if (keyIsDown(UP_ARROW)){
  box.y=box.y-2
}
if(keyIsDown(DOWN_ARROW)){
  box.y=box.y+2
}

}





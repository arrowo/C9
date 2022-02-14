var cuadrado;
function setup() {

  createCanvas(400,400);
 cuadrado = createSprite(200,200,100,100); 
cuadrado.shapeColor = "black";
}

function draw() 
{
  
  background(132, 249, 91 );

  if(keyDown("up")){
cuadrado.velocityY = -4;


  }

  if(keyDown("down")){
    cuadrado.velocityY = 4;
    
    
      }


drawSprites();

}





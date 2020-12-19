var bullet ,wall ,speed, weight,thickness 
function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed
  bullet.shapeColor="blue"
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="pink"
  
  
  
  
  
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var Damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(Damage>10){
      wall.shapeColor="red"

    }
    if(Damage<10){
      wall.shapeColor="green"
      
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRight=lbullet.x+lbullet.width
  wallleft=lwall.x
  if(bulletRight>=wallleft){
    return true
  }
  return false 
}
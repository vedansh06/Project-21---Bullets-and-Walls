var speed, weight, thickness;

function setup(){
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83);
}

function collide(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityX = 0;
        damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
        if(damage<10){
          object2.shapeColor = "green";
          } else if(damage>10){
           object2.shapeColor = "red";
          } 
      } /*else{
        object1.shapeColor = "white";
        object2.shapeColor = "gray";  
      }*/
  }
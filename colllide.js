function collide(car,wall){
   if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX = 0
var deformation=0.5 * weight * speed *speed/22509
    if(deformation>180){
car.shapecolor = color(225,0,0)

    }
    if(deformation<180 && deformation>100){
car.shapecolor = color(230,230,0)

    }
    if(deformation<100){
        car.shapecolor = color(0,225,0)
    }
   }
    
   
}  
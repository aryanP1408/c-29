class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.catapult1 = loadImage("sprites/sling1.png");
        this.catapult2 = loadImage("sprites/sling2.png");
        this.rubberBand1 = loadImage("sprites/sling3.png");   
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapult1,200,30);
        image(this.catapult2,172,30);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<200){

            
            strokeWeight(4);
            line(pointA.x-25, pointA.y, pointB.x, pointB.y-30);
            line(pointA.x-25, pointA.y, pointB.x+20,pointB.y-30);
            image(this.rubberBand1,pointA.x-25,pointA.y-10, 15,30);

            }
            else{
                 line(pointA.x+25, pointA.y, pointB.x, pointB.y-30);
                line(pointA.x+25, pointA.y, pointB.x+20,pointB.y-30);
                image(this.rubberBand1,pointA.x+25,pointA.y-10, 15,30);
    }
        }
    }
    
}
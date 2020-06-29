class Plinko {
    constructor(x,y) {
        var options = {
            isStatic:false  
        }
        this.x = x;
        this.y = y;
        this.r = 30;
        this.body=Bodies.circle(x,y,this.r,options);
        
        World.add(world,this.body);
    }

    display() {
        var pose = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("white");
        ellipse(pose.x,pose.y,this.r,this.r);
        pop();
    }
}
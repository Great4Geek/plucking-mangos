class Stone {
  constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image=loadImage("sprites/stone.png");
    World.add(world, this.body);
  }

    

  display(){
    push();
    var pos =this.body.position;
    image(this.image,pos.x,pos.y,50,50);
    imageMode(CENTER);
    pop();
  }
}
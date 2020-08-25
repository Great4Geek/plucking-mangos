class kid {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/boy.png");
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      image(this.image,pos.x,pos.y,this.width,this.height);
      rectMode(CENTER);
      pop();
    }
  }
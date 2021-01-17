//creating the parent class
class BaseClass{
    //starting the blueprint
    constructor(x, y, width, height, angle) {
        //defining the options for the additional properties of the classes
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //creating the body for this shape or sprite
        this.body = Bodies.rectangle(x, y, width, height, options);
        //the width of this object will be assigned to the variable width
        this.width = width;
        //the height of this object will be assigned to the variable height
        this.height = height;
        //the image of this object will be assigned to the image being loaded
        this.image = loadImage("sprites/base.png");
        //adding this body to the actual world
        World.add(world, this.body);
      }
      display(){
        //creating a variable for the angle of this body
        var angle = this.body.angle;
        //start
        push();
        //translate the x and y coordinates of the body
        translate(this.body.position.x, this.body.position.y);
        //the angle can rotate
        rotate(angle);
        //the image is in the center of the sprite
        imageMode(CENTER);
        //creating the body as a image
        image(this.image, 0, 0, this.width, this.height);
        //stop
        pop();
      }
}
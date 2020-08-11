class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);

     
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(this.body.position.x, this.body.position.y);
    
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      super.display();
    }
  
  };
  
class Box{

    constructor(x,y,w,h){
    
        var options = {
    
    'friction' : 1.0,
    'density' : 0.04,
    'restituition' :0.8   
        }
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    
    this.width = w;
    this.height = h;
    
    World.add(world , this.body);
    
    }
    
    display(){
    
    var pos = this.body.position ;
    var angle = this.body.angle;

push();

translate(pos.x , pos.y);
     rectMode(CENTER);
    rotate(angle);

    strokeWeight(2);
    stroke('green');
    fill('yellow');

     rect(0 , 0 ,this.width, this.height );

     pop();
    
    }
    
    
    }
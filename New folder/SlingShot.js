class SlingShot{
    constructor(bodyA,bodyB){
       var options={
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 1,
           length: 200
       } 
      
      this.sling = Constraint.create(options);
      World.add(world,this.sling);

    };
    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        if(this.sling.bodyA){
         
        
        
        strokeWeight(20);

        line(posA.x,posA.y,posB.x,posB.y);
    }
   



}
    
    
}
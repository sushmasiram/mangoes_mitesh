/*class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	} */


	class Ground{

		constructor(){
	
			var options={
				isStatic:true,
				friction:0.4
			}
		  this.body = Bodies.rectangle(500,625,1200,20,options);
		  World.add(world, this.body);
		}
		display(){
	
		  rectMode(CENTER);
		  fill("silver");
		  rect(500,625,1200,20);
		
		}
	
	}
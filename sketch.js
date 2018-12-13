var particles = [];
var p;
var pop;
var Stars = [];
var NumberOfStars = 500;
var Planets=[];
var NumberofPlanets = 25;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
	r = random(255);
  g = random(255);
  b = random(255);
  p = new Particle();
  particles.push(p);
	for (var i = 0; i < NumberOfStars; i++){
		Stars[i] = new StarsObject(random(width),random(height),random(2,4));	
	}
  for (var i = 0; i < NumberofPlanets; i++){
	 Planets[i] = new PlanetObject(random(width),random(height),random(15,45),200);
  }
}

function draw() {
	background(0);
	for (j = 0; j< Stars.length; j++) {
	 Stars[j].move(-1,0);
	 Stars[j].Display();
	 Stars[j].Twinkle();
		  
		}
	for (k = 0; k< Planets.length-1; k++) {
		Planets[k].Display();
		Planets[k].move(-.5,0);
		}
	for(var i = 0; i < 5; i++){
    p = new Particle();
    particles.push(p);
	}  //for
	
	
	for(var i = particles.length-1; i >=0; i--) {
		particles[i].Display();
		particles[i].move();
		if(particles[i].finished()){
		particles.splice(i, 1);
			
		  // loadSound('Pop-Bubble_sound_effect.mp3');	
		} //if
	


	} //for
	
	
	

} //draw
	
function PlanetObject(X,Y,Size,col) {
	this.X = X;
	this.Y = Y
	this.Size = Size;
	this.Color = col;
	
	this.Display = function() {
		noStroke();
		fill(this.Color);
		ellipse(this.X,this.Y,this.Size,this.Size,this.Color);
	}
			this.move = function(step,angle) {
		angleMode(DEGREES);
		this.Y = this.Y -step*cos(angle);
		this.X = this.X -step*sin(angle);
		if (this.Y > height) {
			this.Y = 0;
		}
		if (this.Y < 0) {
			this.Y = height;
		}
		if (this.X > width) {
			this.X = 0;
		}
		if (this.X < 0) {
			this.X = width;
		}
		}
	this.Twinkle =function() {
    this.Bright = this.Bright +random(-10,10);
	  this.Size = this.Size + random(-.10,.10);
		
	}
	
} //end planetobject


function StarsObject(X,Y,Size) {
	this.X = X;
	this.Y = Y;
	this.Size = Size;
	this.Bright = 200;
		
	this.Display = function() {
		noStroke();
		fill(this.Bright);
		ellipse(this.X,this.Y,this.Size,this.Size)
	}
		this.move = function(step,angle) {
		angleMode(DEGREES);
		this.Y = this.Y -step*cos(angle);
		this.X = this.X -step*sin(angle);
		if (this.Y > height) {
			this.Y = 0;
		}
		if (this.Y < 0) {
			this.Y = height;
		}
		if (this.X > width) {
			this.X = 0;
		}
		if (this.X < 0) {
			this.X = width;
		}
		}
	this.Twinkle =function() {
    this.Bright = this.Bright +random(-10,10);
	  this.Size = this.Size + random(-.10,.10);
		
	}
}


function Particle (){
	this.x= windowWidth/2;
	this.y= windowHeight/2;
	this.vx = random(-.5,.5);
	this.vy = random(5,1);
	this.alpha = 255;

	this.move = function() {
		this.x += this.vx;
		this.y += this.vy;
		this.alpha -= 3;
	}
		
	this.finished = function(){
		return this.alpha < 0;
		}

	this.Display = function() {
		noStroke();
	//	stroke(255);
		fill(255,this.alpha);
		ellipse(this.x,this.y,20);
		fill(211, 42, 42);
		rect(windowWidth/2-20, windowHeight/2-200,40 ,200,3);
		triangle(windowWidth/2+20, windowHeight/2-200, windowWidth/2-3, windowHeight/2-270,windowWidth/2-20, windowHeight/2-200);

		//triangle(230, 210, 286, 140, 286, 210);
		//triangle(30, 75, 30, 20, 86, 75);
	}
}



function setup() {
  createCanvas(800, 600);
  background(255);
  
  
  var stemX = width / 3 ;
  var stemY = height -20 ;
  
  var roseSize = 50 ;
  var totalRoses=20 ;

  for (var rose = 1 ; rose <=totalRoses ; rose++) {
    var x = random(roseSize*1.2,width-roseSize*1.2) ;
    var y = random(roseSize*1.2, height/2-roseSize*1.2) ;
    drawRose(x,y,roseSize*random(1,1.2),random(x-50,x+50),stemY) ;  
  }
}

function draw() {
}

function drawRose(roseX, roseY, roseRadius,roseStemX, roseStemY) {

  stroke('#358408');
  strokeWeight(4) ;
  
  noFill() ;
  beginShape();
  curveVertex(roseX, roseY);
  curveVertex(roseX, roseY);
  curveVertex((roseStemX+roseX)/2,  roseY+(roseStemY-roseY)/3);
  curveVertex((roseStemX+roseX)/2,  roseY+2*(roseStemY-roseY)/3);
  curveVertex(roseStemX, roseStemY);
  curveVertex(roseStemX, roseStemY);
  endShape();
  
  
  push();
  translate(roseX,roseY) ;
  rotate(random(0,TWO_PI)) ;
  
  stroke(1);
  strokeWeight(2) ;
  
  fill('#C915BE');
  circle(0,0,roseRadius*.8) ;
  fill('#fae');
  

  drawPetal(roseRadius*.4) ;
  rotate(PI/3) ;
  drawPetal(roseRadius*.4) ;
  rotate(PI/3) ;
  drawPetal(roseRadius*.4) ;
  rotate(PI/3) ;
  drawPetal(roseRadius*.4) ;
  rotate(PI/3) ;

  
  drawPetal(roseRadius) ;
  rotate(PI/3) ;
  drawPetal(roseRadius) ;
  rotate(PI/3) ;
  drawPetal(roseRadius) ;  
  rotate(PI/3) ;
  drawPetal(roseRadius) ;  
  rotate(PI/3) ;
  drawPetal(roseRadius) ;  
  rotate(PI/3) ;
  drawPetal(roseRadius) ;  

  pop() ;
}

function drawPetal(radius) {
//  circle(x,y,radius);
  push() ;
  translate(random(-5,5),0)
  
  beginShape();
  
  // outer edge
  resolution = 100 ;
  angle = -PI / resolution ;
  for (var i=0; i<resolution;i++) {
    var x = cos(angle * i)*radius ;
    var y = sin(angle * i)*radius ;
    curveVertex(x, y);
  }
  
  // inner edge
  resolution = 100 ;
  angle = -PI / resolution ;
  for (var i=resolution; i>0;i--) {
    x = cos(angle * i)*radius ;
    y = sin(angle * i)*radius* 0.3 ;
    curveVertex(x, y);
  }
  
  endShape(CLOSE);
  pop() ;
  
  /*
  beginShape();
curveVertex(84, 91);
curveVertex(84, 91);
curveVertex(68, 19);
curveVertex(21, 17);
curveVertex(32, 91);
curveVertex(32, 91);
endShape();*/
}
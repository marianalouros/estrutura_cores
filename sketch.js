//1280x800

let myFont;
let size = 1;
let marginX = 0;
let marginY = 0;

function preload() {
  myFont = loadFont('assets/sunshine.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //size = windowWidth/1200;
  
  if(windowWidth < windowHeight) {
    size = windowHeight / 900;
    marginY= (windowHeight - windowWidth) / 2;
  }
  else {
     size = windowWidth / 1200;
    
    marginX = (windowWidth - windowHeight) / 2;
  }
}

function draw() {
  background(220);
  translate(marginX, marginY);
  fill(255);
  noStroke();
  rect (200 * size ,150* size , 800 * size , 600 * size );
  
  fill(255,0,0);
  rect(120* size ,155* size , 50* size , 50* size );
  fill(255, 155,0);
  rect(120* size ,209* size , 50* size , 50* size );
  fill(255,255,0);
  rect(120* size ,263* size , 50* size , 50* size );
  fill(255,0,255);
  rect(120* size ,317* size , 50* size , 50* size );
  fill(0,255,0);
  rect(120* size ,371* size , 50* size , 50* size );
  fill(0,0,255);
  rect(120* size ,425* size , 50* size , 50* size );
  fill(255,0,0);
  rect(120* size ,479* size , 50* size , 50* size );
  fill(255, 155,0);
  rect(120* size ,533* size , 50* size , 50* size );
  fill(255,255,0);
  rect(120* size ,587* size , 50* size , 50* size );
  fill(255,0,255);
  rect(120* size ,641* size , 50* size , 50* size );
  fill(0,255,0);
  rect(120* size ,695* size , 50* size , 50* size );

  fill('black');
  textFont(myFont);
  textSize(100* size );
  text('O Som das Cores', 340* size , 120* size );
  
  fill('black');
  textFont(myFont);
  textSize(50* size );
  text('by Mariana Louros, 2020', 400* size , 820* size );
  
  //clear, erase, fill, pen
  noFill();
  stroke(2);
  rect(40* size ,155* size , 50* size , 50* size );
  rect(40* size ,209* size , 50* size , 50* size );
  rect(40* size ,263* size , 50* size , 50* size );
  rect(40* size ,317* size , 50* size , 50* size );
  
  
  //guardar, inicio, audio, outros desenhos
  noFill();
  stroke(2);
  rect(1050* size ,190* size , 100* size , 100* size );
  rect(1050* size ,330* size , 100* size , 100* size );
  rect(1050* size ,470* size , 100* size , 100* size );
  rect(1050* size ,610* size , 100* size , 100* size );
  
  //help
  ellipse(1100* size , 75* size , 50* size , 50* size );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //size = windowWidth/1200;
  if(windowWidth < windowHeight) {
    size = windowHeight / 900;
    marginX = 0;
    marginY = (windowHeight - windowWidth) / 2;
  }
  else {
    size = windowWidth / 1200;
    marginX = (windowWidth - windowHeight) / 2;
    marginY = 0;
  }
}
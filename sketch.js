/*
Nesta fase do projeto, comecei por trabalhar apenas na parte de desenho. Por isso, os botões de "guardar", "galeria" e "audio" não estão ainda programados.

Do lado esquerdo, estão as ferramentas de desenho e estas sim, estão programadas. O problema é que o p5 não faz uma boa deteção da posição do rato e por isso, nenhuma das ferramentas funciona.

Além destas, ainda tentei ativar a função "Child Version" (último icon do lado direito), mas, para além do problema do rato, o desenho que é suposto aparecer não fica fixo - apenas aparece quando o rato está pressionado.
*/

let size = 1;
let marginX = 0;
let marginY = 0;
let myFont1;
let myFont2;
let caneta;
let preencher;
let erase;
let clear;
let child;
let galeria;
let audio;
let save;
let help;
let desenho;
let c;
let backcolor;


function preload() {
  console.log("preload")
  myFont1 = loadFont('assets/homeschool.otf');
  myFont2 = loadFont('assets/bebasbook.otf');
  caneta = loadImage('assets/caneta.png');
  preencher = loadImage('assets/preencher.png');
  erase = loadImage('assets/erase.png');
  clear = loadImage('assets/clear.png');
  child = loadImage('assets/child.png');
  galeria = loadImage('assets/galeria.png');
  audio = loadImage('assets/audio.png');
  save = loadImage('assets/save.png');
  help = loadImage('assets/help.png');
  desenho = loadImage('assets/desenho.png');
}

function setup() {
  console.log("setup")
  resizeCanvas(windowWidth, windowHeight);
  if((windowWidth/windowHeight) < 1.6) {
    size = windowWidth / 1280;
    marginY = (windowHeight - (800 * size)) / 2;
  }
  else {
    size = windowHeight / 800;
    marginX = (windowWidth - (1280 * size)) / 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if((windowWidth/windowHeight) < 1.6) {
    size = windowWidth / 1280;
    marginX = 0;
    marginY = (windowHeight - (800 * size)) / 2;
  }
  else {
    size = windowHeight / 800;
    marginX = (windowWidth - (1280 * size)) / 2;
    marginY = 0;
  }
}

function draw() {
  background(240, 227, 204);
  translate(marginX, marginY);
  drawColors();
  drawControls();

  //tela para desenhar
  backcolor = color(255);
  fill(backcolor);
  noStroke();
  rect (200 * size ,100* size , 880 * size , 650 * size );
  
  
  if ( mouseIsPressed === true &&
      40*size < mouseX && mouseX < 90*size && 
      125*size < mouseY && mouseY < 175*size
    ) {
    inDrawMode();
    console.log('drawmode');
  }
    
    
  if (mouseIsPressed === true &&  
      40*size < mouseX && mouseX < 90*size && 
      200*size < mouseY && mouseY < 250*size
    ) {
    inFillMode();
    console.log('fillmode');
  }
    
    
    if (mouseIsPressed === true &&  
        40*size < mouseX && mouseX < 90*size && 
        275*size < mouseY && mouseY < 325*size
    ) {
     inEraseMode();
      console.log('erasemode');
  }
    
    
    if (mouseIsPressed === true &&  
        40*size < mouseX && mouseX < 90*size && 
        350*size < mouseY && mouseY < 400*size
    ) {
     clearAll();
      console.log('clearMode');
  }
  
   if (mouseIsPressed === true &&  
        1130*size < mouseX && mouseX < 1230*size && 
        600*size < mouseY && mouseY < 700*size
    ) {
     childMode();
      console.log('childversion');
  }
  
}

function drawColors() {
  noStroke();
  //cor 1 branco
  fill(255);
  rect(120* size ,125* size , 50* size , 50* size );
  
  //cor 2 amarelo
  fill(255, 238, 0);
  rect(120* size ,180* size , 50* size , 50* size );
  
  //cor 3 laranja
  fill (255, 170, 0);
  rect(120* size ,235* size , 50* size , 50* size );
  
  //cor 4 vermelho
  fill (255,0,0);
  rect(120* size ,290* size , 50* size , 50* size );
  
  //cor 5 rosa
  fill (255, 191, 222);
  rect(120* size ,345* size , 50* size , 50* size );
  
  //cor 6 roxo
  fill (174, 0, 255);
  rect(120* size ,400* size , 50* size , 50* size );
  
  //cor 7 azul
  fill (0, 72, 255);
  rect(120* size ,455* size , 50* size , 50* size );
  
  //cor 8 verde
  fill (57, 163, 24);
  rect(120* size ,510* size , 50* size , 50* size );
  
  //cor 9 castanho
  fill (117, 69, 42);
  rect(120* size ,565* size , 50* size , 50* size );
  
  //cor 10 cinzento
  fill (184, 184, 184);
  rect(120* size ,620* size , 50* size , 50* size );
  
  //cor 11 preto
  fill (0);
  rect(120* size ,675* size , 50* size , 50* size );
}

function drawControls() {
   //titulo
  fill('black');
  textFont(myFont1);
  textSize(100* size );
  text('O Som das Cores', 300* size, 90* size);
  //rodapé
  textFont(myFont2);
  textSize(30* size);
  text('© 2020 Mariana Louros', 540* size, 785* size);
  
  //caneta, fill, erase, clear
  noFill();
  image(caneta, 40* size, 125* size, 50* size, 50* size);
  image(preencher, 40* size, 200* size, 50* size, 50* size);
  image(erase, 40* size, 275* size, 50* size, 50* size);
  image(clear, 40* size, 350* size, 50* size, 50* size);
  
  
  //save, audio, galeria, child version
  image(save, 1130* size, 150* size, 90* size, 90* size);
  image(audio, 1130* size, 300* size, 100* size, 100* size);
  image(galeria, 1130* size, 450* size, 100* size, 100* size);
  image(child, 1130* size, 600* size, 100* size, 100* size);
  

  //help
  image(help, 1170* size , 20* size , 60* size , 60* size );
}


function inDrawMode() {

  //branco
  if (120*size < mouseX && mouseX < 170*size && 
      125*size < mouseY && mouseY < 175*size
    ) {
    c = color(255);
    fill(c);
  }
  
  //amarelo
  if (120*size < mouseX && mouseX < 170*size && 
      180*size < mouseY && mouseY < 230*size
    ) {
    c = color(255, 238, 0);
    fill(c);
  }
  
  //laranja
  if (120*size < mouseX && mouseX < 170*size && 
      235*size < mouseY && mouseY < 285*size
    ) {
    c = color(255, 170, 0);
    fill(c);
  }
  
  //vermelho
  if (120*size < mouseX && mouseX < 170*size && 
      290*size < mouseY && mouseY < 340*size
    ) {
    c = color(255, 0, 0);
    fill(c);
  }
  
  //rosa
  if (120*size < mouseX && mouseX < 170*size && 
      345*size < mouseY && mouseY < 395*size
    ) {
    c = color(255, 191, 222);
    fill(c);
  }
  
  //roxo
  if (120*size < mouseX && mouseX < 170*size && 
      400*size < mouseY && mouseY < 450*size
    ) {
    c = color(174, 0, 255);
    fill(c);
  }
  
  //azul
  if (120*size < mouseX && mouseX < 170*size && 
      455*size < mouseY && mouseY < 505*size
    ) {
    c = color(0, 72, 255);
    fill(c);
  }
  
  //verde
  if (120*size < mouseX && mouseX < 170*size && 
      510*size < mouseY && mouseY < 560*size
    ) {
    c = color(57, 163, 24);
    fill(c);
  }
  
  //castanho
  if (120*size < mouseX && mouseX < 170*size && 
      565*size < mouseY && mouseY < 615*size
    ) {
    c = color(117, 69, 42);
    fill(c);
  }
  
  //cinzento
  if (120*size < mouseX && mouseX < 170*size && 
      620*size < mouseY && mouseY < 670*size
    ) {
    c = color(184, 184, 184);
    fill(c);
  }
  
  //preto
  if (mouseIsPressed === true && 120*size < mouseX && mouseX < 170*size && 
      675*size < mouseY && mouseY < 725*size
    ) {
    c = color(0);
    fill(c);
    console.log('preto');
  }

  ellipse(mouseX, mouseY, 20, 20);
     console.log('color');
}

function inFillMode() {
  //branco
  if (120*size < mouseX && mouseX < 170*size && 
      125*size < mouseY && mouseY < 175*size
    ) {
    console.log('branco');
    backcolor = color(255);
  }
  
  //amarelo
  if (120*size < mouseX && mouseX < 170*size && 
      180*size < mouseY && mouseY < 230*size
    ) {
    console.log('amarelo');
    backcolor = color(255, 238, 0);
  }
  
  //laranja
  if (120*size < mouseX && mouseX < 170*size && 
      235*size < mouseY && mouseY < 285*size
    ) {
    console.log('laranja');
    backcolor = color(255, 170, 0);
  }
  
  //vermelho
  if (120*size < mouseX && mouseX < 170*size && 
      290*size < mouseY && mouseY < 340*size
    ) {
    console.log('vermelho');
    backcolor = color(255, 0, 0);
  }
  
  //rosa
  if (120*size < mouseX && mouseX < 170*size && 
      345*size < mouseY && mouseY < 395*size
    ) {
    console.log('rosa');
    backcolor = color(255, 191, 222);
  }
  
  //roxo
  if (120*size < mouseX && mouseX < 170*size && 
      400*size < mouseY && mouseY < 450*size
    ) {
    console.log('roxo');
    backcolor = color(174, 0, 255);
  }
  
  //azul
  if (120*size < mouseX && mouseX < 170*size && 
      455*size < mouseY && mouseY < 505*size
    ) {
    console.log('azul');
    backcolor = color(0, 72, 255);
  }
  
  //verde
  if (120*size < mouseX && mouseX < 170*size && 
      510*size < mouseY && mouseY < 560*size
    ) {
    console.log('verde');
    backcolor = color(57, 163, 24);
  }
  
  //castanho
  if (120*size < mouseX && mouseX < 170*size && 
      565*size < mouseY && mouseY < 615*size
    ) {
    console.log('castanho');
    backcolor = color(117, 69, 42);
  }
  
  //cinzento
  if (120*size < mouseX && mouseX < 170*size && 
      620*size < mouseY && mouseY < 670*size
    ) {
    console.log('cinzento');
    backcolor = color(184, 184, 184);
  }
  
  //preto
  if (mouseIsPressed === true && 120*size < mouseX && mouseX < 170*size && 
      675*size < mouseY && mouseY < 725*size
    ) {
    console.log('preto');
    backcolor = color(0);
  }
  
}

function inEraseMode() {
  if (mouseIsPressed === true) {
    fill(255);
  }
    ellipse(mouseX, mouseY, 20, 20);
     console.log('erase');
}

function clearAll() {
  fill(255);
  noStroke();
  rect (200 * size,100* size, 880 * size, 650 * size);
  console.log('clear');
}

function childMode() {
  image(desenho, 200 * size ,100* size , 880 * size , 650 * size );
}
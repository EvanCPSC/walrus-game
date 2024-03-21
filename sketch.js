let waltop, walbot, tusl, tusr;
let score = 0, maxscore = 0;
let numl = 0, numr = 0;
function setup() {
  createCanvas(500, 400);
  
  waltop = loadImage('waltop.png');
  walbot = loadImage('walbot.png');
  tusl = loadImage('tusl.png');
  tusr = loadImage('tusr.png');
}

function draw() {
  background('#BC0E92');
  textSize(18);
  image(walbot, width/4, 0, width/2, width/2);
  image(tusl, width/4, numl, width/2, width/2);
  image(tusr, width/4, numr, width/2, width/2);
  image(waltop, width/4, 0, width/2, width/2);
  
  text("score = " + score, width/2-36, height/2+50);
  text(" max = " + maxscore, width/2-36, height/2+70);
  text(numl, width/3+12, 250);
  text(numr, width-width/3-width/12+16, 250);
  
  text("Guess the lower tusk!", width/3+4, 300);
  
  let btnl = createButton('left');
  btnl.position(width/3, 200);
  let btnr = createButton('right');
  btnr.position(width-width/3-width/12, 200);
  
  btnl.mousePressed(chooseTuskl);
  btnr.mousePressed(chooseTuskr);
}

async function chooseTuskl() {
  let win;
  numl = await int(random(10));
  numr = await int(random(10));
  win = await numl >= numr;
  if (win) {
    score += 1;
    maxscore = max(maxscore, score);
  }
  else {
    score = 0;
  }
}

async function chooseTuskr() {
  let win;
  numl = await int(random(10));
  numr = await int(random(10));
  win = await numl <= numr;
  if (win) {
    score += 1;
    maxscore = max(maxscore, score);
  }
  else {
    score = 0;
  }
}

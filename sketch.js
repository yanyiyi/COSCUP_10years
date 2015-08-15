var img;
var fTitle;
var tName,tSay,camX,camY,camOffsetX,camOffsetY,yearX,nBtn;
function preload() {
  img1 = loadImage("coscup-01.png");
  img2 = loadImage("coscup-02.png");
  img3 = loadImage("coscup-03.png");
  img4 = loadImage("coscup-04.png");
  img5 = loadImage("coscup-05.png");

//  fTitle = loadFont("NotoSansCJKtc-Bold.otf");
}

function setup() {
  createCanvas(1123,750);
  background('#d4fcd4');
  capture = createCapture(VIDEO);
  capture.size(490, 368);
  capture.hide();
  tName = createInput("你的暱稱/名字").size(320,24);
  tName.position(640,232);
  tSay = createInput("你想說的話").size(320,24);
  tSay.position(640,455);
  camX = createSlider(490,720,490);
  camX.position(250,500);
  camY = createSlider(368,480,368);
  camY.position(40,285);
  
  camOffsetX = createSlider(-150,150,0);
  camOffsetX.position(250,525);
  camOffsetY = createSlider(-50,50,0);
  camOffsetY.position(40,310);
  yearX = createSlider(1,5,5);
  yearX.position(210,700);
  varX = 0;
}
var displayName,displaySay,displayX,displayY,ofX,ofY;
function draw() {
displayName = tName.value();
displaySay = tSay.value();
displayX = camX.value();
displayY = camY.value();
ofX = camOffsetX.value();
ofY = camOffsetY.value();
imgX = yearX.value();
 image(capture, 150+ofX, 140+ofY, displayX, displayY);
 
 
 switch(imgX) {
    case 1:
        image(img5, 0, 0);
        break;
    case 2:
        image(img4, 0, 0);
        break;
    case 3:
        image(img3, 0, 0);
        break;
    case 4:
        image(img2, 0, 0);
        break;
    case 5:
        image(img1, 0, 0);
        break;
   
 }
 
 fill('#545046');
 textSize(28);
 textFont("CSong3HK-Medium");
 text(displayName,640, 190,320,50);
fill('#2d2b27');
 textSize(21);
 textFont("NotoSansCJKtc-Light");
 text(displaySay,640,270,320,200);
 
}


var varX;

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    var fs = fullScreen();
    fullscreen(!fs);
  }
  if (mouseX > 1123){ 
    saveCanvas(canvas,'myCanvas'+varX, 'png');
    varX++;
  }
}
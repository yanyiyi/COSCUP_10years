var img;
var fTitle;
var tName,tSay,camX,camY,camOffsetX,camOffsetY,yearX,nBtn;

var tag1,tag2,tag3,tag4,tag5;
function preload() {
  img1 = loadImage("coscup-01.png");
  img2 = loadImage("coscup-02.png");
  img3 = loadImage("coscup-03.png");
  img4 = loadImage("coscup-04.png");
  img5 = loadImage("coscup-05.png");  
  img6 = loadImage("coscup-06.png");
    img7 = loadImage("coscup-07.png");
    img8 = loadImage("coscup-08.png");
     img9 = loadImage("coscup-09.png");
     img10 = loadImage("coscup-10.png");
    img11 = loadImage("coscup-11.png");

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
    
  camX = createSlider(490,720,605);
  camX.position(250,500);
  camY = createSlider(368,480,424);
  camY.position(40,285);
  
  camOffsetX = createSlider(-150,150,0);
  camOffsetX.position(250,525);
  camOffsetY = createSlider(-50,50,0);
  camOffsetY.position(40,310);
  yearX = createSlider(1,11,11);
  yearX.position(210,700);
    nBtn = createButton("Save",0);
    nBtn.position(640,600);
  tag1 = createElement("span","高矮");
    tag2 =  createElement("span","寬瘦");
    tag3 = createElement("span","上下");
    tag4 = createElement("span","左右");
    tag5 = createElement("span","年");
    tag1.position(5,285);
    tag2.position(215,500);
    tag3.position(5,310);
    tag4.position(215,525);
    tag5.position(188,700);
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
image(capture, 350+ofX-displayX/2, 315+ofY-displayY/2, displayX, displayY);
 
 
 switch(imgX) {
    case 1:
        image(img11, 0, 0);
        break;
    case 2:
        image(img10, 0, 0);
        break;
    case 3:
        image(img9, 0, 0);
        break;
    case 4:
        image(img8, 0, 0);
        break;
    case 5:
        image(img7, 0, 0);
        break;
   case 6:
        image(img6, 0, 0);
        break;
    case 7:
        image(img5, 0, 0);
        break;
     case 8:
        image(img4, 0, 0);
     case 9:
        image(img3, 0, 0);
     case 10:
        image(img2, 0, 0);
        break;
     case 11:
        image(img1, 0, 0);
        break;
 }
 if(imgX > 1){
      tName = createInput("你的暱稱/名字").size(320,24);
  tName.position(640,232);
  tSay = createInput("你想說的話").size(320,24);
  tSay.position(640,455);
     fill('#545046');
     textSize(28);
     textFont("CSong3HK-Medium");
     text(displayName,640, 190,320,50);
    fill('#2d2b27');
     textSize(21);
     textFont("NotoSansCJKtc-Light");
     text(displaySay,640,270,320,200);
 }
}


var varX;

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    var fs = fullScreen();
    fullscreen(!fs);
  }
  if (mouseX > 590 && mouseX < 960  && mouseY > 590 && mouseY < 700){ 
      
    saveCanvas(canvas,'COSCUP10yrs'+displayName+'-'+varX, 'png');
    varX++;
  }
}
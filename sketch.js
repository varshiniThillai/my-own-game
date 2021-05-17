var man,manImage;
var coronavirus,angryvirus,cryingvirus,happyvirus;
function preload(){
manImage=loadImage("images/runningman.png");
happyvirus=loadImage("images/happyvirus.png");

}

function setup(){
createCanvas(1500,800);
man=createSprite(100,400,100,100);
man.addImage("man",manImage);
man.scale=0.5;

coronavirus=createSprite(200,200,50,50);
coronavirus.addImage("coronavirus",happyvirus);
coronavirus.scale=0.1;

}

function draw(){
    background("yellow");
  drawSprites();  
}
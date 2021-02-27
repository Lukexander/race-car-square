var canvas;
var music;
var box1,box2,box3,box4
var edge
var ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  box1 = createSprite(700,550,170,30);
  box1.shapeColor="blue"
  box2 = createSprite(500,550,170,30);
  box2.shapeColor="pink"
  box3 = createSprite(300,550,170,30);
  box3.shapeColor="green"
  box4 = createSprite(100,550,170,30);
  box4.shapeColor="red"
    //create box sprite and give velocity
ball = createSprite(random(25,750),100,40,40)
ball.shapeColor="white"
ball.velocityY = 4
ball.velocityX=4

}

function draw() {
    background(rgb(169,169,169));
    music.play();
    //create edgeSprite
    
    edge=createEdgeSprites();
ball.bounceOff(edge)  

    //add condition to check if box touching surface and make it box
if(box1.isTouching(ball)&& ball.bounceOff(box1)){
ball.shapeColor="blue"
}
if(box2.isTouching(ball)&& ball.bounceOff(box2)){
    ball.shapeColor="pink"
    }
 if(box3.isTouching(ball)&& ball.bounceOff(box3)){
        ball.shapeColor="green"
        }
 if(box4.isTouching(ball)&& ball.bounceOff(box4)){
            ball.shapeColor="red"
            }
    drawSprites();
}

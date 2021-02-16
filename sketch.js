var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(160, 570, 150, 10);
    surface1.shapeColor = "red";
    surface2 = createSprite(320, 570, 150, 10);
    surface2.shapeColor = "orange";
    surface3 = createSprite(480, 570, 150, 10);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(640, 570, 150, 10);
    surface4.shapeColor = "green";
    //create box sprite and give velocity
    box = createSprite(random(20,750), 300, 20, 20);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = -7;

}
createEdgeSprites();

function draw() {
    background(0);
    box.bounceOff(createEdgeSprites());

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "red";
    }

    if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "orange";
    }
    
    if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = "yellow";
    }
    
    if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = "green";
    }
    
    drawSprites();
}

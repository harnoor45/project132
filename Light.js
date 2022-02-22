Status = "";
light_image = "";

function preload(){
light_image = loadImage("Light bulb.png");
}

function setup(){
canvas = createCanvas(640 ,350);
canvas.position(315,200);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_detector.detect(light_image,gotResults);
}

function gotResults(){
if(error){
console.error(error);
}
console.log(results);
}

function draw(){
image(light_image,0,0,640,350);

}
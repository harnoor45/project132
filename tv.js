Status = "";
tv_image = "";

function preload(){
tv_image = loadImage("tv.png");
}

function setup(){
canvas = createCanvas(640,350);
canvas.position(315,200);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_detector.detect(tv_image,gotResults);
}

function gotResults(){
if(error){
console.error(error);
}
console.log(results);
}

function draw(){
image(tv_image,0,0,640,350);
}
Status = "";
fan_image = "";

function preload(){
fan_image = loadImage("fan.jpg");
}

function setup(){
canvas = createCanvas(640 ,350);
canvas.position(315,200);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
console.log("Model Loaded!");
Status = true;
object_detector.detect(ac_image,gotResults);
}

function gotResults(){
if(error){
console.error(error);
}
console.log(results);
}

function draw(){
image(fan_image,0,0,640,350);

}



function preload(){
   song1 = loadSound("Song1.mp3");
   song2 = loadSound("Song2.mp3");
}

song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup(){
   canvas = createCanvas(550,500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose' , gotPoses);
}

function modelLoaded(){
   console.log("Model is initialized!");
}

function gotPoses(results){
   if(results.length>0){
      console.log(results);

      leftWristX = results[0].pose.leftWrist.x;
      leftWristX = results[0].pose.leftWrist.y;
      console.log("Left Wrist X: " + leftWristX + "Left Wrist Y: " + leftWristY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;


   }
}


function draw(){
   image(video,0,0,550,500);
}
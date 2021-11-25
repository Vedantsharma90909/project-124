function setup(){
     video = createCapture(VIDEO);
     video.size(550,550);

     canvas = createCanvas(550,550);
     canvas.position(560,150);
    
     posenet = ml5.poseNet(video,modelLoaded);
     posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialised!");
}

function gotPoses(results){
    console.log("i am outside if");
    console.log(results.length);
    if(results.length > 0) {
    console.log("i am inside if");
     console.log(results);
    }
}
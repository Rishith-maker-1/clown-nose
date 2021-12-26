noseX = 0;
noseY = 0;
function preload(){
    clownNose=loadImage('https://i.postimg.cc/1tkqJ6SX/Clown-nose-large-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    image(clownNose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('img.jpg');
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nose x= "+noseX+" nose y= "+noseY);
    }
}

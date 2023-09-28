noseX=0;
noseY=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(150,150);
    canvas = createCanvas(550, 550);
    canvas.position(1000,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093')
    square(noseX, noseY, 100)

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("noseX =" + noseX +"noseY = " + noseY);
    }
}


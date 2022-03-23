function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coins= loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
    maro_kick= loadSound("kick.wav");
	mario_die= loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");

	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotposes);
}

function gotposes(results){
if(results.length > 0){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(noseX,noseY);
}
}

function modelLoaded(){
console.log("Model Loaded");
}

function draw() {
game()
}







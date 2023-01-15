// Ball Variables
let xBall = 300;
let yBall = 200;
let diameter = 15;
let radius = diameter / 2;
let speedXBall = 6;
let speedYBall = 6;

//Racket
let xRacket = 5;
let yRacket = 150;
let RacketLenght = 10;
let RacketHeight = 90;

// Opponents Racket
let xRacketOPP = 585;
let yRacketOPP = 150;
let RacketSpeed;

//Game Score
let myScore = 0;
let OPPScore = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    setup();
    background(0);
    showBall();
    MoveBall();
    BallBorderCollision();
    showRacket(xRacket,yRacket);
    showRacket(xRacketOPP,yRacketOPP);
    CollideRacket(xRacket,yRacket);
    CollideRacket(xRacketOPP, yRacketOPP);
    MoveRacketOPP();
    scorePoint();
    showScore();
    
}

function showBall(){
    circle(xBall,yBall,diameter);
}

function MoveBall(){
    xBall += speedXBall;
    yBall += speedYBall;
}

function BallBorderCollision(){
    if (xBall + radius > width || 
        xBall - radius < 0){
            speedXBall *= -1;
        }
        if (yBall + radius > height || 
        yBall - radius < 0){
            speedYBall *= -1;
        }
}

function CollideRacket(xRack,yRack) {
    collide = collideRectCircle(xRack, yRack, RacketLenght, RacketHeight, xBall, yBall, radius);
    if (collide) {
        speedXBall *= -1;
    }
}

function showRacket(xRack,yRack) {
    rect(xRack, yRack, RacketLenght, RacketHeight);
}


function moveMyRacket() {
    if (keyIsDown(UP_ARROW)) {
        yRacket -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRacket += 10;
    }
}

function showScore(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(myScore, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(OPPScore, 470, 26);

}

function scorePoint() {
    if (xBall > 590) {
        myScore += 1;
    }
    if (xBall < 10) {
        OPPScore += 1;
    }
} 

function MoveRacketOPP() {
    RacketSpeed = yBall - yRacketOPP - RacketLenght / 2 - 30;
    yRacketOPP += RacketSpeed
}

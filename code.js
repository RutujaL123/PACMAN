var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0;
var lives=3;
var Player=createSprite(20,20,20,20);
Player.shapeColor="red";

var Monster1=createSprite(180,200,20,20);
Monster1.shapeColor="cyan";
var Monster2=createSprite(210,200,20,20);
Monster2.shapeColor="pink";
var Monster3=createSprite(180,110,20,20);
Monster3.shapeColor="cyan";
var Monster4=createSprite(210,110,20,20);
Monster4.shapeColor="pink";
var Monster5=createSprite(180,350,20,20);
Monster5.shapeColor="green";
var Monster6=createSprite(210,350,20,20);
Monster6.shapeColor="purple";


var wall1=createSprite(290,295,5,30);
wall1.shapeColor="white";
var wall2=createSprite(325,310,75,5);
wall2.shapeColor="white";
var wall3=createSprite(360,295,5,30);
wall3.shapeColor="white";
var wall4=createSprite(325,280,75,5);
wall4.shapeColor="white";

var wall5=createSprite(45,295,5,30);
wall5.shapeColor="white";
var wall6=createSprite(80,310,75,5);
wall6.shapeColor="white";
var wall7=createSprite(115,295,5,30);
wall7.shapeColor="white";
var wall8=createSprite(80,280,75,5);
wall8.shapeColor="white";
createEdgeSprites();
Monster1.velocityX=8;
Monster2.velocityX=-8;
Monster4.velocityX=8;
Monster3.velocityX=-8;
Monster5.velocityX=16;
Monster6.velocityX=-16;

function draw() {
    background("black");
  Player.bounceOff(edges);

if (Player.isTouching(Monster1) || Player.isTouching(Monster2)||Player.isTouching(Monster3)||Player.isTouching(Monster4)||Player.isTouching(Monster5)||Player.isTouching(Monster6)) {
  lives=lives-1;
Player.x=20;
Player.y=20;
}

if (Player.isTouching(points1)||Player.isTouching(points2)|| Player.isTouching(points3)||Player.isTouching(points4)||Player.isTouching(points5)||Player.isTouching(points6)|| Player.isTouching(points7)||Player.isTouching(points8)||Player.isTouching(points9)){
  score=score+1;
}

   if(points1&&points2&&points3&&points4&&points5&&points6&&points7&&points8&&points9==0)
  {
    console.log("Won");
    text("Well Done!!",150,200);
  }
 if(lives == 0)
{
    Player.remove;
    Player.x = 20;
    Player.y = 20;
    
 text("Game Over!!",150,200);
  }
  Monster1.bounceOff(edges);
  Monster2.bounceOff(edges);
  Monster3.bounceOff(edges);
  Monster4.bounceOff(edges);
   Monster5.bounceOff(edges);
    Monster6.bounceOff(edges);

  Player.bounceOff(wall1);
  Player.bounceOff(wall2);
  Player.bounceOff(wall3);
  Player.bounceOff(wall4);
  Player.bounceOff(wall5);
  Player.bounceOff(wall6);
  Player.bounceOff(wall7);
  Player.bounceOff(wall8);
  Player.bounceOff(points1, BrickHIT1);
  Player.bounceOff(points2, BrickHIT2);
  Player.bounceOff(points3, BrickHIT3);
  Player.bounceOff(points4, BrickHIT4);
  Player.bounceOff(points5, BrickHIT5);
  Player.bounceOff(points6, BrickHIT6);
  Player.bounceOff(points7, BrickHIT7);
  Player.bounceOff(points8, BrickHIT8);
  Player.bounceOff(points9, BrickHIT9);
  text("Score: "+score, 300,300);
  text("Lives: "+lives, 60,300);
   if(keyDown("right")){
    Player.x = Player.x + 6;
  }
  if(keyDown("up")){
    Player.y = Player.y - 6;
  }
  if(keyDown("left")){
    Player.x = Player.x - 6;
  }
   if(keyDown("down")){
    Player.y = Player.y + 6;
  }
  drawSprites();
  }
//start of points code
var points1 = createGroup();
function pointrow1(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point1=createSprite(50+50*x, y,15,15);
points1.shapeColor="yellow";
  points1.add(point1);
}}
pointrow1(20, "yellow");

var points2 = createGroup();
function pointrow2(x, color) {
for (var y=0; y<7; y=y+1)
{
  var point2=createSprite(x, 60+50*y,15,15);
 point2.shapeColor=color;
  points2.add(point2);
}}
pointrow2(20, "yellow");

var points3 = createGroup();
function pointrow3(x, color) {
for (var y=0; y<7; y=y+1)
{
  var point3=createSprite(x, 60+50*y,15,15);
 point3.shapeColor=color;
  points3.add(point3);
}}
pointrow3(380, "yellow");

var points4 = createGroup();
function pointrow4(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point4=createSprite(50+50*x, y,15,15);
points4.shapeColor=color;
  points4.add(point4);
}}
pointrow4(380, "yellow");

var points5 = createGroup();
function pointrow5(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point5=createSprite(50+50*x, y,15,15);
points5.shapeColor=color;
  points5.add(point5);
}}
pointrow5(250, "yellow");

var points6 = createGroup();
function pointrow6(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point6=createSprite(50+50*x, y,15,15);
points6.shapeColor=color;
  points6.add(point6);
}}
pointrow6(150, "yellow");

var points7 = createGroup();
function pointrow7(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point7=createSprite(50+50*x, y,15,15);
points7.shapeColor=color;
  points7.add(point7);
}}
pointrow7(50, "yellow");

var points8 = createGroup();
function pointrow8(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point8=createSprite(50+50*x, y,15,15);
points8.shapeColor=color;
  points8.add(point8);
}}
pointrow8(80, "yellow");

var points9 = createGroup();
function pointrow9(y, color) {
for (var x=0; x<7; x=x+1)
{
  var point9=createSprite(50+50*x, y,15,15);
points9.shapeColor=color;
  points9.add(point9);
}}
pointrow9(350, "yellow");
//end of points code

function BrickHIT1(Player, point1){
 point1.remove();
 
}
function BrickHIT2(Player, point2){
 point2.remove();
 
}
function BrickHIT3(Player, point3){
 point3.remove();
 
}
function BrickHIT4(Player, point4){
 point4.remove();
 
}
function BrickHIT5(Player, point5){
 point5.remove();
 
}
function BrickHIT6(Player, point6){
 point6.remove();
 
}
function BrickHIT7(Player, point7){
 point7.remove();
 
}
function BrickHIT8(Player, point8){
 point8.remove();
 
}
function BrickHIT9(Player, point9){
 point9.remove();
 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

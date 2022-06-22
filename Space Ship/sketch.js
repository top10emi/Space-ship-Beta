var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
//var allPlayers, car1, car2, fuels, powerCoins, obstacles;
//var cars = [];
var avatarButton, avatarButtonImg;
var playButton1, playButton1Img;
var settingsButton1, settingsButton1Img;
var acceptButton, acceptButtonImg;
var cancelButton, cancelButtonImg;
var Logo, LogoImg;
var Box1, Box1Img, Box3, Box3Img;
var ss1, ss1Img, ss2, ss2Img, ss3, ss3Img, ss4, ss4Img;
var volumeBotton, volumeBottonImg, volumeBottonImgOn, volumeBottonOn, volumeBottonImgOff, volumeBottonOff;
var unequip1, unequip1Img, unequip2, unequip1Img, unequip3, unequip3Img, unequip4, unequip4Img;
var equip1, equip1Img, equip2, equip2Img, equip3, equip3Img, equip4, equip4Img;


function preload() {
  backgroundImage = loadImage("./assets/SpaceShip1.jpg");
  //car1_img = loadImage("../assets/car1.png");
  //car2_img = loadImage("../assets/car2.png");
  //track = loadImage("../assets/track.jpg");
  //fuelImage = loadImage("./assets/fuel.png");
  //powerCoinImage = loadImage("./assets/goldCoin.png");
  //obstacle1Image = loadImage("./assets/obstacle1.png");
  //obstacle2Image = loadImage("./assets/obstacle2.png");
  //lifeImage = loadImage("./assets/life.png");
  avatarButtonImg = loadImage("./assets/Bshop.PNG");
  playButton1Img = loadImage("./assets/BplayL.PNG");
  settingsButton1Img = loadImage("./assets/Bsettings.PNG");
  acceptButtonImg = loadImage("./assets/Baccept.PNG");
  cancelButtonImg = loadImage("./assets/Bcancel.PNG");
  LogoImg = loadImage("./assets/Logo.png");
  Box1Img = loadImage("./assets/MenuBox1.PNG");
  Box3Img = loadImage("./assets/MenuBox3.PNG");
  ss1Img = loadImage("./assets/SSblue.PNG");
  ss2Img = loadImage("./assets/SSyellow.PNG");
  ss3Img = loadImage("./assets/SSred.PNG");
  ss4Img = loadImage("./assets/SSovni.PNG");
  volumeBottonImg = loadImage("./assets/Bvolume.PNG");
  volumeBottonImgOn = loadImage("./assets/onBotton.PNG");
  volumeBottonImgOff = loadImage("./assets/offBotton.PNG");
  unequip1Img = loadImage("./assets/Unequip.PNG");
  unequip2Img = loadImage("./assets/Unequip.PNG");
  unequip3Img = loadImage("./assets/Unequip.PNG");
  unequip4Img = loadImage("./assets/Unequip.PNG");
  equip1Img = loadImage("./assets/Equip.PNG");
  equip2Img = loadImage("./assets/Equip.PNG");
  equip3Img = loadImage("./assets/Equip.PNG");
  equip4Img = loadImage("./assets/Equip.PNG");
}

function setup() {
  canvas = createCanvas(1990, 1125);
  database = firebase.database();
  //game = new Game();
  //game.getState();
  //game.start();
  avatarButton = createSprite(390, 75 ,50 ,50);
  avatarButton.addImage("avatarButtonImg",avatarButtonImg);
  avatarButton.scale = 0.3;

  playButton1 = createSprite(1150, 900 ,50 ,50);
  playButton1.addImage("playButton1Img", playButton1Img);
  //playButton1.scale = 0.6;

  settingsButton1 = createSprite(1600, 75 ,50 ,50);
  settingsButton1.addImage("settingsButton1Img",settingsButton1Img);
  settingsButton1.scale = 0.3;

  acceptButton = createSprite(300, 500 ,50 ,50);
  acceptButton.addImage("acceptButtonImg", acceptButtonImg);
  acceptButton.scale = 0.2; 
  
  cancelButton = createSprite(400, 500 ,50 ,50);
  cancelButton.addImage("cancelButtonImg", cancelButtonImg);
  cancelButton.scale =0.2;

  Box1 = createSprite(400, 600 ,50 ,50);
  Box1.addImage("Box1Img", Box1Img);
  //Box1.scale =0.2;

  Box2 = createSprite(1600, 520 ,50 ,50);
  Box2.addImage("Box3Img", Box3Img);
  //Box2.scale =0.2;

  ss1 = createSprite(300, 650 ,50 ,50);
  ss1.addImage("ss1Img", ss1Img);
  ss1.scale =0.5;

  ss4 = createSprite(500, 650 ,50 ,50);
  ss4.addImage("ss4Img", ss4Img);
  ss4.scale =0.5;

  ss3 = createSprite(520, 400 ,50 ,50);
  ss3.addImage("ss3Img", ss3Img);
  ss3.scale =0.6;

  ss2 = createSprite(320, 400 ,50 ,50);
  ss2.addImage("ss2Img", ss2Img);
  ss2.scale =0.5;

  volumeBottonOn = createSprite(1680, 300 ,50 ,50);
  volumeBottonOn.addImage("volumeBottonImgOn", volumeBottonImgOn);
  volumeBottonOn.scale =0.4;

  volumeBottonOff = createSprite(1680, 300 ,50 ,50);
  volumeBottonOff.addImage("volumeBottonImgOff", volumeBottonImgOff);
  volumeBottonOff.scale =0.4;

  volumeBotton = createSprite(1500, 300 ,50 ,50);
  volumeBotton.addImage("volumeBottonImg", volumeBottonImg);
  volumeBotton.scale =0.3;

  equip1 = createSprite(300, 770 ,50 ,50);
  equip1.addImage("equip1Img", equip1Img);
  equip1.scale =0.5;

  unequip2 = createSprite(500, 770 ,50 ,50);
  unequip2.addImage("equip4Img", equip2Img);
  unequip2.scale =0.4;

  unequip3 = createSprite(520, 500 ,50 ,50);
  unequip3.addImage("unequip3Img", unequip3Img);
  unequip3.scale =0.4;

  unequip4 = createSprite(320, 500 ,50 ,50);
  unequip4.addImage("unequip4Img", unequip4Img);
  unequip4.scale =0.4;

  unequip1 = createSprite(300, 770 ,50 ,50);
  unequip1.addImage("unequip1Img", unequip1Img);
  unequip1.scale =0.4;

  equip2 = createSprite(500, 770 ,50 ,50);
  equip2.addImage("equip4Img", equip2Img);
  equip2.scale =0.5;

  equip3 = createSprite(520, 500 ,50 ,50);
  equip3.addImage("equip3Img", equip3Img);
  equip3.scale =0.5;

  equip4 = createSprite(320, 500 ,50 ,50);
  equip4.addImage("equip4Img", equip4Img);
  equip4.scale =0.5;

  //Logo = createSprite(300, 200, 50,50);
  //Logo.addImage("LogoImg", LogoImg);
  //Logo.scale = 0.3;




}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  drawSprites();


  //if (gameState === 1) {
    //game.play();}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

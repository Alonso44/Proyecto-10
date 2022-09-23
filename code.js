var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["44f68cd3-8331-4f4f-81dd-bb1eecb56304","5b63daff-174c-4211-8d8c-7f4e5c8c2855","162c15f0-49a9-4fea-b2cc-eae7025fb66e","009299ee-2e8c-48cf-a970-6cf2f78b3e5d","45bbcabf-48a8-4686-80ff-0037f0c8491e","35df07b2-4256-4dad-8cfc-96811e64a6db"],"propsByKey":{"44f68cd3-8331-4f4f-81dd-bb1eecb56304":{"name":"henry_stickmin_hd (1).png_1","sourceUrl":null,"frameSize":{"x":271,"y":736},"frameCount":1,"looping":true,"frameDelay":12,"version":"lctucyJAJXTofLtVVZbCWl_mG2itIEk_","loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":736},"rootRelativePath":"assets/44f68cd3-8331-4f4f-81dd-bb1eecb56304.png"},"5b63daff-174c-4211-8d8c-7f4e5c8c2855":{"name":"cactus_1","sourceUrl":null,"frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"yQqmwC.U0HywABjuXus3FmodF_zNF47k","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/5b63daff-174c-4211-8d8c-7f4e5c8c2855.png"},"162c15f0-49a9-4fea-b2cc-eae7025fb66e":{"name":"thorn_1","sourceUrl":null,"frameSize":{"x":51,"y":29},"frameCount":1,"looping":true,"frameDelay":12,"version":"G2Y9DSWEStOBdaeSHuOwGa5A6J.J76hV","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":29},"rootRelativePath":"assets/162c15f0-49a9-4fea-b2cc-eae7025fb66e.png"},"009299ee-2e8c-48cf-a970-6cf2f78b3e5d":{"name":"desert_1","sourceUrl":"assets/api/v1/animation-library/gamelab/At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx/category_backgrounds/background_desert.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/At9X2LiZq9X6dQUW0NBluC3Te8fbAPEx/category_backgrounds/background_desert.png"},"45bbcabf-48a8-4686-80ff-0037f0c8491e":{"name":"cactus_2","sourceUrl":null,"frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"qyCGKxwocleE6f07o80OhN7.huakgzh3","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/45bbcabf-48a8-4686-80ff-0037f0c8491e.png"},"35df07b2-4256-4dad-8cfc-96811e64a6db":{"name":"ufo_1","sourceUrl":null,"frameSize":{"x":386,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"mXOegsA6DhFE6TRuylJLxVG_JVsDkCyn","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":267},"rootRelativePath":"assets/35df07b2-4256-4dad-8cfc-96811e64a6db.png"}}};
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

//Nuestro protagonista Henry Stickman llego a un planeta desconocido en busca de recursos.
//Pero él no sabía que en ese planeta habitaban extraterrestres con forma de cactus que lanzan espinas a su presa para después comérsela.
//¡Ayuda a Henry para que llegue a su nave sano y salvo!



var a = createSprite(200,200);
a.setAnimation("desert_1");

var kid = createSprite(200,370,20,20);
kid.setAnimation("henry_stickmin_hd (1).png_1");
kid.scale = 0.1;

var UFO = createSprite(200,30,10,10);
UFO.setAnimation("ufo_1");
UFO.scale = 0.2;

var enemy1 = createSprite(32,300,10,10);
enemy1.setAnimation("cactus_1");
enemy1.scale = 0.5;

var enemy2 = createSprite(368,210,10,10);
enemy2.setAnimation("cactus_2");
enemy2.scale = 0.5;

var enemy3 = createSprite(32,120,10,10);
enemy3.setAnimation("cactus_2");
enemy3.scale = 0.5;

var thorn1 = createSprite(32,300,10,10);
thorn1.setAnimation("thorn_1");
thorn1.scale = 0.5;


var thorn2 = createSprite(368,210,10,10);
thorn2.setAnimation("thorn_1");
thorn2.scale = 0.5;


var thorn3 = createSprite(32,120,10,10);
thorn3.setAnimation("thorn_1");
thorn3.scale = 0.5;

var gamestate = "serve";
var death = 0;

function draw() {
  background("white");
  
   createEdgeSprites();
  
 drawSprites();
 
 if (gamestate == "serve") {
   
   stroke("white");
   textSize(20);
   text("Presiona ENTER para ayudar Henry",40,200);
   
   if (keyDown(ENTER)) {
     
  gamestate = "play";
  thorn1.velocityX = 10;
  thorn2.velocityX = 10;
  thorn3.velocityX = 10;
}
 }
 
 if(gamestate == "play") {
   
   if (keyDown(UP_ARROW)) {
  kid.y=kid.y-3;
  }
  if (keyDown(DOWN_ARROW)) {
  kid.y=kid.y+3;
  }
  if (keyDown(LEFT_ARROW)) {
  kid.x=kid.x-3;
  }
  if (keyDown(RIGHT_ARROW)) {
  kid.x=kid.x+3;
  }


    if (kid.isTouching(thorn1) || kid.isTouching(thorn2) || kid.isTouching(thorn3) || kid.isTouching(enemy1)|| kid.isTouching(enemy2) 
  || kid.isTouching(enemy3)) {
  playSound("assets/category_hits/retro_game_weapon_-_light_punch_2.mp3");
  kid.x = 200;
  kid.y = 370;
  death = death +1;
  }

  stroke("white");
  textSize(15);
  text("MUERTES: "+death,300,380);
   
   
 }
 



if (kid.isTouching(UFO)) {
  playSound("assets/category_alerts/playful_quirky_positive_game_cue_1.mp3");
  
  kid.velocityX = 0;
  kid.velocityY = 0;
  thorn1.velocityX = 0;
  thorn2.velocityX = 0;
  thorn3.velocityX = 0;
  
 stroke("white");
 textSize(30);
 text("¡GANASTE!",115,200);
}



if (death == 10) {
  playSound("assets/category_instrumental/digital_downscale_2.mp3");
  
  kid.velocityX = 0;
  kid.velocityY = 0;
  thorn1.velocityX = 0;
  thorn2.velocityX = 0;
  thorn3.velocityX = 0;
  stroke("white");
  textSize("30");
  text("¡SE ACABO!",115,200);
  
  stroke("white");
  textSize(16);
  text("(No hay más vidas)",130,220);
}

thorn1.bounceOff(edges);
thorn2.bounceOff(edges);
thorn3.bounceOff(edges);
kid.bounce(edges);

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

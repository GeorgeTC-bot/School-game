var player = [];
var grades = [];
var ground,books;
var npc = [], stage = 1;
var dialogueBox, dialogue, person, exit = false;
var friendstart = ["What are ya' lookin' at? O you want these? Then you'll have to wait for the next semester",
"Hey! nice Hat you got there! So cooool...",
"... go AWAY!!",
"Aaaa Please don't hit me!!",
"... aaa hi? What up?",
"... Hm? Don't talk to me!",
"..."];
var path = {shopkeeper: 0,friend1: 0, friend2: 0, friend3: 0, enemy1: 0, enemy2: 0, enemy3: 0, rival: 0};

var shopkeeper = ["Hello good sir!","What would you you wanna' buy?","Come back later"];
var friend1 = ["Heeeyyyy!!!! Wanna' be friends?", "REALLLYY ?!?!?!?!!", "So rude!!","I have a friend! I have a friend!", "Hey! Wanna’ play outside?", "You can’t catch me, you can’t catch me!!", "Ok... maybe next time...", "Hey!! Rude face!", "So what did you MEAN!! Don't even look at me!!", "HM!!"];
var friend2 = ["hmmm.. HI!! sorry if I sound rude or anything but I wanted to be friends with you.. It's ok if you don't want to...",  "YESS!! I go m- my first frineds!!", "Aaaa ok I'll be taking my leave know..."];
var friend3 = ["Ho... you like my new watch?", "Righhhhttt!! My dad bought it for me! Wanna' see it closely", "WHAT!?? It looks disgusting? My dad bought this for me! I hate you!!"];
var rival = ["One day! I will get better grades than you!!", "Yaaa' you better watch it!", "Too bad..."];
var talkedTo = [false,false,false,false,false,false];
var talkTo = [false,false,false,false,false,false];
var time = [0,0,0,0,0,0,0,0,0,0];
var timer = {
  learn: 0
}
var friends = [false,false,false,false];
var friendNo = 0;
var follow = 0;
var room = [2,"hallway"];
var librarian, bar;

var TestButton, goodButton, badButton;

var gamestate = "play", framecount;

function setup(){
  createCanvas(800,400);
  dialogue = false;
  books = createSprite(600,200,400,350);
  books.shapeColor = "brown";
  framecount = 0;

  npc[0] = 20;
  npc[1] = 20;
  //shopkeeper
  npc[2] = createSprite(100,300,npc[0],npc[1]);
  npc[2].shapeColor = "green";
  //maybe friend
  npc[3] = createSprite(200,300,npc[0],npc[1]);
  npc[3].shapeColor = "blue";
  //bully
  npc[4] = createSprite(300,300,npc[0],npc[1]);
  npc[4].shapeColor = "red";
  //maybe friend
  npc[5] = createSprite(400,300,npc[0],npc[1]);
  npc[5].shapeColor = "blue";
  //maybe friend or foe
  npc[6] = createSprite(500,300,npc[0],npc[1]);
  npc[6].shapeColor = "blue";
  //maybe rival
  npc[7] = createSprite(600,300,npc[0],npc[1]);
  npc[7].shapeColor = "black";

  librarian = createSprite(100,300,20,40);
  npc[8] = librarian;
  npc[9] = books;
  librarian.shapeColor = rgb(211, 29, 29);

  //player[0] = sprite & player[1] = grades & player[2] = tint
  player[0] = createSprite(10,300,20,20);
  player[0].shapeColor = "white";
  player[1] = 100;
  player[2] = 100;

  ground = createSprite(width/2,height,width*2,100);

  dialogueBox = createSprite(width/2,height + 100,width,200);
  dialogueBox.shapeColor = "black";
  dialogueBox.debug = true;

  TestButton = createButton("Take Test");
  TestButton.position(0,400);
  TestButton.size(100,44);

  goodButton = createButton("---");
  goodButton.position(100,400);

  badButton = createButton("---");
  badButton.position(400,400);

  bar = new createBar(200,200,10); 
}

function draw(){
  background(rgb(71, 71, 71));

  if(!keyIsDown(68) && !keyIsDown(65)){
    if(player[0].velocityX > 0){
      player[0].velocityX -= 0.5;
    }
    else if(player[0].velocityX < 0){
      player[0].velocityX += 0.5;
    }
  }
  if(player[0].velocityX > 5){
    player[0].velocityX = 5;
  }
  else if(player[0].velocityX < -5){
    player[0].velocityX = -5;
  }

  //return player
  if(player[0].x >= width && room[0] != 2){
    player[0].x = 0;
    room[0] = room[0] + 1;
  }
  else if(player[0].x <= 0 && room[0] != -1){
    player[0].x = width;
    room[0] = room[0] - 1;
  }
  else if(player[0].x > width - player[0].width/2 - 30 && room[0] === 2){
    player[0].x = width - player[0].width/2 - 30;
  }
  else if(player[0].x < player[0].width/2 + 30 && room[0] === -1){
    player[0].x = player[0].width/2 + 30;
  }

  if(room[0] > 2){
    room[0] = 2;
  }
  if(room[0] < -1){
    room[0] = -1;
  }

  if(room[0] != 0){
    for(var i = 2; i < npc.length; i++){
      npc[i].visible = false;
    }
  }
  else{
    for(var i = 2; i < npc.length; i++){
      npc[i].visible = true;
    }
  }

  //room
  if(room[0] === 0){
    room[1] = "hallway";
  }
  else if(room[0] === 1){
    books.visible = true;
    librarian.visible = true;
    room[1] = "library";
  }
  else if(room[0] === 2){
    room[1] = "classroom";
  }
  else if(room[0] === -1){
    room[1] = "playground";
  }
  if(room[0] != 1){
    books.visible = false;
    librarian.visible = false;
  }

  if(dialogue === true && people != "books"){
    timer.learn = 0;
  }

  player[0].velocityY = player[0].velocityY + 1;
  //player[2] = player[2] - 1;
  //player[0].tint = player[2];
  ctrl();

  TestButton.mousePressed(Promote);
  if(time[stage - 1] === 0){
    for( var i = 0; i <= 5; i++){
      talkedTo[i] = talkTo[i];
    }
  }
  
  if(dialogue === false){
    dialogueBox.y = 500;

    goodButton.html("...");
    badButton.html("...");
    
    path.shopkeeper = 0;

    goodButton.mousePressed();
    badButton.mousePressed();
  }

  findPeople();

  //follow player
  if(follow === 1 && friends[0] === true){
    npc[2].velocityX = Math.round((player[0].x - npc[2].x)/50);
  }
  if(follow === 2 && friends[1] === true){
    npc[5].velocityX = Math.round((player[0].x - npc[5].x)/50);
  }
  if(follow === 3 && friends[2] === true){
    npc[6].velocityX = Math.round((player[0].x - npc[6].x)/50);
  }


  for(var i = 2; i < npc.length; i++){
    npc[i].velocityY = npc[i].velocityY + 1;
    npc[i].collide(ground);
  }
  librarian.velocityY = librarian.velocityY + 1;

  console.log(bar.barX);
  console.log(bar.point);
  player[0].collide(ground);
  librarian.collide(ground);
  drawSprites();

  

  dialogues();

  noFill();
  rect(0,0,width,40);

  fill("red");
  text("Grades: " + grades, 50 ,20);
  text("Friends: "+friendNo,730,20);

  //time taken in a round
  time[stage - 1] = time[stage - 1] + 1;
}


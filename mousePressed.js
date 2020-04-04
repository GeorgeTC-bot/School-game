function ctrl(){

    if(keyIsDown(68) && dialogue === false){
      player[0].velocityX += 0.5;
    }
    else if(keyIsDown(65) && dialogue === false){
      player[0].velocityX -= 0.5;
    }
  }
  
  function keyPressed(){
    for(var i = 2; i < npc.length; i++){
      if(keyCode === 70 && player[0].isTouching(npc[i]) && dialogue === false && exit === false){
        dialogue = true;
        if(people === "books"){
          bar.point = Math.round(random(bar.x + bar.size,bar.x + 70)); 
        }
      }
    }
    if(keyCode === 71 && dialogue === true && exit === true){
      framecount = 0;
      dialogue = false;
      exit = false;
      for(var i = 2; i < npc.length; i++){
        if(player[0].isTouching(npc[i])){
          talkTo[i - 2] = true;
        }
      }
    }  
    if(keyCode === 32 && dialogue === true && people === "books"){
        bar.barX += 10;
    }
  }
  
  function Promote(){
    if(stage != 11){
      if(player[1] > 95){
          grades.push("A++");
      }
      else if(player[1] > 90){
          grades.push("A");
      }
      else if(player[1] > 80){
          grades.push("B");
      }
      else if(player[1] > 60){
          grades.push("C");
      }
      else if(player[1] > 50){
          grades.push("D");
      }
      else if(player[1] < 50){
          grades.push("E");
      }
      player[1] = player[1] - 10;
      stage = stage + 1;
    }
    else{
      gamestate = "over";
    }
  
    if(path.friend1 === 1){
      path.friend1 = 2;
      dlog1 = "Hey! Wanna' play outside!?";
    }
    else if( path.friend1 === -1){
      path.friend1 = -2;
      dlog1 = "Hello! Rude kid!!";
    }
  }
  
  function Shop(no){
    if(no = 1){
      path.shopkeeper = 1;
    }
    else if(no = 2){
      path.friend1 = 1;
    }
    else if(no = 3){
      path.friend2 = 1;
    }
    else if(no = 4){
      path.friend3 = 1;
    }
    else if(no = 5){
      path.rival = 1;
    }
  }
  function NoShop(){
    path.shopkeeper = -1;
    
    if(no = 3){
      path.friend2 = -1;
    }
    else if(no = 4){
      path.friend3 = -1;
    }
    else if(no = 5){
      path.rival = -1;
    }
  }
  
  function Friend1(){
    path.friend1 = 1;
    friends[0] = true;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  function Fiend1(){
    path.friend1 = -1;
    friends[0] = false;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  
  function Friend2(){
    path.friend2 = 1;
    friends[1] = true;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  function Fiend2(){
    path.friend2 = -1;
    friends[1] = false;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  
  function Friend3(){
    path.friend3 = 1;
    friends[2] = true;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  function Fiend3(){
    path.friend3 = -1;
    friends[2] = false;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  
  function Rival(){
    path.rival = 1;
    friends[3] = true;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  function NotSoRival(){
    path.rival = -1;
    friends[3] = false;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  
  function FriendtoNay(){
    path.friend1 = 4;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  function Play(){
    path.friend1 = 3;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  
  function StillNoSign(){
    path.friend1 = -3;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
  function YouDidntEvenAsk(){
    path.friend1 = -4;
  
    goodButton.mousePressed();
    badButton.mousePressed();
  }
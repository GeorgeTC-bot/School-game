function dialogues(){
    //Dialogues
  if(dialogue === true){
    dialogueBox.y = height;
    player[0].velocityX = 0;
    push();

    fill("white");
    if(people === "shopkeeper" && talkedTo[0] === false && room[1] === "hallway"){
      text(friendstart[0],100,350);
      exit = true;
    }
    else if(people === "friend1" && talkedTo[1] === false && room[1] === "hallway"){
      text(friendstart[1],100,350);
      exit = true;
    }
    else if(people === "bully" && talkedTo[2] === false && room[1] === "hallway"){
      text(friendstart[2],100,350);
      exit = true;
    }
    else if(people === "friend2" && talkedTo[3] === false && room[1] === "hallway"){
      text(friendstart[3],100,350);
      exit = true;
    }
    else if(people === "friend3" && talkedTo[4] === false && room[1] === "hallway"){
      text(friendstart[4],100,350);
      exit = true;
    }
    else if(people === "rival" && talkedTo[5] === false && room[1] === "hallway"){
      text(friendstart[5],100,350);
      exit = true;
    }
    else if(people === "librarian"){
      text("Do what ever you may like...",100,350);
      text("Just don't make noise",100,370);
      exit = true;
    }
    else if(people === "books"){
      text("Bunch of books...",100,350);

      
    bar.x = player[0].x - 35;
    bar.y = 100;

    bar.barCreate();
      exit = true;
    }


    if(stage != 1){
      if(people === "shopkeeper" && talkedTo[0] === true){
        goodButton.html("(Shop)");
        badButton.html("Hi!! Bye!!");

        

        if(path.shopkeeper === 0){
          text(shopkeeper[0],100,350);

          exit = false;

          goodButton.mousePressed(Shop);
          badButton.mousePressed(NoShop);
        }
        else if(path.shopkeeper === 1){
          text(shopkeeper[1],100,350);

          exit = true;

          goodButton.html("---");
          badButton.html("---");
        }
        else if(path.shopkeeper === -1){
          text(shopkeeper[2],100,350);

          exit = true;

          goodButton.html("---");
          badButton.html("---");
        }
      }
      else if(people === "friend1" && talkedTo[1] === true){
        if(path.friend1 === 0){
          goodButton.html("Yes! With pleasure!!");
          badButton.html("Come back when you are at my power level");

          exit = false;
        }
        else if(path.friend1 === 2){
          goodButton.html("Ok!!");
          badButton.html("Na loser!!");

          exit = false;
        }
        else if(path.friend1 === -2){
          goodButton.html("I didn't mean that...");
          badButton.html("(Stick out your tongue)");

          exit = false;
        }
        if(path.friend1 === 0){
          text(friend1[0],100,350);
          goodButton.mousePressed(Friend1);
          badButton.mousePressed(Fiend1);

          exit = false;
        }
        else if(path.friend1 === 1){
          text(friend1[1],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend1 === -1){
          text(friend1[2],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend1 === 2){
          text(friend1[4],100,350);

          goodButton.mousePressed(Play);
          badButton.mousePressed(FriendtoNay);
        }
        else if(path.friend1 === 3){
          text(friend1[5],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend1 === 4){
          text(friend1[6],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend1 === -2){
          text(friend1[7],100,350);

          goodButton.mousePressed(StillNoSign);
          badButton.mousePressed(YouDidntEvenAsk);
        }
        else if(path.friend1 === -3){
          text(friend1[8],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend1 === -4){
          text(friend1[9],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
      }
      else if(people === "bully" && talkedTo[2] === true){
        text("Hello!",100,350);

        exit = true;
      }
      else if(people === "friend2" && talkedTo[3] === true){
        goodButton.html("Sure!!");
        badButton.html("Go away!! Littl' Cthulu!!");

        if(path.friend2 === 0){
          text(friend2[0],100,350);
          goodButton.mousePressed(Friend2);
          badButton.mousePressed(Fiend2);

          exit = false;
        }
        else if(path.friend2 === 1){
          text(friend2[1],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend2 === -1){
          text(friend2[2],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
      }
      else if(people === "friend3" && talkedTo[4] === true){
        goodButton.html("It looks amazing");
        badButton.html("Disgusting!! Don't even come close to me!!");

        if(path.friend3 === 0){
          text(friend3[0],100,350);
          goodButton.mousePressed(Friend3);
          badButton.mousePressed(Fiend3);

          exit = false;
        }
        else if(path.friend3 === 1){
          text(friend3[1],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.friend3 === -1){
          text(friend3[2],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
      }
      else if(people === "rival" && talkedTo[5] === true){
        goodButton.html("Sure..? I'll watch out..?");
        badButton.html("Not even worth it");

        if(path.rival === 0){
          text(rival[0],100,350);
          goodButton.mousePressed(Rival);
          badButton.mousePressed(NotSoRival);

          exit = false;
        }
        else if(path.rival === 1){
          text(rival[1],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
        else if(path.rival === -1){
          text(rival[2],100,350);
          goodButton.html("---");
          badButton.html("---");

          exit = true;
        }
      }
    }

    pop ();
  }
}
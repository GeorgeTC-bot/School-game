function findPeople(){
    if(player[0].isTouching(npc[2]) && room[1] === "hallway"){
        people = "shopkeeper";
      }
      else if(player[0].isTouching(npc[3]) && room[1] === "hallway"){
        people = "friend1";
      }
      else if(player[0].isTouching(npc[4]) && room[1] === "hallway"){
        people = "bully";
      }
      else if(player[0].isTouching(npc[5]) && room[1] === "hallway"){
        people = "friend2";
      }
      else if(player[0].isTouching(npc[6]) && room[1] === "hallway"){
        people = "friend3";
      }
      else if(player[0].isTouching(npc[7]) && room[1] === "hallway"){
        people = "rival";
      }
      else if(player[0].isTouching(librarian) && room[1] === "library"){
        people = "librarian";
      }
      else if(player[0].isTouching(books) && room[1] === "library"){
        people = "books";
      }
      else{
        people = null;
      }
}
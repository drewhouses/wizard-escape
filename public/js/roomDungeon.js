const inventory = require("./inventory");
var ChText1 = document.querySelector("#choice1");
var ChText2 = document.querySelector("#choice2");
var ChText3 = document.querySelector("#choice3");
var ChText4 = document.querySelector("#choice4");
var nar = document.querySelector("#nar");

let position = 1;
let neutral = 1;
let desk = 2;
let door = 3;
let chest = 4;
let isOpen = false;

//giving items and changeing choice

const choice1 = (event) => {
  if (position == neutral) {
    //go to table
    ChText1.textContent = "Take the hammer.";
    ChText2.style.display = "none";
    ChText3.style.display = "none";
    ChText4.textContent = "Return to main spot.";
    nar.textContent =
      "You walk up to the wooden table and see an arrangement of objects on the wooden table. To the left you see a couple of bones and a jar with orange liquid in it. To the right you see some tools; many are unrecognizable and weirdly shaped. You are able to make out a knife. In the middle of the table you see a glass ball and a piece of paper with something written on it.";
    position = desk;
  }
  if (position == desk) {
    //read paper
  }
  if (position == door) {
    if (inventory.array[0].count === 2) {
      inventory.take("key");
      document.location.replace("/");
    }
  }
  if (position == chest) {
    if (isOpen == false) {
      inventory.take("hammer");
    }
    if (isOpen == true) {
      inventory.give("key");
    }
  }
};

const choice2 = async (event) => {
  if (position == neutral) {
    ChText1.textContent = "Open the door.";
    ChText2.style.display = "none";
    ChText3.style.display = "none";
    ChText4.textContent = "Return to main spot.";
    nar.textContent = "You walk over to the door. It has a keyhole.";
    position = door;
  }
  if (position == desk) {
    inventory.give("hammer");
  }
  if (position == door) {
  }
  if (position == chest) {
    position = neutral;
  }
};

const choice3 = async (event) => {
  if (position == neutral) {
    ChText1.textContent = "Open the door.";
    ChText2.style.display = "none";
    ChText3.style.display = "none";
    ChText4.textContent = "Return to main spot.";
    nar.textContent =
      "You walk up to the chest which looks old and rusted. It is chained shut with a small lock on it.";
    position = chest;
  }
  if (position == desk) {
  }
  if (position == door) {
  }
  if (position == chest) {
  }
};

const choice4 = async (event) => {
  if (position == neutral) {
  }
  if (position == desk) {
        ChText1.textContent = "Go to the table";
        ChText2.textContent = "Go to the door";
        ChText3.textContent = "Go to the chest";
        ChText4.style.display = "none";
    nar.textContent =
      " There is a wooden table in front of you and is a couple feet away from you. You look to your right to see a chest that has a lock on it. You look to your left to see a door that could be an exit.";
    position = neutral;
  }
  if (position == door) {
    ChText4.textContent = "Return to main spot.";
    nar.textContent =
      " There is a wooden table in front of you and is a couple feet away from you. You look to your right to see a chest that has a lock on it. You look to your left to see a door that could be an exit.";
    position = neutral;
  }
  if (position == chest) {
    ChText4.textContent = "Return to main spot.";
    nar.textContent =
      " There is a wooden table in front of you and is a couple feet away from you. You look to your right to see a chest that has a lock on it. You look to your left to see a door that could be an exit.";
    position = neutral;
  }
};

document.querySelector("#choice1").addEventListener("click", choice1);

document.querySelector("#choice2").addEventListener("click", choice2);

document.querySelector("#choice3").addEventListener("click", choice3);

document.querySelector("#choice4").addEventListener("click", choice4);

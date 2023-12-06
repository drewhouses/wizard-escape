//const { inventory } = require("./inventory.js");
import inventory from "./inventory.js";

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
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.textContent = "Return to main spot.";
    nar.textContent =
      "You walk up to the wooden table and see an arrangement of objects on the wooden table. To the left you see a couple of bones and a jar with orange liquid in it. To the right you see some tools; many are unrecognizable and weirdly shaped. You are able to make out a knife. In the middle of the table you see a glass ball and a piece of paper with something written on it.";
    position = desk;
  }
  if (position == desk) {
    inventory.give("hammer");
  }
  if (position == door) {
    if (inventory.array[0].count === 2) {
      inventory.take("key");
      document.location.replace("/");
    }
  }
  if (position == chest) {
    if (isOpen == false) {
      nar.textContent = "The chest is locked.";
    }
    if (isOpen == true) {
      nar.textContent = `Skimming through the lines on the various pages, you are unable to find anything of value.
However, a single torn sheet of parchment catches your eye. It reads: "He who wishes to be free must find the magic keys three".`;
    }
  }
};

const choice2 = async (event) => {
  if (position == neutral) {
    ChText1.textContent = "Open the door.";
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
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
    if (isOpen == true) {
      inventory.give("key");
    }
  }
};

const choice3 = async (event) => {
  if (position == neutral) {
    if (inventory.array[2].count === 1) {
      ChText1.textContent = "Open chest";
      nar.textContent =
        "You walk up to the chest which looks old and rusted. It is chained shut with a small lock on it.";
    }
    if (inventory.array[2].count === 2) {
      ChText1.textContent = "Open chest with the hammer";
    }
    if (isOpen == true) {
      inventory.give("key");
      ChText1.textContent = "Look through stack of papers";
    }
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.textContent = "Return to main spot.";
    position = chest;
  }
};

const choice4 = async (event) => {
  if (position == desk) {
    ChText1.textContent = "Go to the table";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Go to the door";
    ChText2.classList.remove("d-none");
    ChText3.textContent = "Go to the chest";
    ChText3.classList.remove("d-none");
    ChText4.classList.add("d-none");
    nar.textContent =
      " There is a wooden table in front of you and is a couple feet away from you. You look to your right to see a chest that has a lock on it. You look to your left to see a door that could be an exit.";
    position = neutral;
  }
  if (position == door) {
    ChText1.textContent = "Go to the table";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Go to the door";
    ChText2.classList.remove("d-none");
    ChText3.textContent = "Go to the chest";
    ChText3.classList.remove("d-none");
    ChText4.classList.add("d-none");
    nar.textContent =
      " There is a wooden table in front of you and is a couple feet away from you. You look to your right to see a chest that has a lock on it. You look to your left to see a door that could be an exit.";
    position = neutral;
  }
  if (position == chest) {
    ChText1.textContent = "Go to the table";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Go to the door";
    ChText2.classList.remove("d-none");
    ChText3.textContent = "Go to the chest";
    ChText3.classList.remove("d-none");
    ChText4.classList.add("d-none");
    nar.textContent =
      " There is a wooden table in front of you and is a couple feet away from you. You look to your right to see a chest that has a lock on it. You look to your left to see a door that could be an exit.";
    position = neutral;
  }
};

document.querySelector("#choice1").addEventListener("click", choice1);

document.querySelector("#choice2").addEventListener("click", choice2);

document.querySelector("#choice3").addEventListener("click", choice3);

document.querySelector("#choice4").addEventListener("click", choice4);

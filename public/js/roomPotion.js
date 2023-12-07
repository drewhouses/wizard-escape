var ChText1 = document.querySelector("#choice1");
var ChText2 = document.querySelector("#choice2");
var ChText3 = document.querySelector("#choice3");
var ChText4 = document.querySelector("#choice4");
var nar = document.querySelector("#nar");

let position = 1;
let neutral = 1;
let desk = 2;
let door = 3;
let shelve = 4;
let isOpen = false;
let hasDefeat = false;


//giving items and changeing choice

const choice1 = async (event) => {
  if (position == neutral) {

    //losading table
    ChText1.textContent = "Take the hammer.";
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.classList.remove("d-none");
    ChText4.textContent = "Return to main spot.";
    nar.textContent =
      "You walk up to the wooden table and see weird symbols on it. There is some paper sheets spread all over the table";
    position = desk;
  }
  //choice 1 of table
  if (position == desk) {
    //give hammer
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    hashammer = true;
  }
  //choice 1 of door
  if (position == door) {
    if (!haskey) {
      nar.textContent = "The door is locked.";
    }
    if (haskey) {
      document.location.replace("/");
    }
  }
  //choice 1 of chest
  if (position == shelve) {
    if ((hashammer = false && !isOpen)) {
      nar.textContent = "The chest is locked.";
    }
    if (hashammer && !isOpen) {
      nar.textContent =
        "You grasp the hammer tightly and repeatedly smash the chain around the chest, until it yields. Succumbing to the relentless assault. It falls away clattering on the stone floor. Upon opening the chest it contains a mess of written pages and scrawled notes.";
    }
    if (isOpen == true) {
      nar.textContent = `Skimming through the lines on the various pages, you are unable to find anything of value.
However, a single torn sheet of parchment catches your eye. It reads: "He who wishes to be free must find the magic keys three".`;
      ChText1.textContent = "Grab the key";
      ChText2.classList.remove("d-none");
      readPaper = true;
    }
  }
};

const choice2 = async (event) => {
  //loading doorway
  if (position == neutral) {
    ChText1.textContent = "Open the door.";
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.classList.remove("d-none");
    ChText4.textContent = "Return to main spot.";
    nar.textContent = "You walk over to the door. It has a keyhole.";
    position = door;
  }
  if (position == desk) {
  }
  if (position == door) {
  }
  if (position == shelve) {
    if (isOpen == true && readPaper) {
      //give key
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      haskey = true;
    }
  }
};

const choice3 = async (event) => {
  //loading shelves
  if (position == neutral) {
    nar.textContent =
        "You walk up to the shelves and see a large assortment of potions and herbs on the shelves. You see a book that is already open.";

    ChText1.textContent = "Read the page that the book is open to.";
    ChText1.classList.remove("d-none");
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.classList.remove("d-none");
    ChText4.textContent = "Return to main spot.";
    position = chest;
  }
};

const choice4 = async (event) => {
  //loading neutral
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
  if (position == shelve) {
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

const inventory = require("./inventory");
let position = 1;
let neutral = 1;
let desk = 2;
let door = 3;
let chest = 4;

//giving items and changeing choice 

const choice1 = (event) => {
  if (position == neutral) {
    //go to table
    //render table
    position = desk;
  }
  if (position == desk) {
    //read paper
    position = door;
  }
  if (position == door) {
    position = chest;
  }
  if (position == chest) {
    //take hammer
  }
};

const choice2 = async (event) => {
  if (position == neutral) {
    //go to table
    //render table
  }
  if (position == desk) {
    //read paper
  }
  if (position == door) {
  }
  if (position == chest) {
    //take hammer
    position = neutral;
  }
};

const choice3 = async (event) => {
  if (position == neutral) {
    //go to table
    //render table
  }
  if (position == desk) {
    //read paper
  }
  if (position == door) {
  }
  if (position == chest) {
    //take hammer
    position = neutral;
  }
};

const choice4 = async (event) => {
  if (position == neutral) {
    //go to table
    //render table
  }
  if (position == desk) {
    //read paper
  }
  if (position == door) {
  }
  if (position == chest) {
    //take hammer
    position = neutral;
  }
};

document.querySelector("#choice1").addEventListener("click", choice1);

document.querySelector("#choice2").addEventListener("click", choice2);

document.querySelector("#choice3").addEventListener("click", choice3);

document.querySelector("#choice4").addEventListener("click", choice4);

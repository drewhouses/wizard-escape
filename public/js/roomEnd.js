var ChText1 = document.querySelector("#choice1");
var ChText4 = document.querySelector("#choice4");
var nar = document.querySelector("#nar");

let position = 1;
let neutral = 1;
let door = 2;
let isOpen = false;

const choice1 = async (event) => {
  event.preventDefault();
  if (position == neutral) {
    //losading table
    ChText1.textContent = "Go to the door.";

    ChText4.textContent = "Return to main spot.";
    position = door;
  }

  //choice 1 of door
  if (position == door) {
    document.location.replace("/game/ending");
  }
};

const choice4 = async (event) => {
  event.preventDefault();
  //loading neutral
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
};

document.querySelector("#choice1").addEventListener("click", choice1);

document.querySelector("#choice4").addEventListener("click", choice4);

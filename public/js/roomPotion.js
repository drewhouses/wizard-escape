var ChText1 = document.querySelector("#choice1");
var ChText2 = document.querySelector("#choice2");
var ChText3 = document.querySelector("#choice3");
var ChText4 = document.querySelector("#choice4");
var nar = document.querySelector("#nar");

const history = document.querySelector("#action-history");
const inv = document.querySelector("#inv");

let position = 1;
let neutral = 1;
let desk = 2;
let door = 3;
let shelve = 4;
let haskey = false;
let isOpen = false;
let hasRead = false;
let hasScroll = false;
let haskey2 = false;
let hasdrank = false;

//giving items and changeing choice

const choice1 = async (event) => {
  event.preventDefault();

  if (position == neutral) {
    //losading table
    ChText1.textContent = "Drink potion.";
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.classList.remove("d-none");
    ChText4.textContent = "Return to main spot.";
    nar.textContent = `You walk up to the wooden table and see weird symbols on it. There is some paper sheets spread all over the table. You see muliple potions on the table. One of them reads "Gain special key by drinking potion". Will you drink it?`;
    let action = document.createElement("p");
    history.appendChild(action);
    action.textContent = "Walked to the table."; //add to history
    position = desk;
  }
  //choice 1 of table
  if (position == desk) {
    if (hasdrank) {
      nar.textContent =
        "You drink the potion. As soon as you get done with drinking the potion you start to feel sick. You end up vomiting up the special key.";
      let action = document.createElement("p");
      history.appendChild(action);
      action.textContent = "Vomited a key out..."; //add to history
      ChText1.textContent = "Grab the key.";

      if (haskey2) {
        nar.textContent = "You grabbed the key.";
        action.textContent = "Grabbed the key!"; //add to history
        let obtain = document.createElement("img");
        inv.appendChild(obtain);
        obtain.setAttribute("src", "/images/items/key.png"); //add inventory
      }
      haskey2 = true;
    }
    hasdrank = true;
  }
  //choice 1 of door
  if (position == door) {
    if (!hasScroll) {
      nar.textContent = "The door is locked.";
      let action = document.createElement("p");
      history.appendChild(action);
      action.textContent = "Tried opening locked door..."; //add to history
    }
    if (!haskey2 && !haskey) {
      nar.textContent =
        "The door is unlocked, but somewhere in your mind a voice tells you have missed something or multiple things.";
      let action = document.createElement("p");
      history.appendChild(action);
      action.textContent = "There's something that needs to be done still..."; //add to history
    }
    if (haskey && haskey2 && hasScroll) {
      const currentLocation = window.location.href;
      const url = new URL(currentLocation);
      const id = url.searchParams.get("id") || url.pathname.split("/").pop(); //remove this block if not work

      document.location.replace(`/game/escape/${id}`); //remove id and change route back to original
    }
  }
  //choice 1 of chest
  if (position == shelve) {
    if (hasRead) {
      nar.textContent =
        "You start to read the text on the page as you read a special key starts to form the page. As soon has you finish reading the page the key is shines.";
      let action = document.createElement("p");
      history.appendChild(action);
      action.textContent = "A key appeared!"; //add to history
      ChText1.textContent = "Take the key.";
      ChText1.classList.remove("d-none");
      if (haskey && hasRead) {
        nar.textContent = "You grabbed the special key.";
        let action = document.createElement("p");
        history.appendChild(action);
        action.textContent = "Grabbed the key!."; //add to history
        let obtain = document.createElement("img");
        inv.appendChild(obtain);
        obtain.setAttribute("src", "/images/items/key.png"); //add inventory
      }
      haskey = true;
    }
    hasRead = true;
  }
};

const choice2 = async (event) => {
  event.preventDefault();

  //loading doorway
  if (position == neutral) {
    ChText1.textContent = "Open the door.";
    ChText2.classList.add("d-none");
    ChText3.classList.add("d-none");
    ChText4.classList.remove("d-none");
    ChText4.textContent = "Return to main spot.";
    nar.textContent = "You walk over to the door. It has a keyhole.";
    let action = document.createElement("p");
    history.appendChild(action);
    action.textContent = "Walked to the door."; //add to history
    position = door;
  }
  if (position == desk) {
  }
  if (position == door) {
  }
  if (position == shelve) {
    nar.textContent = "You grabbed the scroll.";
    let action = document.createElement("p");
    history.appendChild(action);
    action.textContent = "Grabbed the scroll!"; //add to history
    let obtain = document.createElement("img");
    inv.appendChild(obtain);
    obtain.setAttribute("src", "/images/items/scroll.png"); //add inventory
    hasScroll = true;
  }
};

const choice3 = async (event) => {
  event.preventDefault();

  //loading shelves
  if (position == neutral) {
    nar.textContent =
      "You walk up to the shelves and see a large assortment of potions and herbs on the shelves. You see a book that is already open. You see a scroll sticking out of one of the other pages.";
    let action = document.createElement("p");
    history.appendChild(action);
    action.textContent = "Walked to the shelves."; //add to history
    ChText1.textContent = "Read the page that the book is open to.";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Take the scroll out of book.";
    ChText2.classList.remove("d-none");
    ChText3.classList.add("d-none");
    ChText4.classList.remove("d-none");
    ChText4.textContent = "Return to main spot.";
    position = shelve;
  }
};

const choice4 = async (event) => {
  event.preventDefault();

  //loading neutral
  if (position == desk) {
    ChText1.textContent = "Go to the table";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Go to the door";
    ChText2.classList.remove("d-none");
    ChText3.textContent = "Go to the shelf";
    ChText3.classList.remove("d-none");
    ChText4.classList.add("d-none");
    nar.textContent = ` One side contains bookshelves all the wayt to the ceiling, filled with
    different books of all shapes and sizes. Immediately in front of the shelves
    are two small wooden tables whose surfaces are covered in open tomes. Across
    from small library you see a large table with shelves hanging above it. Upon
    the weathered wooden surface of the table, an array of flasks, an alembic,
    and a mortar and pestle catch the ambient light. Showcasing an assortment of
    colorful liquids. On the shelves above is a rainbow of more vibrant potion
    vials. Each container meticulously labeled with arcane symbols and cryptic
    runes. You stand in between these two sections....`;
    position = neutral;
  }
  if (position == door) {
    ChText1.textContent = "Go to the table";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Go to the door";
    ChText2.classList.remove("d-none");
    ChText3.textContent = "Go to the shelf";
    ChText3.classList.remove("d-none");
    ChText4.classList.add("d-none");
    nar.textContent = ` One side contains bookshelves all the wayt to the ceiling, filled with
    different books of all shapes and sizes. Immediately in front of the shelves
    are two small wooden tables whose surfaces are covered in open tomes. Across
    from small library you see a large table with shelves hanging above it. Upon
    the weathered wooden surface of the table, an array of flasks, an alembic,
    and a mortar and pestle catch the ambient light. Showcasing an assortment of
    colorful liquids. On the shelves above is a rainbow of more vibrant potion
    vials. Each container meticulously labeled with arcane symbols and cryptic
    runes. You stand in between these two sections....`;
    position = neutral;
  }
  if (position == shelve) {
    ChText1.textContent = "Go to the table";
    ChText1.classList.remove("d-none");
    ChText2.textContent = "Go to the door";
    ChText2.classList.remove("d-none");
    ChText3.textContent = "Go to the shelf";
    ChText3.classList.remove("d-none");
    ChText4.classList.add("d-none");
    nar.textContent = ` One side contains bookshelves all the wayt to the ceiling, filled with
    different books of all shapes and sizes. Immediately in front of the shelves
    are two small wooden tables whose surfaces are covered in open tomes. Across
    from small library you see a large table with shelves hanging above it. Upon
    the weathered wooden surface of the table, an array of flasks, an alembic,
    and a mortar and pestle catch the ambient light. Showcasing an assortment of
    colorful liquids. On the shelves above is a rainbow of more vibrant potion
    vials. Each container meticulously labeled with arcane symbols and cryptic
    runes. You stand in between these two sections....`;
    position = neutral;
  }
};

document.querySelector("#choice1").addEventListener("click", choice1);

document.querySelector("#choice2").addEventListener("click", choice2);

document.querySelector("#choice3").addEventListener("click", choice3);

document.querySelector("#choice4").addEventListener("click", choice4);

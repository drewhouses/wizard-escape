class Room {
  constructor(containers, items, playerChoices, photo) {
    this.containers = containers;
    this.items = items;
    this.playerChoices = playerChoices;
    this.photo = photo; // this could maybe be used to store the path for the image and we can call this property when we want to insert the img into the DOM
  }
}

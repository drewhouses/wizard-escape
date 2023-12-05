const createCharacterHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#character-name-field").value.trim();
  const avatar = document.querySelector("input[name='avatar']:checked").value;

  console.log("In character handler");
  console.log(name);
  console.log(avatar);

  if (name && avatar) {
    const response = await fetch("/api/player/", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/game");
      console.log("Character created");
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document
  .querySelector(".start-game-form")
  .addEventListener("submit", createCharacterHandler);

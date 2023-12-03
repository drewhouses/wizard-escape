const createCharacterHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#character-name-field").value.trim();

  console.log("In character handler");
  console.log(name);
  if (name) {
    const response = await fetch("/api/player/", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
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

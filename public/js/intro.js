const handleStartGame = async (event) => {
  event.preventDefault();

  const response = await fetch("/game/dungeon", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    console.log("Game started");
    document.location.replace("/game/dungeon");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".start-btn").addEventListener("click", handleStartGame);

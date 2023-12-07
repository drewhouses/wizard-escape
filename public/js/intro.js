const handleStartGame = async (event) => {
  event.preventDefault();

  const currentLocation = window.location.href;
  const url = new URL(currentLocation);
  const id = url.searchParams.get("id") || url.pathname.split("/").pop(); //remove this block if not work

  const response = await fetch(`/game/dungeon/${id}`, {
    //also remove id
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);

  if (response.ok) {
    console.log("Game started");
    document.location.replace(`/game/dungeon/${id}`); //remove id if not work
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".start-btn").addEventListener("click", handleStartGame);

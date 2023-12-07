const strings = ["Hiiiii!! ^5000"];

function dialogNext() {
  const intro = new Typed("#intro-text", {
    strings: strings,
    typeSpeed: 25,
    loop: true,
  });
}

document.getElementById("next-button").addEventListener("click", dialogNext);

let SWCharacter = [
  {
    name: "Darth Sidius",
    picture: "darth-sidius.webp",
  },

  {
    name: "R2-D2",
    picture: "R2-D2.webp",
  },

  {
    name: "Darth Vader",
    picture: "darth-vader.webp",
  },

  {
    name: "Obi-wan Kenobi",
    picture: "obi-wan.webp",
  },

  {
    name: "Qui-Gon Jinn",
    picture: "Qui-Gon_Jinn.webp",
  },

  {
    name: "Yoda",
    picture: "yoda.webp",
  },
];

let button = document.getElementById("button");
let box = document.getElementById("js-image-box");

button.addEventListener("click", getRandomSW);

function getRandomSW() {
  proba = SWCharacter[Math.floor(Math.random() * SWCharacter.length)];

  box.innerHTML = `
  <img src="./img/${proba.picture}">
  <p>${proba.name}</p>
  `;
}

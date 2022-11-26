let SWCharacter = [
  {
    name: "Darth Sidius",
    picture: "darth-sidius.webp",
    order: "test data",
    species: "test data",
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

//Variable
let button = document.getElementById("button");
let box = document.getElementById("js-image-box");
let gediv = document.querySelectorAll(".gen-button");
let genButton = document.querySelectorAll(".gen-chec");

//Event
button.addEventListener("click", getRandomSW);
genButton[0].addEventListener("click", gender);
genButton[1].addEventListener("click", gender);

//Function
function gender() {
  if (genButton[0].checked === true) {
    gediv[0].classList.toggle("gen-button-margin");
    console.log("vonal");
  }
  if (genButton[1].checked === true) {
    gediv[1].classList.toggle("gen-button-margin");
  }
}

function getRandomSW() {
  randomData = SWCharacter[Math.floor(Math.random() * SWCharacter.length)];
  box.innerHTML = `
  <img src="./img/${randomData.picture}">
  <p>${randomData.name}</p>
  <p>${randomData.order}</p>
  <p>${randomData.species}</p>
  `;
}

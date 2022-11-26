let SWCharacterMale = [
  {
    name: "Darth Sidius",
    picture: "darth-sidius.webp",
    order: "Sith Nagyur",
    species: "Ember",
  },

  {
    name: "R2-D2",
    picture: "R2-D2.webp",
    order: "Astromech Droid",
    species: "Droid",
  },

  {
    name: "Darth Vader",
    picture: "darth-vader.webp",
    order: "Sith Nagyur",
    species: "Ember",
  },

  {
    name: "Obi-wan Kenobi",
    picture: "obi-wan.webp",
    order: "Jedi",
    species: "Ember",
  },

  {
    name: "Qui-Gon Jinn",
    picture: "Qui-Gon_Jinn.webp",
    order: "Jedi",
    species: "Ember",
  },

  {
    name: "Yoda",
    picture: "yoda.webp",
    order: "Jedi",
    species: "Ismeretlen",
  },
];

let SWCharacterFemale = [
  {
    name: "Leia Amidala Skywalker",
    picture: "Leia_Organa.webp",
    order: "Jedi",
    species: "Ember",
  },

  {
    name: "Amilyn Holdo",
    picture: "Holdo-Elle.webp",
    order: "Kapitány",
    species: "Ember",
  },

  {
    name: "Cara Dune",
    picture: "CaraDune.webp",
    order: "Zsoldos",
    species: "Ember",
  },

  {
    name: "Maz Kanata",
    picture: "Maz_Kanata.webp",
    order: "Csempész",
    species: "Ismeretlen humanoid faj",
  },

  {
    name: "Mon Mothma",
    picture: "Mon_Mothma.webp",
    order: "Politikus",
    species: "Ember",
  },

  {
    name: "Jyn Erso",
    picture: "Leia_Organa.webp",
    order: "Lázadó",
    species: "Ember",
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

//Ez a function figyeli nem választást
//TODO Kell egy plusz funkció ami elérhetetlené teszi a másig gombot a választás után
function gender() {
  if (genButton[0].checked === true) {
    gediv[0].classList.toggle("gen-button-margin");
    console.log("vonal");
  }
  if (genButton[1].checked === true) {
    gediv[1].classList.toggle("gen-button-margin");
  }
}

//TODO kell még egy fügvény amely figyeli, hogy megtörtént-e a nem váltás

//Ez a function végzi a Karakter generálást a gender fügvény eredményét figyelembevéve.
function getRandomSW() {
  if (genButton[0].checked === true) {
    randomData =
      SWCharacterFemale[Math.floor(Math.random() * SWCharacterFemale.length)];
    box.innerHTML = `
<img src="./img/Female/${randomData.picture}">
<h3>${randomData.name}</h3>
<p>${randomData.order}</p>
<p>Faj: ${randomData.species}</p>
`;
  } else {
    randomData =
      SWCharacterMale[Math.floor(Math.random() * SWCharacterMale.length)];
    box.innerHTML = `
  <img src="./img/${randomData.picture}">
  <h3>${randomData.name}</h3>
  <p>${randomData.order}</p>
  <p>Faj: ${randomData.species}</p>
  `;
  }
}

let images = [
    "./img/darth-sidius.jpg","./img/R2-D2.jpg", "./img/darth-vader.jpg", "./img/Obi-wan.jpg", "./img/Qui-Gon_Jinn.webp", "./img/yoda.webp"
];

let button = document.getElementById("button");

let imagesLength = images.length; 
let randomNumber = Math.random();
randomNumber= randomNumber*imagesLength;
randomNumber = Math.floor(randomNumber);    
let choosenImage = images[randomNumber];




button.addEventListener("click", random);


function random(){
    character.src = choosenImage;
    return 
}

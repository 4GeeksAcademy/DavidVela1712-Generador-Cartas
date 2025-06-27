import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let simbolos = ["♦","♥", "♠", "♣"];
  let simbRandom = simbolos[randomNum(simbolos.length)];
  let numRandom = randomNum(13)+1;
  let carta;

  switch (numRandom) {
    case 1:
      carta = "A";
      break;
    case 11:
      carta = "J";
      break;
    case 12:
      carta = "Q";
      break;
    case 13:
      carta = "K";
      break;
    default:
      carta = numRandom;
  }

  document.getElementById("p-top").textContent = simbRandom;
  document.getElementById("p-center").textContent = carta;
  document.getElementById("p-bottom").textContent = simbRandom;

  if(simbRandom == "♦" || simbRandom == "♥"){
    document.getElementById("p-top").style.color = "red";
  document.getElementById("p-bottom").style.color = "red";
  }
};

function randomNum(num){
  return Math.floor(Math.random() * num);
}
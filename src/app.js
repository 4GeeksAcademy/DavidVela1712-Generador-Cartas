import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let simbolos = ["♦","♥", "♠", "♣"];
  let simbRandom = simbolos[randomNum(simbolos.length)];
  let numRandom = randomNum(13)+1;

  document.getElementById("p-top").textContent = simbRandom;
  document.getElementById("p-center").textContent = numRandom;
  document.getElementById("p-bottom").textContent = simbRandom;

  if(simbRandom == "♦" || simbRandom == "♥"){
    document.getElementById("p-top").style.color = "red";
  document.getElementById("p-bottom").style.color = "red";
  }
};

function randomNum(num){
  return Math.floor(Math.random() * num);
}
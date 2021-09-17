import generateColor from "randomColor";
import cpfGen from "@lacussoft/cpf-gen";

let h1CPF = document.getElementById("textCPF");
let buttonCPF = document.getElementById("buttonGenCPF");

document.body.style.backgroundColor = generateColor();
h1CPF.innerHTML = cpfGen({ format: true });

function newCPF() {
  h1CPF.innerHTML = cpfGen({ format: true });
}

buttonCPF.addEventListener("click", newCPF);

const cal = document.getElementById("calculator");
const buttons = document.querySelectorAll(".dugme");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", oboji);
  buttons[i].addEventListener("mouseleave", vrati);
  buttons[i].addEventListener("click", prikaz);
}

function oboji() {
  this.style.color = "#62558d";
}
function vrati() {
  this.style.color = "black";
}

const btnClear = document.getElementById("clear");
btnClear.addEventListener("mouseenter", oboji2);
function oboji2() {
  this.style.color = "#924c67";
}
btnClear.addEventListener("mouseleave", vrati);
btnClear.addEventListener("click", reset);

function reset() {
  result.value = "";
}

const result = document.getElementById("resenje");

function prikaz() {
  result.value += this.value;
}

const resenje = document.querySelectorAll("#racun");
for (let i = 0; i < resenje.length; i++) {
  resenje[i].addEventListener("click", izracunaj);
  resenje[i].addEventListener("mouseenter", oboji2);
  resenje[i].addEventListener("mouseleave", vrati);
}

function izracunaj() {
  var x = result.value;
  var y = eval(x);
  result.value = y;
}


var total=0;
const op = document.querySelectorAll(".operator");

for (let i = 0; i > op.length; i++) {
  op[i].addEventListener("click", operation);
}

function operation() {
  if (op == "+") {
    result.value += this.value + this.value;
  }
  else if(op=="-"){
    result.value += this.value - this.value;
  }
  else if(op=="*"){
    result.value += this.value * this.value;
  }
  else {
    result.value += this.value / this.value;
  }
}

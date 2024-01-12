//FOR ONLY 7 colours
/*const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

var colors = ["green","red","orange","blue","purple","violet","black"];

bodyEl.style.background = "pink";

btnEl.addEventListener("click",addColor);

function addColor(){
    console.log("clicked");
    var color = parseInt(Math.random()*colors.length);
    bodyEl.style.background = colors[color];
    count++;
}*/


//FOR RANDOM ANY COLOUR
let button = document.querySelector(".btn");
let hex = document.querySelector(".hex");
// let displayCode = document.getElementById('color-code');
let color;

let randomColor = () => {
  color = '#';
  let hexaDecimal = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color = color + hexaDecimal[Math.floor(Math.random() * 16)]; //FOR GENERATING ANY ONE RANDOM NUMBER random() gives decimal value with range less so it is multiplied by 16 approximate value is taken by floor() 
  } //in the above line I am accessing the index of the string hexDecimal 
  return color;
};

button.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
  hex.innerHTML =`${color}` ; //TO DISPLAY HEX CODE
  // displayCode.innerHTML = color;
});
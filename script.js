const colors = ["green", "red", "blue", "yellow", "purple","orange", "black", "white",];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// eventlistener function targets body, body is property on document object
btn.addEventListener("click", function () {
  // get random number between 0-3; indexes in colors array
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // colors.length = 4; Math.floor rounds DOWN to nearest integer
}

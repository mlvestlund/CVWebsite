/* Easter egg 1: Darkmode-switch */

const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkmode")
})


/* Easter egg 2: Write "coffee" to generate message */
let pressedKeys = '';

window.addEventListener('keyup', (e) => {
  pressedKeys += e.key;
  pressedKeys = pressedKeys.slice(-6)
  if(pressedKeys === "coffee") {
   alert("You've activated the Java(Script) generator! Prepare for a caffeinated adventure!")
  }
  console.log(pressedKeys);
})
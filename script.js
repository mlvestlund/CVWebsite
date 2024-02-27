/* Easter egg 1: Darkmode-switch */
const isDarkModePreferred = localStorage.getItem('darkMode');
if (isDarkModePreferred === 'true') {
  document.body.classList.add('darkmode');
}
const darkModeSwitch = document.getElementById('darkmode-switch');
darkModeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  localStorage.setItem('darkMode', document.body.classList.contains('darkmode'));
  darkModeSwitch.src = document.body.classList.contains('darkmode') ? './Images/profile-pic-blackandwhite.png' : './Images/profile-pic-color.png';
});


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
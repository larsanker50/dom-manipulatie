let name = "Lars Anker"

const h1 = document.getElementById("roep");
const colors = ['red', 'green', 'blue', 'orange', 'yellow'];
const button = document.getElementById('button');

button.addEventListener("click", changeText);

function changeText() {
    h1.innerHTML = name;
    h1.style.color = colors[Math.floor(Math.random() * colors.length)];
}
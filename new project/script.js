const ideas = [
"Build a habit tracker",
"Create a typing speed test",
"Make a password generator",
"Create a simple AI chatbot",
"Build a weather app",
"Make a to-do list with drag and drop",
"Create a random color generator",
"Build a markdown editor",
"Create a quiz app"
];

function generateIdea(){
const random = Math.floor(Math.random() * ideas.length);
document.getElementById("idea").textContent = ideas[random];
}
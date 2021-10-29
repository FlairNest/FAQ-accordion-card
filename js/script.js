let block = document.getElementsByClassName("questionBlock");

for (let i=0; i<block.length; i++) {

block[i].addEventListener("click", function() 
{

this.classList.toggle("active");

let question = this.firstElementChild;
let answer = this.lastElementChild;
let icon = this.children[1];

if (answer.style.display === "block") 
{
answer.style.display = "none";
question.style.fontWeight = 400;
icon.style.transform = "rotate(0deg)";
}

else 
{
answer.style.display = "block";
question.style.fontWeight = 700;
icon.style.transform = "rotate(180deg)";   
}});}
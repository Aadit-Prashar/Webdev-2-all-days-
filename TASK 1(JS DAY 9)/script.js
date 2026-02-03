const task1=document.getElementById("profile");
task1.style.backgroundColor="#f5f5f5"
task1.style.padding="15px"
task1.style.textAlign="center"

const task2=document.getElementsByClassName("para");
for(let i=0;i<task2.length;i++){
    task2[i].style.color="red"
    task2[i].style.fontSize="40px"
}
console.log(task2.length)

const content=document.getElementById("content");
const task3=content.querySelectorAll("p");
for(let i=0;i<task3.length;i++){
    task3[i].style.backgroundColor="cyan";
}
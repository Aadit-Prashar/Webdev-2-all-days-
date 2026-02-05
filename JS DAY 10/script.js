//Create a new element
const newParagraph = document.createElement("p");
newParagraph.textContent="This is a dynamically new paragraph";
console.log(newParagraph);

//Append the new element to the container
const container=document.getElementById("container");
container.appendChild(newParagraph);

//remove Element
//remove the first paragraph of container
document.querySelector('#container p').remove()


const image=document.createElement("img");
image.setAttribute("src","https://mycareersview.com/page-details.php?id=3260&datatype=C");
image.setAttribute("alt","K.R Mangalam");
const gallery=document.getElementById("gallery");
gallery.appendChild(image);

//Date Method
const clock = document.getElementById("digi-clock");
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let time = "am";
  if (hour > 12) {
    hour = hour - 12;
    time = "pm";
  }
  clock.textContent = `${hour}: ${min}: ${sec} ${time}`;
});
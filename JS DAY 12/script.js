// const textInput = document.getElementById("textInput");
// textInput.addEventListener("change", (event) => {

// })
    // here event is targeting the entire 
    // element objet node snd event.target is
    // target

const form=document.getElementById("formInput");
const textInput=document.getElementById("myInput");
const courseInput=document.getElementById("course");
const output=document.getElementById("output");

form.addEventlistener("submit",(event)=>{
    event.preventDefault();

    const name=textInput.value
    const course=courseInput.value
    console.log(event);

    output.innerText=name+" "+course
})
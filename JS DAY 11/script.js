// function handleClick(){
//     const btn=document.getElementbyId("btn");
//     btn.textContent="Clicked";
// }

// function handleClick(){
//     const head1 =document.querySelector("h1");
//     head1.style.color="tomato"
//     head1.texContent="New heading"
// }

// function handleClick(){
//     const spanEle=document.createElement("span").textContent="This is span element";

//     const image=document.createElement("img");
//     image.setAttribute("src","image.png");
//     image.setAttribute("alt","K.R Mangalam");
//     document.getElementById("content").append(spanEle)
//     const gallery=document.getElementById("content");
// gallery.append(image);
// }

document.getElementById("btn").addEventListener("click",()=>{
    const spanEle=document.createElement("span").textContent="This is span element";
    const image=document.createElement("img");
    image.setAttribute("src","image.png");
    image.setAttribute("alt","K.R Mangalam");
    document.getElementById("content").append(spanEle);
    document.getElementById("content").append(image);
})
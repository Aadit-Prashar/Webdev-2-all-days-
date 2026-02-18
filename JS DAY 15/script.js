// fetch()
// .then(resp=>{
//     console.log(resp);
//     if (resp.ok){
//         return resp.json();
//     }    else{
//         throw new Error("Network response was not ok");
//     }
// })

async function getData(url){
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
}
getData('https://jsonplaceholder.typicode.com/todos/1')
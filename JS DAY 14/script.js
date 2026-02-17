// // Promise creation
// let myPromise=new Promise((res,rej)=>{
//     let data = "This is data";
//     if(data){
//         res(data);
//     } else{
//         rej("error");
//     }
// });

// // myPromise
// //     .then((data)=>{
// //     console.log(data);
// // },(error)=>{
// //     console.log(error);
// // });

// myPromise
//     .then((data)=>{
//     console.log(data);
//     })
//     .catch((err)=>{
//     console.log(err);
//     });

// console.log(myPromise);

let resp=fetch('https://jsonplaceholder.typicode.com/todos/1');
resp.then((robj)=>{
    // console.log(robj);
    robj.json().then((data)=>{
        console.log(data);
    });
});
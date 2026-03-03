// let pro = new Promise((resolve,reject)=>{
//     let a=10;
//     if(a>5){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// .then(()=>console.log("promise resolved"))
// .catch((err)=>console.error(err,"promise rejected"));


// when promise is resolved it goes to .then() method if not then it goes to .catch() method

function pro(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
            res();
        },1000)
    })
}
pro(1)
.then(()=>pro(2))
.then(()=>pro(3))
.then(()=>pro(4))
.then(()=>pro(5))
.catch(()=>console.log("error"))



function pro1(num1){
    return newPromise((res,rej)=>{
        setTimeout(()=>{
            console.log(num1);
            res();
        },1000)
    })
}

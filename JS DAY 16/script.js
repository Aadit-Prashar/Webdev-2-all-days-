console.log("First line")
setTimeout(()=>{
    console.log("Inside Timeout")
},0)

const p=new Promise((resolve,reject)=>{
    resolve()
})
p.then(()=>{
    console.log("Inside Promise")
})

const p2=new Promise((resolve,reject)=>{
    resolve()
})
p2.then(()=>{
    console.log("Inside 2 Promise")
})

console.log("Last line")
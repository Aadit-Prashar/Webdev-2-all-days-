const student={
    fullname:"Aadit Prashar",
    age:18,
    cgpa:8.9,
    ispass:true,
};
callback=test
function sample(callback){
    console.log("sample")
    callback()
}
function test(){
    console.log("test")
}
sample(test)

for(let i=0;i<=10;i++){
    console.log(i)
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=1;j++){
        console.log(j);
    }
    console.log(i);
}
let numbers=[7,16,35,29,11,0,15,33,17,25];
let doubled=numbers.filter((ak)=>{
    if (ak>=16){
        console.log(ak,"pass")
    }
    else{
        console.log(ak,"fail")
    }
});


const product={
    title:"Ball pen",
    rating:4,
    offer: 5,
    price:270,
}
console.log(product)

const account={
    name: "Shraadha Khapra",
    posts:195,
    followers:"569K",
    following:"4",
}

let age=12;
let result=age>18 ? "adult":"not adult";
console.log(result)
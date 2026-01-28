let user={
    Name:"Aadit Prashar",
    address:"gurugram",
    mobileno:"1234567890",
    favcolor:["black","white"],
    demo:function(){
        return "demo";
    }
}
// String Literals
console.log(`My name is ${user.Name}. My fav color is ${user.favcolor[1]}.`)
//
console.log(user.Name,user.address,user.favcolor[1],user.demo());

//Freeze
const car1={
    make:"Mahindra",
    model:"Thar"
};

car1.color="Black";
console.log(car1);

// but
const car2={
    make:"Mahindra",
    model:"Thar"
};

Object.freeze(car2);

car2.color="White";
console.log(car2);
let numbers=[1,2,3,4,5]
let hasEven=numbers.every(x=>x%2===0);
console.log(hasEven)


let fruits1=["apple","banana"];
let fruits2=["cherry","orange"];
console.log([...fruits1,...fruits2]);


//Ternary Operator
//SYNTAX: condition ? True : False
let age=18;
let canvote= age>=18?"You can vote":"You cant vote";
console.log(canvote)

//Find if even or not
let num=13;
let check=num%2==0 ? "Even number" : "Odd number";
console.log(check) 

//Find out if year is leap or not
let year=1992;
let leap= year%4==0 && year%100!=0 || year%400==0 ? "Leap year" : "Non leap year";
console.log(leap)

// First class function
function sample(){
    console.log("Sample")
    return function demo(){
        console.log("demo")
        return function test(){
            console.log("Test")
        }
    }
}
//sample()()()
var value=sample()
let valueTwo=value()
valueTwo()
//Q1.Take aan array and reverse using push and pop.
let array=[1,2,3,4,5]
let reverse=[]
while(array.length>0){
    x=array.pop()
    reverse.push(x)
}
console.log(reverse);


//Remove all negative number from array uing push,pop.
let array2=[-5,-7,12,-6,-13,15,2]
let array3=[]
while(array2.length>0){
    y=array2.shift()
    if(y>0){
        array3.push(y)
    }
}
console.log(array3)

//Check an array is pallindrome or not
let array4=[1,2,1]
let original=[]
let reverse2=[]

for(let i=0;i<array4.length;i++){
    original.push(array4[i])
}
while(array4.length>0){
    reverse2.push(array4.pop())
}
for(let i=0;i<original.length;i++){
    if(original[i]!==reverse2[i]){
        console.log("not a pallindrome number");
    }
    else{
        console.log("pallindrome number")
    }
}
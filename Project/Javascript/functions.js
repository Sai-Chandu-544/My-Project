// functions.
// Block of code that performs specific task,can be invoked whenever needed.

// function functionName(parameter1,parameter2..){
// do some work
// }
// function call():myfunction(argument1,argument2..)
// parameters are local variables means block scope of function.

function myfunction(){
    console.log("Hi");
    console.log("Learning Javascript");
}
// calling function.
myfunction();

function sum(a,b){
    s=a+b;
    return s;
}
let result=sum(2,3);
console.log(result);

// Arrow functions.

let product=(a,b)=>{
    product=a*b;
    return product;

};
let result1=product(2,4);
console.log(result1);

// forEach loop.
// it is a higher order function which uses other function as parameter and returns other function as value.
// arr.forEach(callbackFunction)
// A call back is a function passed as an argument to another function.
// arr.forEach(val,index,arr)=>{
    // console.log(val)
    // }

let array=[1,2,3,4,5];
array.forEach(function printval(val){
    console.log(val);
})

// or
let arr=[5,6,7,8,9];
arr.forEach((val)=>{
    console.log(val);
})




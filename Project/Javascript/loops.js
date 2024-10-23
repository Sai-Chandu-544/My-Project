// Loops are used to execute a peice of code again and again.
// 1.for loop.
for(i=1;i<=5;i++){
    console.log("Hi")
}
let sum=0;
for(i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);
console.log("Loop has ended");

// // while loop.
let a=1;
while(a<=5){
    console.log(a);
    a++;

}

// do while loop.
// do while loop executes atleast once in its process.semicolon should present at last of while condition in do while loop.
let b=10;
do{
    console.log("Hi");
    i++;

}while(b<=5);


// for of loop.
// This loop is used mainly in strings and arrays.
let str="Hello";
for(let i of str){
    console.log(i);
}

// for in loop.
//  This loop is used mainly in objects for printing keys and arrays.

let student={
    name:"Ravi",
    age:20,
    marks:95,
    percentage:95
};
for(let i in student){
    console.log("key=",i,"value=",student[i]);
}

// Practice Question.
// print even numbers from 0 to 100.
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("Even Numbers");

// practice Question.
// create a game where you start with random game number.Ask the user to keep guessing the game number until the 
// user enters the correct value.
let value=25;
let num=prompt("Enter any number");
while(num!=value){
    console.log("Guess again");
    num=prompt("Enter any number");
}
console.log("Congragulations You Entered Correct number");

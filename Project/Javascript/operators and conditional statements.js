// operators.
// 1.Arthmetic operators.
let a=2;
let b=3;
let c=5;
let d=8;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a+b);

// unary operator.
console.log(++a); // pre increment prints at same line with updated value.

// or a=a+1;  post increment prints original value and then incremented value.
console.log(b++);
console.log(b);

// This will be happen to decrement also.
console.log(c++);
console.log(c);


// Assignment operators.
// =,+=,-+,*=,%=,**=.

// comparison operators.
// 1.Equal to(==)
// 2.not Equal to(!=)
// 3.Equal to & type(===)
// 4.not Equal to & type(!==)
// 5.greaterthan(>)
// 6.lessthan(<)
// 7.greaterthan equalto(>=)
// 8.lessthan equalto(<=)

// Logical operator.
// 1.Logical AND(&&)
console.log(4 && 5); //Both are True(non-zeros) returns second value,because two values should be value  "True".It check for second value.
// 2.Logical OR(||)
console.log(4 || 5); //Both are True(non-zeros) returns first value,because any one is value is "True".It does not check for second value
// 3.Logical NOT(!)

// conditional statements.
// 1.if else statement.
age=15;
if(age>=18){
    console.log("Eligible for vote");
}
else{
    console.log("Not Eligible for vote");
}

let num=prompt("Enter a number");
if(num%5){
    console.log("Number is Divisible by 5");
}
else{
   console.log("Number is Divisible by 5");
}







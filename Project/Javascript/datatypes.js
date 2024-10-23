// There are 7 primitive datatypes.
// 1.Number,2.String,3.Boolean,4.Undefined,5.Null,6.BigInt,7.Symbol.
let age=20;
console.log(typeof age);
let name="Tony Stark";
console.log(typeof name);
let value=true;
console.log(typeof value);
let x;
console.log(typeof x);
let a=null;
console.log(typeof a);
let b=BigInt("123");
console.log(b);
let c=Symbol("Hello!");
console.log(typeof c);

// Non-primitive datatypes.
// 1.objects:Object is a collection of different variables or values stored in the form of "Keys" and "Values".
// const name="Ravi";
// name="Ram";   Here throws an error because directly updating the variable.

const student={
    name:"Rahul Kumar",
    age:20,
    cgpa:8.5,
    pass_status:true
}
console.log(typeof student);
console.log(student["age"]);
// or
console.log(student.age);

// Here doesnot show an error because, updating the "properties".
student["age"]+=1;
student["name"]="Rahul Sharma";
console.log(student["age"]);
console.log(student["name"]);


// Here shows an error because,We can modify the properties,but we cannot assign a new object to the student variable.
// student={
//     name:"Ram",
//     age:25,
//     cgpa:8.5,
//     pass_status:true
// }

// Question

const product={
    image:"pen",
    color:"black",
    rating:4,
    price:270,
    discount:"5%"
}
console.log(product);
console.log(typeof product);

// Strings: Strings concatinate with numbers and result will be in "String" format.
a="123";
b=1;
console.log(a+b);
console.log(typeof a+b);


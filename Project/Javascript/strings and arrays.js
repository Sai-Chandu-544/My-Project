// string is a sequence of characters used to represent a text.
// strings are immutable.
// properties.
// 1.str.length.
// 2.string indices=str[0],str[1]
// 3.string Interpolation=To create strings by doing substitution of placeholders
    //    'string text ${expression} string text'.
// 4.spaces=\n:next line.
        //  \t:tab space.

// string methods().
// 1.str.toUpperCase()
let string="hi";
// string.toUpperCase()=This is not allowed in JS, it requires new variable.
let new_string=string.toUpperCase();
console.log(new_string);
// 2.str.toLowerCase()
// 3.str.trim:Removes whitespaces.
// 4.str.slice(start,end):Returns part of string.
// 5.str1.concat(str2):joins str2 with str1.
// 6.str.replace(searchval,newval)

// practice Question.
// prompt from user fullname and generate "@fullname13".

// let username=prompt("Enter Your Full Name");
// let size=username.length;
// let result="@"+username+size;
// console.log(result);


// Arrays.
// Collection of items.In JS type of array is an "object".
// arrays are mutable.
// 1.push():add to end.
// 2.pop():delete from end and return.
// 3.toString():converts array to string.
// 4.cocat():joins multiple arrays & returns result.
// 5.unshift():adds to start.
// 6.shift():delete from start and return.
// 7.slice():returns a peice of the array.
        //   slice(startidx,endidx)
// 8.splice():change original array(add,remove,replace)
            // splice(startidx,delcount,newElement)
let Heros=["Iron Man", "Captain America", "Hulk", "Thor"];
// console.log(Heros);
// console.log(typeof Heros);
for(i=0;i<Heros.length;i++){    //iterates on indexes.
    console.log(Heros[i]);
}

for(let element of Heros){      //iterates on values.
    console.log(element);
}

// Practice Question.
// Average of marks of students
let array=[85,97,44,37,76,60];
let sum=0;
for(i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log(sum);
let average=sum/array.length;
console.log(average);


// Practice Question.
// Applay 10% off for each item in Array.
let items=[250,645,300,900,50];
for(i=0;i<items.length;i++){
    console.log(`value before offer ${items[i]}`);
     let result=items[i]*10/100;
    items[i]=items[i]-result;
    console.log(`items after offer ${items[i]}`);
}

// practice Question.
// Create an array to store companies.
// Remove the first company.
// Remove Uber and add Ola in its place
// Add Amazon at end.

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let result=companies.shift("Bloomberg");
console.log(companies);
let final=companies.splice(1,1,"Ola");
console.log(companies);
let final_result=companies.push("Amazon");
console.log(companies);




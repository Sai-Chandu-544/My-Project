// Query Selector(Advanced Method for Accessing DOM).
// document.querySelector(#id/.class/tag);

let first_tag=document.querySelector("div"); //returns first element
console.dir(first_tag);

let All_tags=document.querySelectorAll("div"); //returns All similar Nodes or Elements.
console.dir(All_tags);

// Properties.
// TagName:returns tag for element nodes.
// innertext:returns the text content of the element and all its children.
// innerHTML:returns plain text or HTML contents in the element.
// textcontent:returns textual content even for hidden elements.
// classList.add: Not to override the Existing Class Name.
// classList.remove(): To Remove classlist.


// Practice Question.

let h2=document.querySelector("h2");
h2.innerText=h2.innerText + " From Chandu!";
console.log(h2);


// Practice Question.
let div=document.querySelectorAll(".box");
count=1;
for(i of div){
    i.innerText=`Box ${count}`;
    count+=1;
}
console.dir(div);



// getAttribute("attribute") //To get attribute Value.
let value=document.querySelector("div");
console.log(value.getAttribute("class"));  

// setAttribute(attribute,value) //To set attribute value.
let set=document.querySelector("div");
console.log(set.setAttribute("id","abc"));

// style
// node.style
let style=document.querySelector("h1");
style.style.backgroundColor="green";
console.log(style);


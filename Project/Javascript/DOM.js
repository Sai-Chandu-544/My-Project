// Window Object.
// The window object represents an open window in a browser. It is browsers object(not javascripts)
// &is automatically created by browser.
// it is global object with lots of properties & methods.
// alert,prompt+,console.log etc are part of window object.
// window.alert("Hi");
// window.console.log("hi");
// No need to mention as "window" before using methods,because it is automatically known by the browser.

// DOM(Document Object Model).
// When a web page is loaded,the browser creates a Document Object model(DOM) of web page.
// Every tag in HTML which is attached to the JS file can be acessed in JS file.
// Automatically Every line of code(tags) in HTML goes to the JSfile and converts as an "Objects"(nodes)
// (div,h1,img,etc).
// Nodes are Organized in a Tree like Structure or Hierarchical Structure.
// This object is called as "Document" and this Document is available under window object and can be accessed.
// Finally,window consits of "document" which is model to represent the HTML,it is called DOM.


// console.dir(document.body); //to access body of HTML(properties and methods)
// console.log(document.body); //to print tags.

console.dir(document.body.childNodes[0]);
document.body.style.background="green"; //Dynamic manipulation.
// DOM is used for Dynamic manipulation.

// DOM Manipulation.
// document.getElementById("myid")
let heading=document.getElementById("header");
// console.log(heading); //prints tags
console.dir(heading); //prints properties


//  document.getElementsBymyClassName("myclass")
let container=document.getElementsByClassName("container");
// console.log(container);
console.dir(container);
//  document.getElementsByTagName("tagName")
let tag=document.getElementsByTagName("button");
console.dir(tag);
// console.dir(window);













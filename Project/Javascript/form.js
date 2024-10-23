let form=document.getElementById("form");
let names=document.querySelectorAll(".name");
let name_error=document.querySelectorAll(".name_error");
let email=document.getElementById("email");
let email_error=document.getElementById("email_error");
let phone=document.querySelector("#number");
let phone_error=document.querySelector("#phone_error");
let password=document.getElementById("password");
let password_error=document.getElementById("password_error");
let resume=document.getElementById("file");
let resume_error=document.getElementById("resume_error");
form.addEventListener('submit',(e)=>{
for(let i=0; i<names.length;i++){
    if(names[i].value=="" || names[i].value==null){
        e.preventDefault();
        name_error[i].innerHTML="Name is Required!";
        names[i].classList.add("border_error");  //css added dynamycally without mentioning in HTML.

    }else{
        name_error[i].innerHTML="";
        names[i].classList.remove("border_error");

    }
}
if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) || email.value=="" || email.value==null  ){
    e.preventDefault();
    email_error.innerHTML="Invalid Email!";
    email.classList.add("border_error");

}else{
    email_error.innerHTML="";
    email.classList.remove("border_error");

}
if(phone.value=="" || phone.value==null){
    e.preventDefault();
    phone_error.innerHTML="phone Number is Required!";
    phone.classList.add("border_error");


}
else if(phone.value.length!=10){
    e.preventDefault();
    phone_error.innerHTML="phone Number is Required with Only 10 digits!";
    phone.classList.add("border_error");

}else{
    phone_error.innerHTML="";
    phone.classList.remove("border_error");

}

if(password.value=="" || password.value==null){
    e.preventDefault();
    password_error.innerHTML="password Number is Required!";
    password.classList.add("border_error");

}
if(password.value.length<=5){
    e.preventDefault();
    password_error.innerHTML="Minimum 6 Characters Required for Password!";
    password.classList.add("border_error");

}else{
    password_error.innerHTML="";
    password.classList.remove("border_error");

    
}
if(resume.value==""){
    e.preventDefault();
    resume_error.innerHTML="This field is Required!";
    

}else{
    resume_error.innerHTML="";

    
}
})



// let number=document.querySelector("#number");
// let password=document.querySelector("#password");
// let radio=document.querySelector("#radio");
// let file=document.querySelector("#file");
// let btn=document.querySelector("#button");


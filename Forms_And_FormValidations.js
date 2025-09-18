
//4:30:25 time stamp

// Form validations
// name anedi ikkada type text avtadi, so dani yokka length batti custom validation messages vachela cheyachu

let uname = document.querySelector("#name");
let unameRegex = /^[a-zA-Z0-9_]{3,20}$/
let form = document.querySelector("form");

// email validation using regex
// let regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// ikkada [a-zA-Z0-9._%+-] idi user name part,
// indulo small and capital Alphabets tho patu dot, 
// underscore, percentage, plus and minus mathrame allowed untadi

// +@[a-zA-Z0-9.-], ee next part lo domain name vastadi, ikkada kuda small and capital letter alphabets tho patu dot, minus varake allowed

//\.[a-zA-Z]{2,}$, ikkada \ ni use chesi dot(.) ane escape character ni consider ayyelaga chustam, next small and capital alphabets ni allow chestu, minimum 2 characters unde laga chustam


let email = document.querySelector("#email")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(uname.value.length < 3){
        document.querySelector(".hide").style.display="initial";
    }
    else{
        document.querySelector(".hide").style.display="none";
    }
    let regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    let isEmailValid = regex.test(email);
    console.log(isEmailValid);
    
})
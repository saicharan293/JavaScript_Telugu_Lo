
//4:30:25 time stamp

// Form validations
// name anedi ikkada type text avtadi, so dani yokka length batti custom validation messages vachela cheyachu

let uname = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(uname.value.length < 3){
        document.querySelector(".hide").style.display="initial";
    }
    else{
        document.querySelector(".hide").style.display="none";
    }
})
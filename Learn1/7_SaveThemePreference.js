

let toggle = document.querySelector("#toggleTheme");

let body = document.body;

body.classList.add(localStorage.getItem("theme"))

toggle.addEventListener("click",()=>{
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme","light");
    }else{
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
})
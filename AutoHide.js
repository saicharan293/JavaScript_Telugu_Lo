// 5:15:05 time stamp
let msg = document.querySelector(".msg");
let timer = document.querySelector("#timer");
let count = timer.textContent;
let msgInterval = setInterval(()=>{
    count--
    if(count>0){
        timer.textContent=count;
    }else{
        clearInterval(msgInterval);
        msg.style.display="none";
    }
    
}, 1000);




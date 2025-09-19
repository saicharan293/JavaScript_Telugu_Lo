
let counter = 0;
let progressbar = document.querySelector("#progressFill");
let statusText = document.querySelector("#statusText");
let barInterval = setInterval(() => {
    if(counter<100){
        counter++;
        progressbar.style.setProperty("--progress", counter);
        statusText.innerHTML = `<span>${counter}</span>% Downloading...`;
    }
    else{
        clearInterval(barInterval);
        statusText.textContent = "Completed!"
    }
}, 30); 
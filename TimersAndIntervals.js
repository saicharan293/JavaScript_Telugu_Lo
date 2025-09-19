// 5:08:49 time stamp


// setTimeout ante, oka certain period of time tarvata, function call avvatam

// let tm=setTimeout(() => {
//     console.log("After 5 seconds");
// }, 5000);


// set chesina setTimeout() ni teeseyali ante, 
// aa setTimeout() ni oka variable ki assign chesi, 
// aa variable ni clearTimeout(--variable-name) lo assign cheyali
// clearTimeout(tm);


//-----------------------------------------------------------------
// setInterval ante, oka function anedi malli malli call avtu,
// prathi function call ayyaka konchem time gap vachaka malli ade function call aitadi, 
// ee process continuous ga jarugutu untadi

//Ex: oka school lo classes jarugutunnay anukondi,
// classes madyalo 10 minutes break untadi, malli class start aitadi

// let SI=setInterval(() => {
//     console.log("For Every 2 seconds");
// }, 2000);

// set chesina Interval ni remove cheyali ante, 
// aa setInterval() ni oka variable ki assign chesi, 
// aa variable ni clearInterval(--variable-name) lo assign cheyali

// clearInterval(SI);

// Counter from 10 to 0
// first count ni positive check cheyali, positive aithe value ni decrement cheyali, 
// negative value vachindi ante interval ni clear cheseyali
let count = 10;
let SI = setInterval(()=>{
    console.log(count);
    if(count > 1) count--;
    else clearInterval(SI);
}, 1000);


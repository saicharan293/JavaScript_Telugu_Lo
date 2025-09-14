//2:23:22 time stamp

//Browser lo em movement chesina Event anedi raise avuddi, ikkada Event ante, present page situation
//change avuddi
//Ila change avvali ante addEventListener ane property ni use chestamu,
//addEventListener lo first di "Action" ('click', 'dblclick','mousemv'), second di function

// let h1 = document.querySelector("h1");
// h1.addEventListener("click", ()=>{
//     h1.style.color="red";
// })

//Process
//1. First, tag ni select cheyali
//Ex: paina example lo h1 tag ni let ki assign chesamu
//2. andulo ippudu changes cheyali, ikkada change ante, action to reaction lantidi, ante em action cheste, em reaction kavali ani decide cheyatam lantidi
//Ex: h1 paina click "Action" chesaka, "Reaction" anedi color maripovatam

// dblclick
// let h1 = document.querySelector("h1");
// h1.addEventListener("dblclick",()=> h1.style.color="yellow");

//removeEventListener: already unna event listener ni remove cheyali ante ee method ni use cheyali
// let h1 = document.querySelector("h1");
// console.log(h1);

// function colorChange(){
//     h1.style.color="yellow";
// }
// h1.addEventListener("dblclick", colorChange() );
// h1.removeEventListener("dblclick", colorChange );
//ikkada function call cheyakudadu, meaning function pakkana brackets teeyali ani, endukante brackets unte dblclick event call cheyakundane
//function start aipoddi

//change
// let inp=document.querySelector("input");
// inp.addEventListener("input", function(){
//     console.log("type chesavv ga macha");
// })
// ikkada eppudaithe input lo type cheyatam or data enter cheyatam start chestamo, input event call aitadi
// so, prathi okka button enter ki, input event activate ayyi, function call jarugutadi, 
// anduke console lo unna data log aitadi

// let inp=document.querySelector("input");
// inp.addEventListener("input", function(data){
//     console.log(data.data);
// })

// ikkada data ane object lo input lo enter chesina text anedi console output lo kanipistadi, adi dynamic ga display aitadi

//iF, data anedi null aithe?
// appudu, first manam data !== null ane condition check chesi, print chestam, 
// ikkada okavela data anedi null aithe
// aa condition ni satisfy cheyadu, kabatte asalu emi print avvadu
// let inp=document.querySelector("input");
// inp.addEventListener("input", function(data){
//     if(data.data!==null){
//         console.log(data.data);
//     }
// })


//Change , event handler
//

// let select = document.querySelector("select");
// let h1 = document.querySelector("h1");

// ikkada dropdown lo unna value in heading lo ki assign cheyali ante
// first data ni log cheyali, adi list of objects ni chupistadi, andulo, target object select chesukunte,
// andulo value ane key untadi, andulo manam dropdown lo ye value ni select chesamo, adi store aitadi

// ikkada string ni js lo Capitalize cheyali ante,
// 1. first letter of that value teesukoni (.charAt(0)), daniki .toUpperCase() method ni add chesate first letter okate Capital letter vastadi
// 2. vachina capital letter ki aa string lo next part ni concat cheste, result is the answer

// or css lo text-transform: capitalize ni apply cheste, string anedi direct ga capitalize aipotundi, js tho pani undadu

// select.addEventListener("change",(data)=>{
//     h1.textContent=`${data.target.value.charAt(0).toUpperCase()+data.target.value.slice(1)} is selected`;
// })


let h1 = document.querySelector("h1");

window.addEventListener("keydown",(det)=>{
    console.log(det);
    if(det.key === " "){
        h1.textContent="SPC";
    }else{
        h1.textContent=det.key;
    }
})
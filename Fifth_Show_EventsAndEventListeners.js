//3:30:30 time stamp

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


// let h1 = document.querySelector("h1");

// window.addEventListener("keydown",(det)=>{
//     console.log(det);
//     if(det.key === " "){
//         h1.textContent="SPC";
//     }else{
//         h1.textContent=det.key;
//     }
// })


//--------------------
// so general file anedi chala normal ga untadi,
// danni customized file laga cheyali ante
// 1. oka file input ni teesukoni, danni hide cheyali
// 2. custom file element ni create cheyali
// 3. eppudu aithe custom file ni click chestamo, real file input "click" add eventlister tho activate cheyali
// 4. appudu real file activate ayyi, file choose chesukune option istadi
// 5. ippudu oka file choose chesukunnaka, aa file name ni custom element place lo ravali ante, 
// 6. real file ki "change" add eventlistener ni call cheyali. 
// 7. Data lo target object lo files ane array of keys and values dorukuntundi, aa list lo first key anedi file name ni store chesukuntadi. 
// 8. Aa name ni custom element ki icheste set

// let fileUpload = document.querySelector("#btn");
// let realUpload = document.querySelector("#fileInp");
// fileUpload.addEventListener("click",()=>{
//     realUpload.click();
// })

// realUpload.addEventListener("change", (det)=>{
//    let isFile = det.target.files[0];
//    if(isFile){
//     fileUpload.textContent=isFile.name;
//    } 
// })


//---------------------

// ikkada manam form handling nerchukuntunnamu
// eppudu aithe dynamic data tho form submit chestamo 
// appudu form lo unna data, card lo reflect ayyelaga chudali ante first page refresh/reload ni aapali
// adi preventDefault() function tho stop cheyachu
// next andulo elements ni create chesi, main div tag ku append chesaka, all input elements except submit button lo text ni empty ga cheste, form submission aipoddi


// let form = document.querySelector("form");
// let allInps = document.querySelectorAll("input");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     let cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");

//     let profileDiv = document.createElement("div");
//     profileDiv.classList.add("profile");

//     let imgEle = document.createElement("img");
//     imgEle.setAttribute("src", allInps[0].value);

//     let h3Ele = document.createElement("h3");
//     h3Ele.textContent = allInps[1].value;
//     let h5Ele = document.createElement("h5");
//     h5Ele.textContent = allInps[2].value;
//     let pEle = document.createElement("p");
//     pEle.textContent = allInps[3].value;


//     profileDiv.appendChild(imgEle);
//     cardDiv.appendChild(profileDiv);
//     cardDiv.appendChild(h3Ele);
//     cardDiv.appendChild(h5Ele);
//     cardDiv.appendChild(pEle);
    
//     document.querySelector("#main").append(cardDiv);

//     allInps.forEach((e)=>{
//         if(e.type!=="submit"){
//             e.value=""
//         }
//     })
// })


//---------------
// mouseover ante, mouse (cursor) ni manam oka element paina hover cheyaga jarige event

// mouseout ante, already oka element paina unna mouse (cursor) ni bayataku vache time lo  jarige action/event
// let container = document.querySelector("#container");

// container.addEventListener("mouseover",()=>{
//     container.style.backgroundColor = "yellow";
// })

// container.addEventListener("mouseout", ()=>{
//     container.style.backgroundColor = "red"
// })


// mousemove ante, existing mouse movement batti, event/action anedi activate aitadi
// let container = document.querySelector("#container");
// window.addEventListener("mousemove",(event)=>{

//     container.style.top = event.clientY+"px";
//     container.style.left = event.clientX+"px";
 
// })


// key down ante, key board lo ye button ni aina okasari press cheyaga, immediate ga event activate avtundi
// key up ante, already press ayyi unna button ni release cheyagane, event activate avtundi
// key press ante, manam character keys press chesinappudu release avvalsina event activate avtundi. (key press anedi character keys press chesinappudu matrame fire avtundi including symbols and not on special keys)

// let container = document.querySelector("#container");
// let position = { top: 0, left: 0};

// document.addEventListener("keydown",(event)=>{
//     const step = 10;
//     if(event.key === "ArrowUp") position.top -= step;
//     if(event.key === "ArrowDown") position.top += step;
//     if(event.key === "ArrowLeft") position.left -= step;
//     if(event.key == "ArrowRight") position.left += step;

//     container.style.top = position.top + "px";
//     container.style.left = position.left + "px";
// })

// document.addEventListener("keyup", e=>{
//     container.style.background = "green";
//     setTimeout(() =>  container.style.background="blue", 300);
// })

// document.addEventListener("keypress",e=>{
//     console.log("key press event for: ", e.key);
    
// }).

//--------------------------------------------------------------

// target ante, oka element paina eppudu aithe event fire aitado aa element ne target antamu
// type ante, oka element paina eppudu aithe oka event anedi fire aitado, aa fire aina event name anede type aitadi
// preventDefault(), idi oka form method, indulo normal ga form submit ainappudu , complete page anedi reload aitadi. 
// ee reloading ni aapali (prevent/avoid) chesi submit cheyali ante ee method ni use chestamu 
let container = document.querySelector("#container");

container.addEventListener("click",(e)=>{
    console.log(e);
})



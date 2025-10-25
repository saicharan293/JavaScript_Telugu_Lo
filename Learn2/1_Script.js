// Scope ante,
// manam create chese variable kani , functions kani,
// entha area varaku access cheyagalamu ani.

// Functional Scope -> oka variable/function ni function lopala create chesthe,
// adi function lopala matrame access cheyagalamu.

// Global Scope -> oka variable/function ni function lopala kakunda, file lo 
// ekkadaina kani create chesinappudu, adi global scope lo untundi.
// aa variable/function ni declare chesina line nundi, aa file lo ekkada aina
// kani access chesukovachu.

// Block scope -> oka variable/function ni block lopala ( ante { } lopala ayyi undali, 
// kani function ayyi undakudadu), create chesinappudu, adi block scope lo untundi.
// aa variable/function ni declare chesina line nundi, aa block lopala matrame
// access chesukovachu.

// ikkada, "Var" ane keyword , functional scope and global scope lo matrame work avutundi.
// block scope lo deeniki affect undadu.

// "Let" and "Const" ane keywords block scope lo ne affect avtayi.


// ---------------------------------------------------------------------------------------------

// Execution context -> 
// JS code ni run cheyadaniki, mundu ga, JS engine, oka execution context create chestundi.
// aa execution context lo, rendu important things untayi.
// 1. Memory phase -> variables and functions ni memory lo allocate chestundi.
// 2. Execution phase -> code ni line by line execute chestundi.

// ---------------------------------------------------------------------------------------------

// Lexical Scoping -> oka function lo oka variable and inkoka function undi anukondi.
// aa variable anedi physically, outer funtion lo undi. Kani aa variable ni
// inner function lo access chesukovachu.
// ila, inner function lo, outer function lo unna variable ni access cheyadam
// lexical scoping ani pilustaru.

// Dynamic Scoping -> dynamic scoping ane concept js lo ledu.
// ikkada, function ni call chesina place ki base chesi, variable/function ni
// access cheyadam dynamic scoping ani pilustaru.
// JS lo ila kadu. JS lo lexical scoping matrame untundi.

// Example:

// let a = 12;

// function first(){
//     console.log(a);
// }


// function second(){
//     let a = 10;
//     first();
// }

// second(); // 12

// ikkada, first oka variable ni global scope lo declare chesukunnam.
// first function lo aa variable ni access chesukunnam.
// second function lo inkoka variable with same name ni declare chesukoni, first function ni call chesam.
// kani , first function lo, global scope lo unna variable ni access chesukundi.


// But dynamic scoping lo, second function lo unna variable ni first function lo access chesukovali.

// kani JS lo ila kadu. JS lo lexical scoping matrame untundi.


// ---------------------------------------------------------------------------------------------

// Closure -> closure anedi oka function, ee function inkoka function ni return chestundi.
// aa return chesina function lo, outer function lo unna edo oka variable ni access chesi undali.

// closure valla manam em chesukovachu ante,
// private variable create chesukovachu.

// function closure(){
//     let count = 0;
//     return function innerFunction(){
//         count++;
//         console.log(count);
//     }
// }

// let ans = closure();
// ans(); // 1

// ikkada , interesting point enti ante, ans variable lo closure function call chesamu.
// dani meaning enti ante, aa function call aipoindi. ante lopala unna innerFunction ni return chesindi.
// kani, aa innerFunction lo, outer function lo unna count variable ni access chesukovachu.
// normal ga, outer function execution aipoina tarvata, aa function lo unna variables
// memory nundi delete avutayi. kani, closure valla, aa variable memory lo untundi.
// anduke, manam count variable ni increment chesukoni, print chesukovachu.

// Eppudu aithe closure create chestamo, appudu, oka back link create avutundi,
// aa back link valla, outer function lo unna variables ni access chesukovachu.
// ila, closure valla manam private variable create chesukovachu.
// ante, aa variable ni manam direct ga access cheyaledu. kani, aa variable ni
// access chesukoni, modify chesukoni, print chesukovachu.

// deenine [[Environment]] lo store avtayy.


// function CountForMe(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }

// let ans = CountForMe();
// ans();
// ans();

//Note: ikkada first ans lo CountForMe function call chesamu.
// Aa function ni call chesinappudu, aa function lo unna inner function ni return chesindi.
// next ans() ni call chesinappudu, aa inner function execute aindi.
// malli ans() ni execute chesinappudu, aa inner function lo unna count variable
// increment aindi. ila, manam private variable create chesukoni, aa variable ni
// access chesukoni, modify chesukoni, print chesukovachu.

// ----------------------------------------------------------------------------------------------

// Encapsulation -> Encapsulation ante, manam oka variable ni private ga
// create chesukoni, aa variable ni access cheyadaniki, modify cheyadaniki
// functions provide cheyadam.
// ila chesinappudu, aa variable ni direct ga access kani, control kani cheyalemu.
// ante, aa variable almost hide ayi untundi.

// function clickLimiter(){
//     let count = 0;
//     return function (){
//         if(count <5){
//             count++;
//             console.log(count);
            
//         }else{
//             console.error("BAYYA NUVVU LIMIT CROSS CHESAV");
//         }
//     }
// }

// let ans = clickLimiter();
// ans();
// ans();
// ans();
// ans();
// ans();
// ans();


//-----------------------------------------------------------------------------------------------

// Toaster
// let parentToaster = document.getElementById("parentForToaster");

// document.body.appendChild(parentToaster);

// function createToaster(config){
//     return function(toasterMsg){
//         // parentToaster.innerHTML="";
//         let toastDiv ;
//         if (parentToaster.firstChild) {
//             toastDiv = parentToaster.firstChild;
//         } else {
//             toastDiv = document.createElement("div");
//             toastDiv.classList.add("toast");
//             parentToaster.appendChild(toastDiv);
//         }
//         // let toastDiv = document.createElement("div");
//         // toastDiv.classList.add("toast");
//         toastDiv.style="";
//         if(config.positionX === 'right'){
//             toastDiv.style.right = '20px';
//             parentToaster.style.alignItems = 'end';
//         }
//         else{
//             toastDiv.style.left = '20px';
//             parentToaster.style.alignItems = 'start';
//         }
//         if(config.positionY === 'top'){
//             toastDiv.style.top = '20px';
//             parentToaster.style.top = '10px';
//             parentToaster.style.bottom = '';
//         }
//         else{
//             toastDiv.style.bottom = '20px';
//             parentToaster.style.bottom = '10px';
//             parentToaster.style.top = '';
//         }
//         toastDiv.textContent = toasterMsg;
//         // parentToaster.appendChild(toastDiv);

//         // setTimeout(() => {
//         //     toastDiv.remove();
//         // }, config.duration);
//     }
// }

// let topRightbtn = document.querySelector(".topright");
// let topleftbtn = document.querySelector(".topleft");
// let bottomRight = document.querySelector(".bottomright");
// let bottomleft = document.querySelector(".bottomleft");

// const toasterTopRight = createToaster({positionX: 'right', positionY: 'top', duration: 3000});
// const toasterTopLeft  = createToaster({positionX: 'left', positionY: 'top', duration: 3000});
// const toasterBottomRight = createToaster({positionX: 'right', positionY: 'bottom', duration: 3000});
// const toasterBottomLeft  = createToaster({positionX: 'left', positionY: 'bottom', duration: 3000});

// topRightbtn.addEventListener('click', () => toasterTopRight("Toast from Top Right"));
// topleftbtn.addEventListener('click', () => toasterTopLeft("Toast from Top Left"));
// bottomRight.addEventListener('click', () => toasterBottomRight("Toast from Bottom Right"));
// bottomleft.addEventListener('click', () => toasterBottomLeft("Toast from Bottom Left"));


// time stamp 1:116:39

// ----------------------------------------------------------------------------------------------

// this() keyword is a special keyword, endukante, remaining keywords yokka value same untadi,
// but this keyword yokka value change avtune untundi

// this() value , global lo window ane value ni istadi
// console.log(this);


// function lo, this keyword yokka value window ane vastadi

// function test(){
//     console.log(this);
// }

// test();

// method ante, oka object lo oka function ni create chesinappudu, danni method antamu
// ippudu this yokka value, method lo object aipotundi
// ante, method lo this value ni call chesinappudu, adi aa complete object ni store chesukuntadi

// let obj = {
//     name : "Sai",
//     age: 29,
//     sayName : function(){
//         console.log(this);
//     }
// }

// obj.sayName();

//this use case in Event handler
// Note: oka vela this ni arrow function lo use cheste, 
// adi current element paina unna parent element ni consider chestundi. 
// Anduke this value ni use cheyali ante normal function ni use cheyali.

// So, Event handler lo this key word use chesinappudu, 
// this lo current element store avtundi

// document.querySelector("h1").addEventListener("click", function (){
//     console.log(this.style.color = "red");
// })

// this Keyword in class
// class lo this keyword lo blank object store avtadi

// class Test{
//     constructor(){
//         console.log(this);
//         this.a = 12;
//     }
// }
// let test = new Test();


//----------------------------------------------------------
// use case --- this value

// global ---- window
// function -- window
// method (function inside object) -- object
// method inside es5 (method inside function) - object
// method inside es6 (method inside arrow) - window
// es6 (arrow) inside es5 (function) - object
// es5 (function) inside es5 (function) - window (this will loose the value and traverse to the top parent)
// class - blank object 

// ------------------------------------------------------------------------------------------------------

// call - apply - bind : this() keyword yokka direction ni window nundi, custom object ki shift 
// cheyataniki ivi use chestamu


// let obj = {
//     name : "sai",
// }

// function test(a, b, c){
//     console.log(this, a, b, c);
    
// }

// test.call(obj, 1, 2, 3)

// Note: normal ga this anedi "window" ni print cheyali, endukante this ni es5 method lo use chesam kabatte, 
// kani, "Call" method ni use cheyatam vallana, adi "window" nundi "call" method lo pass chesina "obj" ane object 
// ni replace chesindi, anduke {name: 'sai'} 1 2 3 , log aindi

// call ni use chesi object tho patu, vere ithara variables/parameters ni pampinchachu

// function test(a, b, c){
//     console.log(this, a, b, c);
// }

// test.apply(obj, [1, 2, 3])

// apply ni use chesi data ni send cheyali ante, first parameter object ayyi undali, 
// second di array of data ayyi undali

// Rev Explanation :
// -------------------

// suppose, mana daggara data anedi array of values ga unte, apply() ni use cheyali 
// or call ni use cheyali ante arr[0], arr[1],.... ila use chesi call() ni use cheyachu

// let fnc = test.bind(obj, 1, 2, 3);
// let person = {
//   name: "sai",
//   greet: function() {
//     console.log("Hi " + this.name);
//   }
// };

// setTimeout(person.greet.bind(person), 1000); // ❌ this = undefined (or window)

// eppudaina kani setTimeout() lo object yokka function ni pass chesamu ante, 
// aa function lo unna "this" value ni loose avtundi.

// bind ni use cheyali ante, danni oka variable lo store cheyali, endukante bind anedi, 
// oka kotha function ni create chesi istadi and this yokka value loose avvadu
// . Aa kotthaga create chesina function ni call chesinappudu
// , previous function activate aitadi.

// let f = person.greet.bind(person);

// f(); // Hi sai

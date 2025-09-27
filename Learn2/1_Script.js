// Scope ante,
// manam create chese variable kani , functions kani,
// entha area varaku excess cheyagalamu ani.

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

function clickLimiter(){
    let count = 0;
    return function (){
        if(count <5){
            count++;
            console.log(count);
            
        }else{
            console.error("BAYYA NUVVU LIMIT CROSS CHESAV");
        }
    }
}

let ans = clickLimiter();
ans();
ans();
ans();
ans();
ans();
ans();

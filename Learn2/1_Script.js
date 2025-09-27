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

let a = 12;

function first(){
    console.log(a);
}


function second(){
    let a = 10;
    first();
}

second(); // 12

// ikkada, first oka variable ni global scope lo declare chesukunnam.
// first function lo aa variable ni access chesukunnam.
// second function lo inkoka variable with same name ni declare chesukoni, first function ni call chesam.
// kani , first function lo, global scope lo unna variable ni access chesukundi.


// But dynamic scoping lo, second function lo unna variable ni first function lo access chesukovali.

// kani JS lo ila kadu. JS lo lexical scoping matrame untundi.

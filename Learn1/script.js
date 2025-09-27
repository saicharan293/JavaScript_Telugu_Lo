

//var let const
// var a = 12;
// here a is global
//-------------------

//... if in function parameters, it is rest operator
//... if in arrays and objects, it is spread operator

//----------------------------------------------------------------------------

// first class functions: functions that are treated as values (such as argument to other function)
// they can be passed to functions or they can be stored in variables

// function abcd(val){
//     val();
// }

// abcd(function(){
//     console.log("na peru first class function");
// })

//here val is the first class function

//---------------------------------------------

//H O F: Higher Order function => function which accepts another function in its arguements or return a function

// case 1 : accepting a function
// function abcd(val){
//     console.log("abcd: nenu oka higher order function. endukante val ane function in accept chestunnanu")
//     val()
// }

// abcd(function(){
//     console.log("na per first class function")
// })

//case 2: returning a function
// function abcd(){
//     console.log("abcd: nenu oka higher order functionk, endukante nenu oka function ni return chestunna kanuko")
//     return function(){
//         console.log("idi oka returning function, idi first class function aithe kadu");
//     }
// }
// abcd()()

// ikkada parent function ki two brackets, endukante, ee case lo function lo ne inko function ni return chestunnam,
// so, first bracket valla abcd function call avtundi, second bracket valla return lo unna function call avtundi.

//-----------------------------------------------------------------------------------

// Practice Problems on HOF
// Q1: Print "Hello" two times using HOF
// function doTwice(fn) {
//   // your code here
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello!");
// }

// doTwice(sayHello);
// Expected output:
// Hello!
// Hello!

//Q2: Write a function makeMultiplier that returns a new function which multiplies numbers by a given value.

// function makeMultiplier(n) {
//   // your code here
//     return function (num) {
//         return n * num;
//     }
// }

// const double = makeMultiplier(2);
// console.log(double(5)); // Expected: 10

// const triple = makeMultiplier(3);
// console.log(triple(5)); // Expected: 15

// Q3: Write a function applyOperation that takes two numbers and a function (like add or multiply) and applies it

// function applyOperation(a, b, operation) {
//   // your code here
//     return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log(applyOperation(3, 4, add));      // Expected: 7
// console.log(applyOperation(3, 4, multiply)); // Expected: 12

// Q4: Use map (a built-in HOF) to turn an array of numbers into their squares. 
// [Note: map takes a function as an argument and returns a new array]

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(function(num){
//     return num * num;
// })
// console.log(squares); // Expected output: [1, 4, 9, 16, 25]

// Q5: Use filter (a built-in HOF) to filter out even numbers from an array of numbers.
// [Note: filter takes a function as an argument and returns a new array]
// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNum = numbers.filter(function(num){
//     return num % 2 === 0;
// })
// console.log(evenNum); // Expected output: [2, 4, 6]




//-----------------------------------------------------------------------------------------

//PURE VS IMPURE FUNCTIONS

// let a = 12;
// function abcd(){
//     console.log("nen oka pure function, endukente, ee function bayata unna values ni disturb cheyatledu kabatte.")
// }

// function hi(){
//     a++;
//     console.log("nenu oka impure function ni, endukante, nen bayata unna a value ni change chesanu kabatte");
// }

// abcd();
// hi();

//----------------------------------------------------------------------------------------------


// CLOSURES => closure anedi oka function, ee function anedi inko function ni return cheyali, aa return ayye function lo
// return chese function lo unna edaina oka variable ni indulo use cheskovali

// function abcd(){
//     let a = 2;
//     console.log("nenu abcd function");
//     return function(){
//         console.log("ikkada nenu return ayye function.",a,"ni use cheskuntunna kabatti paina unna abcd anedi CLOSURE aipoddi");
//     }
// }

// abcd()()


// Q1: Counter using Closures

// function Counter(){
//     let val = 0;
//     return function(){
//         val++;
//         return val;
//     }
// }
// let counter = Counter();
// console.log(counter());
// console.log(counter());

//Q2: Secret Keeper using Closures

// function secretKeeper(secret){
//     return function(){
//         console.log(secret);
//     }   
// }

// const mySecret = secretKeeper("I love JavaScript!");

// mySecret(); // "I love JavaScript!"

//Q3: Adder using Closures

// function makeAdder(a){
//     return function(b){
//         return a + b;
//     }
// }
// const add5 = makeAdder(5);
// console.log(add5(10)); // 15
// console.log(add5(20)); // 25

// Q4: Greet using Closures

// function once (grt){
//     let called = false;
//     return function(){
//         if(!called){
//             called = true;
//             console.log(grt);
//         }
//     }
// }

// let greet = once("namaste bangalore");
// console.log(greet());
// console.log(greet());
// console.log(greet());

//Q5: Create Bank Account using Closures

// function createAccount(inb){
//     let balance = inb;
//     return {
//         deposit: function (amt){
//             balance += amt;
//             // return balance;
//         },
//         getBalance: function(){
//             return balance;
//         }
//     }
// }

function double(){

}

// let myAccount = createAccount(1000);

// myAccount.deposit(500);
// console.log(myAccount.getBalance()); // 1500
// myAccount.deposit(200);
// console.log(myAccount.getBalance()); // 1700


//----------------------------------------------------------------------------------------------------

// LEXICAL SCOPING => oka function or block lo unna oka variable ni, ade function or block lo unna ye ithara functions lo aina
// aa varialbe ni use cheskovachu

// function abcd(){
//     let a = 12;
//     function cd(){
//         let b = 3;
//         console.log("ikkada a value anedi",a,"so paina function lo unna a value ni ikkada use cheskune opportunity untundi. Ide lexical scoping");
//         function ef(){
//             let c=4;
//         }
//     }
//     cd()
// }

// abcd()

//--------------------------------------------------------------------------------------------------------

//IIFE => Immediately Invoked Function Expression

// (function(){
//     console.log("na peru IIFE (Immediately Invoked Function Expression)")
// })();

//---------------------------------------------------------------------------------------------------------

// Hoisting => in Function Expression and Declaration

// abcd();

// function abcd(){
//     console.log("nenu oka function declaration ni , kabatte nenu hoisting ni support chestanu")
// }

// let abcd = function(){
//     console.log("Nenu oka function expression ni , so nenu hoisting ni support cheyalneu")
// }

//----------------------------------------------------------------------------------------------------------
// BMI CALCULATOR => BMI ante Body Mass Index ani artham, idi oka person yokka body weight ni, height ki relate chestundi
// BMI = weight(kg) / height(m) * height(m)

// function bmi (wt, ht){
//     return wt/(ht*ht);
// }

// console.log(bmi(50, 1.6).toFixed(2));

//----------------------------------------------------------------------------------------------------------

// Discount Calculator using HOF

// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount/100);
//     }
// }

// let discount = discountCalculator(10);
// console.log(discount(200));
// console.log(discountCalculator(10)(200))

//----------------------------------------------------------------------------------------------------------

// COUNTER using Closures

// function Counter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }

// let counter = Counter();
// console.log(counter());
// console.log(counter());
//------------------------------------------------------------------------------------------

//Q: Create a pure function to transform a value.
// function double(val){
//     return val * 2;
// }

// console.log(double(5));

//Q: Use IIFE to isolate a variable.

// (function(){
//     const password = "supersecret";
//     console.log(password);
// })();

// console.log(password); // ReferenceError: password is not defined

//Note: ikkada password variable ni IIFE lo define chesamu so adi private ga untundi, bayata nundi access cheyalemu.
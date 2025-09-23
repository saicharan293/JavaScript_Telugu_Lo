
// Create variables of all data types

// let a = 10;
// let name = "funda";
// let isLearning = true;
// let flutter = null;
// let phone;

// console.log(typeof phone)

//----------------------------------------------------------------

// check even or odd

// let num = 10;
// console.log(num % 2 == 0 ? " Even " : "odd");

//----------------------------------------------------------------

// Swap two numbers without using third variable

// let a  = 10;
// let b = 20;

// first way
// a = a * b;
// b = a / b;
// a = a / b;

// second way
// [a, b] = [b, a];
// console.log(a, b);

//----------------------------------------------------------------

// Find largest of three numbers

// let a = 10, b = 20, c = 30;

// console.log(Math.max(a, b, c));
// console.log( a > b ? (a > c ? a : c) : (b > c ? b : c));

//----------------------------------------------------------------

// Find factorial of a number

// function factorial (num) {
//     if (num < 0) return -1;
//     if (num == 0 || num == 1) return 1;

//     let result = 1;
//     for (let i = 2; i <= num; i++){
//         result *= i;
//     }
//     return result;
// }

// function factorial (num){
//     if (num < 0) return -1;
//     if (num == 0 || num == 1) return 1;
//     return num * factorial (num - 1);
// }

// console.log(factorial(5));

// let n = 5;

// let factorial = (function fact(num){
//     if (num < 0) return -1;
//     if (num == 0 || num == 1) return 1;
//     return num * fact(num - 1);
// })(n);

// console.log(factorial);

//----------------------------------------------------------------

// Reverse a string

// let str = "funda";
// console.log(str.split("").reverse().join(""));

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--){
//     reversed +=str[i];
// }
// console.log(reversed);

//----------------------------------------------------------------

// Check if a string is palindrome or not

let palin = "check";

// let rev = palin.split("").reverse().join("");

// console.log(palin , palin==rev ? "is palindrome": "not a palindrome");

// for (let i = palin.length-1; i >= 0; i--){
//     if (palin[i] != palin[palin.length - 1 - i]){
//         console.log(palin , "not a palindrome");
//         break;
//     }
// }

//--------------------------------------------------------

// check count of vowels and consonents in a string

// let word = "javascript";

// let vowelCount = 0, consonentCount = 0;

// let originalVowels = "aeiou";

// for (let i = 0; i< word.length; i++){
//     if(originalVowels.includes(word[i])){
//         vowelCount++;
//     }else{
//         consonentCount++;
//     }
// }

// let counts = [...word].reduce((acc, char)=> {
//     originalVowels.includes(char) ? acc.vowels++ : acc.consonents++;
//     return acc;
// },{vowels:0, consonents: 0})


// console.log("vowel count", counts.vowels, "consonent count", counts.consonents);


//--------------------------------------------------------

// Find prime or not

// let number = 7;

// for (let i = 2; i <= Math.sqrt(number);i++){
//     if(number % i == 0){
//         console.log("not prime");
//         break;
//     }else{
//         console.log("prime");
//     }
// }
//----------------------------------------------

// fibonacci series

// let n = 10;

// let a= 0, b = 1;

// for (let i = 1; i <= n; i++){
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }


// find fibonacci numbers till n

// while(a<=n){
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }

//--------------------------------------------------------

// Find GCD of two numbers

// let x = 12, y = 15;

// let gcd = (a, b) => {
//     if (b == 0) return a;
//     return gcd(b, a % b);
// }
// console.log(gcd(x, y));

//--------------------------------------------------------

// Find the max of an array

let arr = [1, 2, 3, 4, 5];

// console.log(Math.max(...arr));
// console.log(arr.reduce((max, curr)=> max > curr ? max : curr));

let max = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// for ( let num of arr){
//     if(num > max) max = num;
// }

// console.log(max);
//--------------------------------------------------------

// Remove Duplicates from an array

// let array = [1, 2, 2, 3, 4, 4, 5];

// let unique = [];

// for (let num of array){
//     if(!unique.includes(num)){
//         unique.push(num);
//     }
// }

// let unique = array.filter((num, idx) => array.indexOf(num) == idx);

// let unique = [...new Set(array)];

// console.log(unique);

//------------------------------------------

// Find the length of an array without using length property

// let length = 0;

// for (let _ in arr){
//     length++;
// }

// console.log(length);

//--------------------------------------------------------

// Create an object and access its properties

let person = {
    name: "funda",
    isSingleThread: true,
    age: 24
}

// for (let key in person){
//     console.log(key, person[key]);
// }

// for (let key of Object.keys(person)){
//     console.log(key, person[key]);
// }

// for(let val of Object.values(person)){
//     console.log(val);
// }

// console.log(Object.values(person));

// ---------------------------------------------------

// count the occurances of a character in a string

// let string = "javascript";

// let char = "a";

// let count = ( function(str, ch){
//     let count = 0;
//     for (let c of str){
//         if( c == ch) count++;
//     }
//     return count;
// })(string, char);

// let count = [...string].reduce((acc, curr)=> curr == char ? acc ++ : acc, 0);

// let count = [...string].filter(c => c == char).length;

// console.log(count);

//--------------------------------------------------------

// Find the first non-repeating character in a string

// let string = "swiss";

// let char = null;

// for (let c of string){
//     if (string.indexOf(c) == string.lastIndexOf(c)){
//         char = c;
//         break;
//     }
// }
// console.log(char);

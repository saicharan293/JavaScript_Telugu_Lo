
// Arrays:
// Array ante oka data structure, indulo manam multiple values ni store cheyochu
// Java script lo array ni create cheyadaniki square brackets [] use chestamu
// Array anedi Reference data type
// Array lo manam different data types ni store cheyochu
// Array lo unna prathi item ki oka index untundi, index 0 nundi start avutundi
// Array is mutable, ante array lo unna values ni manam change cheyochu


// Note: vere languages lo , array lo oka data type ni matrame store cheyochu,
// kani javascript lo manam different data types ni kuda store cheyochu

// Array ni create cheyataniki
// 1. Literal method
let marks = [1, 2, 3, 4, 5];
// 2. new keyword use chesi
let fruits = new Array("Apple", "Banana", "Orange", "Apple", "Banana");

// ikkada marks array lo unna first item/value in access cheyataniki,
//  marks[0] ani rayali, endukante index 0 nundi start avutundi

// Array lo unna value ni modify cheyataniki
// marks[0] = 100; // ikkada 0 ane index lo unna value ni 24 ga modify chesthunnam

// arrays lo values ni access cheyalante, index use chestamu
// console.log(marks);

// Array lo oka kotha value ni add cheyali ante push method use chestamu
// marks.push(100); // ikkada 100 ane value ni array lo add chesthunnam
// console.log(marks);

// Array lo unna last value ni remove cheyali ante pop method use chestamu
// marks.pop(); // ikkada array lo unna last value ni remove chesthunnam
// console.log(marks)

// Shift():Array lo unna first value ni remove cheyali ante shift method use chestamu
// marks.shift(); // ikkada array lo unna first value ni remove chesthunnam

// Unshift(): Array lo value ni first index lo add cheyali ante unshift method use chestamu
// marks.unshift(24); // ikkada 5 ane value ni array lo first index lo add chesthunnam
// console.log(marks)

// Splice(): Array lo middle lo unna value ni remove cheyali ante splice method use chestamu
// ikkada splice method lo first argument lo index vastadi, second argument lo aa index nundi
// enni values remove cheyali ane dani number vastadi
// marks.splice(2, 2); // ikkada index 2 nundi oka value ni mathrame remove chesthunnam

// ikkada splice method lo first argument lo negative index use cheste
// array lo last nundi count chesthadi
// marks.splice(-2, 1); // ikkada array lo last nundi second index nundi oka value ni remove chesthunnam
// console.log(marks)

// Slice: Array lo oka portion of array ni access cheyali ante slice method use chestamu
// ikkada slice method lo first argument lo index vastadi, second argument lo aa index nundi
// enni values access cheyali ane dani number vastadi
// Note: slice method original array ni modify cheyadu, kani splice method original array ni modify chesthadi

// let newArr = marks.slice(1, 6); // ikkada index 1 nundi 4 varaku values ni access chesthunnam
// console.log(newArr);

// Story: Oka friend bday party ki velte, akkada unna cake ni cut chesi,
//  naku oka piece isthe danni slice antamu (ikkada separate array create avutundi, original array modify avvadu),
//  kani cake ni cut chesi, vadu slice ni teesukoni, naku remaining entire cake isthe danni splice antamu 
// (ikkada original cake lo nundi piece cut avutundi, original cake modify avutundi)

// Reverse: ee method ni use chesi , original array lo unna values ni reverse cheyochu
// marks.reverse(); // ikkada array lo unna values ni reverse chesthunnam

//Sort: ee method ni use chesi , original array lo unna values ni sort cheyochu
// oka numeric array ni sort cheyataniki, direct sort method use cheyadam correct kaadu
// endukante sort method lo values ni string laga consider chesthadi
// anduke numeric array ni sort cheyataniki, custom compare function ni pass cheyyali
// example: arrayname.sort((a,b)=> a-b) => ascending order
// example: arrayname.sort((a,b)=> b-a) => descending order

// oka string array ni sort cheyataniki, direct sort method use cheyadam correct
// endukante string array lo values ni alphabetical order lo sort chesthadi

// marks = [3, 1, 4, 2, 5];
// Note: sort method lo numbers ni sort cheyataniki, manam custom compare function ni pass cheyyali
// marks.sort(function(a, b){
//     // return a - b; // ascending order
//     return b - a; // descending order
// });


// forEach: ee method ni use chesi, original array lo unna prathi value mida oka function apply cheyochu
// ikkada original array lo unna values modify avutayi
// forEach method lo manam function ni pass cheyyali, aa function lo prathi value mida
// manam em cheyalo dani logic rayali

// marks.forEach(function(val){
//     console.log(val+5);
// })



// Map: ee method ni use chesi, original array lo unna prathi value mida oka function apply chesaka
// new array create chestadi, kani forEach method original array ni modify cheyadu

// let newArr = marks.map(function(val){
//     return val * 2;
// })

// console.log(newArr);

// Filter: ee method ni use chesi, original array lo unna prathi value mida oka function apply chesaka
// new array create chestadi, kani indulo condition satisfy ayye values matrame new array lo untayi

// let newArr = marks.filter(function(val){
//     return val % 2 === 0; // even numbers
//     // return val % 2 !== 0; // odd numbers
// })

// let newArr = marks.filter(function(val){
//     return val > 2; // values greater than 2
// })

// console.log(newArr);

//Reduce(): ee method ni use chesi, original array lo unna prathi value mida oka function apply chesaka
// oka single value return chestadi
// let sum = marks.reduce(function(acc, val){
//     return acc + val;
// },10) // ikkada 10 ane initial value ni acc ki assign chesthunnam


// Q: Find the maximum value in an array using reduce method
// let arr = marks.reduce(function(acc, val){
//     return val>acc?val: acc;
// },[]) // ikkada empty array ni initial value ga acc ki assign chesthunnam
// console.log(arr);


// Q: Count the occurrences of each fruit in an array using reduce method
// let fr = fruits.reduce(function(acc, fruit){
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// },{});
// console.log(fr);

// ikkada empty object ni initial value ga acc ki assign chesthunnam
// acc[fruit] || 0 => idi check chesthadi acc object lo fruit ane key already unda leda ani
// undakapothe 0 ni assign chesthadi, undi ante dani value ni increment chesthadi by 1


//Q: Count the occurrences of each key in an array of objects using reduce method
// let arr = [
//     {id : 1, key: "a"},
//     {id : 2, key: "b"},
//     {id : 3, key: "a"}
// ]

// marks = arr.reduce(function(acc, val){
//     acc[val.key] = (acc[val.key] || 0) + 1;
//     return acc;
// },{});

// find(): ee method ni use chesi, original array lo unna prathi value mida oka function apply chesaka
// first match ayye value ni return chestadi, okavela value ne lekapothe undefined return chestadi


//Q: Find the object with key "c" in an array of objects using find method
// let found = arr.find(function(val){
//     return val.key === "c";
// })
// console.log(found);

// some(): ee method ni use chesi, original array lo unna prathi value mida oka function apply chesaka
// condition satisfy ayye atleast oka value unte true return chestadi, lekapothe false return chestadi

//Q: Check if there is any even number in an array using some method
// let hasEven = marks.some(function(val){
//     return val % 2 === 0;
// })
// console.log(hasEven); // true

// every(): ee method ni use chesi, original array lo unna prathi value mida oka function apply chesaka
// condition satisfy ayye enni values unte kuda, anni values satisfy ayithe matrame true return chestadi

//Q: Check if all numbers are positive in an array using every method
// let allPositive = marks.every(function(val){
//     return val > 2;
// })
// console.log(allPositive); // false


// Destructuring Arrays:
// indulo manam array lo unna values ni separate variables lo store cheyochu

// let strings = ["Hello", "World", "JavaScript", "is", "awesome"];

// let [greeting, place, lang, , adj] = strings;
// console.log(greeting); // Hello

// Note: ikkada manam comma (,) use chesi, unnecessary values ni skip cheyochu
// like, ikkada "is" ane value ni skip chesamu

// Q: Swap two variables using destructuring
// let a = 5;
// let b = 10;
// [a, b] = [b, a];

// destructuring lo manam default values kuda assign cheyochu
// let [first = "First", second = "Second", third = "Third", fourth = "Fourth"] = ["Only First"];
// console.log(first);

// ikkada arr2 lo ki arr yokka reference assign chesthunnam
// so, arr lo em changes chestham, arr2 lo kuda avi reflect avutayi
// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = arr;

// For suppose, oka array lo unna values ni inko array lo copy cheyali ante
// Spread Operator (...) use chestamu
// ikkada arr1 lo unna values ni arr3 lo copy chesthunnam
// so, arr1 lo em changes chestham, arr3 lo avi reflect avvadu
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr3 = [...arr1]; // spread operator use chesi, arr lo unna values ni arr3 lo copy chesthunnam
// arr3[0] = 100; // ikkada arr3 lo unna first value ni modify chesthunnam
// console.log(arr1); // original array
// console.log(arr3); // copied array

//--------------------------------------------------------------------------------------------------

//Q: Create an array of fruits and print second fruit in the array
// let fruitsArr = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// console.log(fruitsArr[1])

//Q: Add Chilly at the end and Pineapple at the beginning of the array
// let fruitsArr = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// fruitsArr.push("Chilly");
// fruitsArr.unshift("Pineapple");
// console.log(fruitsArr);

//Q: Remove the last fruit from the array
// fruitsArr.pop();
// console.log(fruitsArr);

//Q: Replace Banana with Kiwi in the array

// fruitsArr[2] = "Kiwi";
// console.log(fruitsArr);

// fruitsArr.splice(2, 1, "Kiwi"); // ikkada index 2 nundi oka value ni remove chesi, dani place lo "Kiwi" ane value ni add chesthunnam

//Q: Insert Red and Blue in the below array at index 1

// let colors = ["Green", "Yellow", "White", "Black"];
// colors.splice(1, 0, "Red", "Blue"); // ikkada index 1 nundi emanna values remove cheyakunda, dani place lo "Red" and "Blue" ane values ni add chesthunnam
// console.log(colors);

//Q: Extract middle elements from the array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let mid = numbers.slice(2, 5);
// console.log(mid); // [3, 4, 5, 6]

//Q: Sort the array and reverse it

// let names = ["Sindhu", "Manoj", "Anil", "Balu", "Chandu"];
// names.sort(); // ascending order
// names.reverse(); // descending order
// console.log(names); // [ 'Sindhu', 'Manoj', 'Chandu', 'Balu', 'Anil' ]

//Q: Use map() to square each number in the array

// let nums = [2, 3, 4, 5, 6];

// let square = nums.map(function(num){
//     return num*num;
// })
// console.log(square); // [4, 9, 16, 25, 36]

//Q: Use filter() to get numbers greater than 3

// let numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers.filter(function(n){
//     return n>3;
// })
// console.log(result); // [4, 5, 6]

//Q: Use reduce() to get the sum of all numbers in the array

// let nums = [1, 2, 3, 4, 5];

// let res = nums.reduce((acc, num)=> acc+num,0); // ikkada 0 ane initial value ni acc ki assign chesthunnam
// console.log(res); // 15

//Q: Use find() to get the first number greater than 4

// let numbers = [1, 2, 3, 4, 5, 6];

// let numberFound = numbers.find((n)=> n>4);

// console.log(numberFound); // 5

//Q: Use some() to check if there is any number less than 3

// let numbers = [1, 2, 3, 4, 5, 6];

// let numlessthanthree = numbers.some(n=> n<3);
// console.log(numlessthanthree); // true

//Q: Use every() to check if all numbers are even
// let num = [1, 2, 3, 4, 5, 6];

// let allEven = num.every(n=> n%2===0);
// console.log(allEven); // false

//Q: Use Destructuring to extract firstname and lastname from the array

// let fullName = ["John", "Doe"];
// let [firstName, lastName] = fullName;
// console.log(firstName); // John
// console.log(lastName); // Doe

//Q: Merge two arrays using Spread Operator

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let sumArr = [...arr1, ...arr2];
// console.log(sumArr); // [1, 2, 3, 4, 5, 6]

//Q: Add India at the start of the array using Spread Operator

// let countries = ["USA", "UK", "Canada", "Australia"];

// countries = ["India", ...countries];
// console.log(countries); // [ 'India', 'USA', 'UK', 'Canada', 'Australia' ]

//Q: Clone this array (not by reference)

// let originalArr = [1, 2, 3, 4, 5];
// let clonedArr = [...originalArr];
// console.log(clonedArr); // [1, 2, 3, 4, 5]
// console.log(originalArr); // false, endukante rendu arrays kuda different memory locations lo untayi


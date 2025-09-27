//DOM : Document Object Model
// oka web page teesukunte adi html tho basic ga build ayyi untadi,
// ee web page anedi live vellinappudu, oka tree structure form chesukuntadi
// andulo different tags undachu, different elements undachu, avanni nested ayyi untay

//fetching the node by using Id

// let headTag = document.querySelector("#headTag");
// here, headTag will show the entire element completely as in the html page,
// alantappudu, console.dir(headTag) use cheste, aa element ni open cheyagalamu
// Query Selector anedi eppudaina kani first element ni select chesukuntadi


// let headTag = document.getElementById("headTag")
// here, headTag will show the tag name along with its id associated with it.

//QuerySelectorAll => ikkada manaki Node list of elements ni capture chestadi but adi list kadu
// console.log(headTag);

// let h1 = document.querySelector("h1");
// console.dir(h1);
//output: ikkada manaki list of key value pairs kanipistay,
// indulo, clear ga three key value pairs daggara h1 value kanipistu untadi
// 1. innerHTML 2.innerText 3.textContent

// innerHTML property: meaning enti ante, h1 element(variable) lo unna present content ni
// vere HTML tag tho replace cheyachu
// h1.innerHTML = "<i>Charan</i>";


//textContent and innerText properties use chesi, existing unna keys yokka values ni only
// content (new) tho replace cheystadi


// h1.textContent = "sai";
// h1.innerText = "yup";


//--------------------------------------------------------------------------------------------------------------

//Attribute: attribute ante enti ante, manam oka tag ni create chese time lo ne, aa tag name kakunda
// vere parameters kuda add cheyachu, ex: id, class, src, href


//Attribute Manipulation: indulo unde topics enti ante
//getAttribute, setAttribute, removeAttribute

// let a = document.querySelector("a");
// a.href="https://www.google.com"
// console.dir(a);

// ikkada href anedi a tag attribute, ila kuda assign cheyachu

// ikkada setAttribute use chesi, aa attribute name and daniki kavalsina value ni set chestamu,
// ila kuda attribute ki value set cheyachu
// a.setAttribute("href", "https://www.youtube.com");

// let image = document.querySelector("img");
// image.setAttribute("src","https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=")
// image.src= 'https://unsplash.com/photos/white-wedding-bouquet-rests-on-a-weathered-log-NcBSOflisH4'


//getAttribute; ye tag lo aina kani , dani lo unna attributes ki assign chesina value telsukovali anukunte getAttribute use chestamu
// let a = document.querySelector("a");
// a.href="https://www.google.com"
// console.log(a.getAttribute("href"));

// removeAttrute: ye tag lo aina kani, dani lo unna ye attribute ni aina remove cheyali anukunte removeAttribute ni use chestamu
// let a = document.querySelector("a");
// a.removeAttribute("href");

//-------------------------------------------------------------------------------------------------------------------------------------------

//Dynamic DOM manipulation: indulo unde topics enti ante
//createElement, removeChild, appendChild, prepend


//createElement: ee method ni use chesi, oka element ni create cheyachu, ikkada element ante tags ani, html lo unna ye tag ni aina create cheyachu
// let h1 = document.createElement("h1");
// h1.textContent = "Hlo nen Create Element function tho create ayyanu"

//ippudu ye element ni create chesina adi DOM lo ki insert avvali ante, Append, AppendChild, Prepend ni use cheyachu

//Append ante aa parent element end lo okate leda multiple elements add cheyagalamu
// document.body.append(h1);

//Prepend ante aa parent element lo starting lo add avtundi
// document.body.prepend(h1)
// console.log(h1);

//Remove() method ni use chesi, aa particular tag or element ni remove DOM nundi remove cheyachu
// let h1 = document.querySelector("h1");
// h1.remove()

//AppendChild() method ni use chesi, only one element ni mathrame add cheyagalamu
// let h1 = document.createElement("h1");
// h1.innerText = "nenu pedda header"
// document.querySelector("div").appendChild(h1);

// style.--methodname()=> ikkada ye element ki aina kani dani yokka css dynamic ga
// change cheyali ante style.cssproperty ni use chestamu
// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.style.color= "red"
// h1.style.textTransform = "capitalize"

//classList.add() use chesi ye tag ki aina class name ni dynamic add cheyachu
// let h1 = document.querySelector("h1");
// h1.className="heading"
// h1.classList.add("heading");

//classList.remove() use chesi ye tag ki unna existing class ni dynamic ga remove cheyachu
// h1.classList.remove("heading");

//classList.toggle() ni use chesi ye tag ki aina dom lo existing class ni remove chestadi, if asalu aa class ye lekunte add chestadi
// h1.classList.toggle("heading")


//What is DOM? How does it represent the HTML structure
// DOM basically Document Object Model, idi tree structure lo untundi, indulo prathi okka element ni Node ani pilustamu

//Name of the Nodes in the DOM
//Nodes lo Element Node, Text Node, Comment Node lantivi untay,

//What is the difference between element Node and Text Node
//HTML lo prathi okka tag ni Element Node ani pilavachu, aa Element node middle lo emaina text unte danni Text Node
//antamu
// ex: <p>this is text</p>
// ikkada paragraph tag anedi element node aithe, danlto unna text anedi text Node aitadi

//What is the difference between getElementById and QuerySelector
//getElementById lo only Id ni mathrame select cheyagalamu,
//QuerySelector lo Id, class, tag.. ni select cheyachu, in short idi multi purpose selector

//What does getElementsByClassName return? Is it an Array?
//it always return HTMLCollection which is NOT an Array

//What does QuerySelectorAll returns?
//It always return NodeList

//Select the heading of the page by className and change its text to "Awesome going with java script"
// document.querySelector(".heading").textContent = "Awesome going with java script";

//select all the items in the list and print their text using loop

// let ListItems = document.querySelectorAll('li');
// ListItems.forEach(element => {
//     console.log(element.innerText)
// });

// for(let i=0;i<ListItems.length;i++){
//     console.log(ListItems[i].innerText);

// }

//What is the Difference between innerText, innerHTML, textContent
// innertText and textContent anevi rendu (text node) tag lo unna text ne represent chestayy,
// innerHTML anedi, tag lopala unna HTML tags ni represent chestadi, and tag lo ki direct ga


//When should you use innerText and textContent
//textContent ni use chesinappudu , irrespective of display nature(even if none), aa context meeda apply avtadi and idi chala fast ga untadi
//innerText ni use chesinappudu, only display!=none unnavi vaati varake context meeda apply avtadi

//Select the paragraph and replace the context with
//<b>Updated </b> by javascript
// document.querySelector("p").innerHTML = "<b>Updated </b> by javascript"

//How do you get src of an image
// console.log(document.querySelector("img").getAttribute("src"));
// console.log(document.querySelector("img").src);

//What do createElement() returns?
//createElement() anedi oka ElementNode ni return chestadi

//Can you remove an element using removeChild()?
//document.querySelector("div"/parent element node).removeChild("p"/child element node);

//Create a new list item <li>New Item </li> and add it to the end of the list
// let item = document.createElement("li");
// item.textContent="New Item"
// document.querySelector("ul").appendChild(item)

//Add a highlight class to every even item in the list
// let lis = document.querySelectorAll("ul li:nth-child(2n");
// lis.forEach(ele=>{
//     ele.style.backgroundColor="red"
// })


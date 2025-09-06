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




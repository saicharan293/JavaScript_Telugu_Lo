// 5: 30: 50

// Local storage ante, browser ki data base lantidi, 
// ante okasari andulo data save cheste, 
// browser close chesina kani, data delete avvadu

// Session storage ante, browser lo idi temporary database lantidi, 
// ante browser tab open lo unantha varaku, data andulo store chesi use cheyachu, 
// but..... once tab or browser ni close cheste, Session close aipoddi

// Cookies ante, browser lo idi oka property, indulo kuda data store cheyachu. 
// Idi very light weight data store cheyataniki use chestamu, tab close chesina kuda data delete avvadu

//------------------------------------------------------

//Local Storage (~5mb)
// Data ni store cheyali ante localStorage.setItem("--var-name","--data")

// localStorage.setItem("just","dat");

// localStorage lo store aina data ni get cheyali ante localStorage.getItem("--var-name")

// let val=localStorage.getItem("just");
// console.log(val);

// Local Storage lo store aina data ni delete cheyali ante localStorage.removeItem("--var-name")

// localStorage.removeItem("just");

// Kani Local storage lo update cheyali anna kani, setItem ne use chestamu, endukante setItem lo same variable ki malli different value tho update cheste, ade update

// localStorage.setItem("just","dat");
// localStorage.setItem("just", "change");

//Note: localStorage lo data edaina store chesina, adi string format lo ne store avtundi
// kani, array or object format lo store cheyali ante, JSON.stringify() ni use cheyali

let array=["one","two","three"];
localStorage.setItem("arr",JSON.stringify(array));

// ippudu, array data ni get chayali ante, 
let val = JSON.parse(localStorage.getItem("arr"));

// JSON.parse() use chesi, string format lo unna data ni array or object format lo ki techukovachu


//-----------------------------------------------------------

// sessionStorage.setItem("tempo","jst like that");
// console.log(sessionStorage.getItem("tempo"));
// sessionStorage.removeItem("tempo");

//----------------------------------------------------------


// cookies: browser lo light weight data store cheyali ante cookies use chestamu (~ 4kb)
// Eppudu aithe cookies lo data store chestamo, page load/reload ainappudu data anedi aa url ki attach aipotundi
// Cookies anevi browser lo store ayyi untayi, so browser or tab close chesina kuda data delete avvadu, until manually deleted

// document.cookie = "email=test@test.com";



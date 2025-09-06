
let obj = {
    name: "tony",
    age: 45
}

// In the objects, we use dot notation to access the properties of the object.
// and we can also use bracket notation to access the properties of the object.
// console.log(obj.name);
// console.log(obj["age"]);

// We can also add new properties to the object.
// obj.cd="sai";
// console.log(obj);

// let det={
//     name: "Don",
//     address: {
//         city: "Shambala",
//         location: {
//             lng: 22.5,
//             lat: 33.2
//         }
//     }
// }

// console.log(det.address.location.lng);

// This is nesting and deep access to the object

//Destructuring in Objects
// let {lng, lat} = det.address.location;.

// let det={
//     name: "Rudra",
//     age: 99,
//     email: "anat@gmail.com"
// }

//To loop on objects
//For - in is used

// for (let key in det){
//     console.log(key, det[key])   
// }

// here, key variable provide keys of det object, det[key] provides the value associated with the key


//To find all the keys present in the OBJECT

// Object.keys(det)

//To Collect the data in the OBJECT

// Object.entries(det)


//how to copy an object
// (but by reference, so ikkada new object lo unna nested object emaina changes cheste avi original object lo kuda reflect avtay)

// let copyobj={...det};
// let copyobje = Object.assign({}, det);

// deep clone, ikkada new object anedi complete ga separate object, 
// so indulo chesina changes original object ni affect cheyavi

// let newObj=JSON.parse(JSON.stringify(det));

//Optional Chaining: it is a safe fetching part, endukante requested data lo , aa property undachu
// lekunte undakapovachu

// let det={
//     name: "Rudra",
//     age: 99,
//     email: "anat@gmail.com",
//     address:{
//         city: "bhoo"
//     }
// }

// console.log(det?.addresss?.city);

// Q: Create a student object with name, age, isEnrolled

// let st ={
//     name: "str",
//     age: 8,
//     isEnrolled: true,
// }


//Q: Can a key be boolean? yes
// let st = {
//     true: "yes"
// }

// console.log(st.true);

//use object.entries() to print all the key value pairs as:
// title: javascript
// time: 4 weeks

// let course = {
//     name: "javascript",
//     duration : "4 weeks"
// }

// Object.entries(course).forEach((val)=>{
//     console.log(val[0]+": "+val[1]);
// })








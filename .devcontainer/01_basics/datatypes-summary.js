//primitive and non-primitive or reference type
//on the basis how data is stored in the memory and how is it accessed from

// 7 types: String - call by value,Number,Boolean,null(empty),undefined,Symbol-for unique value,BigInt

//Reference types (Non-prmitive)-call by reference
//Array,Objects,Functions

//Js is dynamicaly types language

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",age:22,
}

const myFunction=function ()
{
    console.log("Hello world");
}
console.log(typeof outsideTemp);

//+++++++++++++++++++++++++++++++++++

//Stack (Primitive),Heap (Non-Primitive)

let myYoutubeName="mschaware04@gmail.com";
let anotherName=myYoutubeName;
anotherName="msc shorts";

console.log(myYoutubeName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne;

userTwo.email="msc.com";

console.log(userOne.email);
console.log(userTwo.email);


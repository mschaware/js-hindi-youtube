//either single or double quotes
const name="hitesh"
const repoCount=50

//console.log(name+repoCount+"value"); //outdated

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//modern way

const gameName = new String ('abcdefghijklmnop');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
//console.log(newString);

const aString=gameName.slice(-5,4);
//console.log(aString);

const newStringOne="      hie      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20',"-"));
console.log(url.includes("hitesh"));

console.log(gameName.split('-'));

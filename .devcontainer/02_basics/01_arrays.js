//arrays-create shallow copies(same reference copies)
//read mdn js
//we get prototype access
const myArr=[0,1,2,3,4,5,6,true,"hitesh"]//can be mixed 
const myHeros=["shaktiman","chs"];

const myArr2=new Array(1,2,3,4);
//console.log(myArr[0]);

//Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(8);//insert at the start
// myArr.shift();//remove from the front

// console.log(myArr.includes(5));//returns boolean

const newArr=myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

console.log("A",myArr);
const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.slice(1,3);
console.log(myn2);
//difference between slice and splice is splice make changes in original array but slice does not
console.log(myn1);

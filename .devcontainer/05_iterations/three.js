//for of-array specific
//[" ","",""]
// const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

const greetings="hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//Maps - unique values orderly
const map=new Map();
map.set('IN',"India")
map.set('USA',"United States of America");
map.set('Fr',"France")

//console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
const myObject={
    'game1':'sp',
    'game2':'dp'
}
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})

// const coding=["js","ruby","java","py"];
// const values=coding.forEach((item)=>{
//     //console.log(item);
//     return item
// })
// console.log(values);
//for each do not return any value

const myNums=[1,2,3,4,5,6,7,8,9];
// const newNums=myNums.filter((num)=>num>4)

// const newNums=myNums.filter((num)=>{return num>4})
// console.log(newNums);

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[
    {title:"Book one",genre:'Fiction',publish:1981},
    {title:"Book two",genre:'Non-Fiction',publish:1992},
    {title:"Book three",genre:'History',publish:1983}
];

const userBooks=books.filter((bk)=>bk.genre==='History')
console.log(userBooks);





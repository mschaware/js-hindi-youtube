const user={
    username:"mayur",
    price:999,

    welcomeMessage:function()
    {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username="san";
// user.welcomeMessage();

//console.log(this);

// function chai()
// {
//     let username="hitesh";
//     console.log(this);
// }
// chai();

// const chai=function chai()
// {
//     let username="hitesh";
//     console.log(this.username);
// }

const chai=()=>
{
    let username="hitesh";
    console.log(this);
}
//chai()

// const addtwo=(num1,num2)=> //normal arrow function 
// {
//     return num1+num2;
// }

//const addtwo=(num1,num2)=> num1+num2; //implicit arrow

//const addtwo=(num1,num2)=> (num1+num2); 

const addtwo=(num1,num2)=>({username:"mayur"})

console.log(addtwo(3,4));

//const myArray=[2,3,4,5];

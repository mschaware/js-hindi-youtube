function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName();

function addTwoNumbers(num1,num2)
{
    console.log(num1+num2);
}
//addTwoNumbers(3,4);

function addTwoNumbers(num1,num2)
{
    let result=num1+num2;
    return result;
}
const result=addTwoNumbers(2,6);
//console.log("result",result);

function login(username){

    if(username===undefined)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

//console.log(login("mayur"));
function calculateCartPrice(...num1)///... rest or spread operator
{
    return num1;
}
//console.log(calculateCartPrice(2));
const user={
    username:"hitersh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})
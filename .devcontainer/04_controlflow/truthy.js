const useremail="hi@.ai"
if(useremail)
{
    console.log("Got user email");
}
else 
{
    console.log("dont have user email");
}

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,Nan

//truthy values
//"0",'false'," ",[],{},function(){}

// if(useremail.length===0)
// {
//     console.log("Array is empty");
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty");
}

//Nullish Coalescing operator(??):null undefined
let val1;
// val1=5??10 //5
// val1=null??10 //10
// val1=undefined??15 //15
// val1=null??10??20   //10

//console.log(val1);

//Ternary operator
//condition?true:false
const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");
;

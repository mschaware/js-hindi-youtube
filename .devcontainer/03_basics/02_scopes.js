if(1)
{
    let a=10
    const b=20;
    var c=30;
}


// console.log(a);
// console.log(b);
//console.log(c); //it prints value of c which is the problem

function one()
{
    const username="mayur";

    function two()
    {
        const website="yt";
        //console.log(username);
    }
    //console.log(website);
    
    two();
}
one();

/*
interseting
*/
console.log(addone(5));

function addone(value)
{
    return value+1;
}
addone(5);

add2(5);//error as it holds the value of function in it
const add2=function(num){
    return num+2;
}
add2(5);
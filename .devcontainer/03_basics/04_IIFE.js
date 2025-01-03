//Immediately invked function experssions IIFE

//inter: global scopes ke pollution se problem hoti hai kayi baar
// to vo pollution hatane ke liye we use IIFE
(function chai()
{
    //named IIFE
    console.log(`DB connected`);
})();


((name)=>{
    console.log(`DB Connected two ${name}`);
    
} )("mayur")
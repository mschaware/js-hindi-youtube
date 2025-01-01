//singleton-constructors
//object.create

//object literals
const mySym=Symbol("key1");//can get interview questions

const JsUser={
    name:"Hitesh",
    "full name":"Hitesh Chaware",
    [mySym]:"myKey1",                //symbol needs key
    age:18,
    location:"jaipur",
    isLoggedIn:false,
    email:"mayur@google.com",
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="hitesh@gpt.com";
//Object.freeze(JsUser);
JsUser.email="hite";
// console.log(JsUser);

JsUser.greeting=function () {
    console.log("Helo js user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


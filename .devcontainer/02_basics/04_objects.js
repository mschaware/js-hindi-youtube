//const tinderUser=new Object();     //singleton object
const tinderUser={};         //non-single ton object
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"mayur",
            lastname:"chaware"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2) //{}
const obj3={...obj1,...obj2}//spread operator
//console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInsturctor:"hitesg"
}

//course.courseInsturctor
const {courseInsturctor:ins}=course //destructor object

console.log(ins);

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {}
]
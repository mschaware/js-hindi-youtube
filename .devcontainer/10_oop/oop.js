const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("Got user details from database");
        console.log(`Username:${this.username}`);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

const promiseOne=new Promise()
const date=new Date();

function user(username,loginCount,signedIn)
{
    this.username=username;
    this.loginCount=loginCount;
    this.signedIn=signedIn

    return this;
}
const userone = new user("hitesh",12,true);
const usertwo=new user("chaiaurcode",1,false);
console.log(userone);

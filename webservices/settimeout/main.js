function lik(){
    console.log("I am LIKI");
}
let myTimeout = setTimeout(()=>{
    console.log("I am SAI");
},2000)

clearTimeout(myTimeout)
let a = 23
let b = 45
let c = a + b
console.log("c value is:"+c);
lik()


// function likki(){
//     console.log("i am likitha");
    
// }
// function harika(){
//     console.log('i am harika');
    
// }
// setTimeout(()=>{
//     console.log("hello");
    
// },3000)
// let mytimeout=setTimeout(()=>{
//     console.log("i am Swapna");
    
// },3000)
// clearTimeout(mytimeout)

// let myintervel=setInterval(()=>{
//     console.log("i have apple");
    
// },1000)
// clearInterval(myintervel)
// setTimeout(likki,2000)
// let a=22
// let b=9
// let c=a+b
// console.log("c value is:"+c);
// harika()

//////////
let myintervel=setInterval(()=>{
    console.log("i am likki");
    
},1000)
setInterval(()=>{
    clearInterval(myintervel)
},7000)
console.log("i am harika");

let time=1
let myinter =setInterval(()=>{
    console.log(time);
    time= time+1
},1000)
setInterval(()=>{
    clearInterval(myinter)
},7000)

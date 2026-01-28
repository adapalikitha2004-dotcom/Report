import {Observable, from} from "rxjs";

let user={
    name:"Harika",
    email:"HAr@gmail.com",
    phone:8765432189
}

//this block of code is promise
// let p = new Promise((resolve,reject)=>{
//     if(user){
//         resolve(user)
//     }else{
//         reject("user is undefined")
//     }
// })
// p.then(response=>{
//     console.log(user);
// }).catch(err=>{
//     console.log(err.name);
// })


//this block of code is observable
// let obj=new Observable((subscriber)=>{
//     if(user){
//         subscriber.next(user);
//     }else{
//         subscriber.error("user is undefined")
//     }
// })
// obj.subscribe({
//     next:res=>{
//         console.log(user);
//     },
//     error:err=>{
//         console.log(err);
//     },
//     complete:()=>{
//         console.log("completed");
        
//     }
// })

//by using try and finally complete is going to print
// let obj=new Observable((subscriber)=>{
//     try{
//         if(user){
//             subscriber.next(user);
//         }else{
//             subscriber.error("user is undefined")
//         }
//     }finally{
//         subscriber.complete();
//     }
// })
// obj.subscribe({
//     next:res=>{
//         console.log(user);
//     },
//     error:err=>{
//         console.log(err);
//     },
//     complete:()=>{
//         console.log("completed");
        
//     }
// })

// another for subscribe
// obj.subscribe(data=>{
//     console.log(data);
// })

// with functions
// obj.subscribe(function(res){
//     console.log(res);
// })

// // lambda expression
// obj.subscribe((res)=>{
//     console.log(res);
// })

//explanation for setinterval and settimeout
// let myinter=setInterval(() => {
//     console.log("hi");
// },1000);
// let mytimeout=setTimeout(()=>{
//     clearInterval(myinter)
//     console.log("i am done");
// },5000)
// clearTimeout(mytimeout)

// let obj = new Observable(subscriber=>{
//     let a=1
//     let myinterval = setInterval(() => {
//         subscriber.next("hello"+ a++)
//     },1000);
//     setTimeout(()=>{
//         clearInterval(myinterval)
//         subscriber.complete()
//     },10000)
//     function unsubscribe(){
//         clearInterval(myinterval)
//     }
//     return unsubscribe
// })

// let sub=obj.subscribe({
//     next:res=>{
//         console.log(res);
//     },
//     error:err=>{
//         console.log(err);
//     },
//     complete:()=>{
//         console.log("completed")
//     }
// })
// setTimeout(()=>{
//    sub.unsubscribe()
// },5000)

//converting promise into observables
let p = new Promise((resolve,reject)=>{
    if(user){
        resolve(user)
    }else{
        reject("no user")
    }
})
let obj = from(p) //converting promise into observable in this way we write

obj.subscribe({
    next:res=>{
        console.log(res);
    },
    error:err=>{
        console.log(err);
    }
})
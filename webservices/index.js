
//how to create a promise
// let p = new Promise((resolve,reject)=>{})
//     console.log(p);

//how to quatilize promise
// let myfun = function(resolve,reject){
//     let status=false
//     if(status){
//         resolve("i succeed");
//     }else{
//         reject(" i failed")
//     }
// }
// let p = new Promise(myfun)
// p.then(result=>{
//     console.log("i am from error");
//     console.log(result);
// }).catch(err=>{
//     console.log(" i am from error");
//     console.log(err);
// }).finally(()=>{
//     console.log("i completed");
// })

//another example to do for 2 seconds,here promise is also a threat
// let p = new Promise((resolve)=>{
//     let user={
//         name:"liki",
//         email:'lik@gmail.com',
//         phone:9786543234
//     }
//     setTimeout(()=>{
//         resolve(user)
//     },2000)
// })
// p.then(result=>{
//     console.log(result);
// })

// by using asynchronous function with promise
// async function getData(){
//     console.log("i am first line");
//     let p = new Promise((resolve,reject)=>{
//         let user = {
//             name:"sai",
//             email:"sai@gmail.com",
//             phone:8765432198
//         }
//         setTimeout(()=>{
//             resolve(user)
//         },2000)
//     })
//     let result = await p
//     console.log(result);
//     console.log("i am last line");
// }
// getData()

//with status false case try and catch usage is used here within promise
// async function getData() {
//     console.log("first line");
//     let p = new Promise((resolve,reject)=>{
//         let status = false  //we can also use true

//         if(status){
//             resolve("i succeed");
//         }else{
//             reject("i failed");
//         }
//     })

// try{
//     let result = await p
//     console.log(result);
// }catch(error){
//     console.log(error);
// }
// console.log("last line");
// }
// getData()

//by using the different methods
console.log("i am first ");
let p = new Promise((resolve,reject)=>{
    let status = true
    if(status){
        setTimeout(()=>{
            resolve("i succeed 1");   //here this is also a promise
        },1000)
    }else{
        reject("i failed 1");
    }
})
let p1 = new Promise((resolve,reject)=>{
    let status = true
    if(status){
        setTimeout(()=>{
            resolve("i succeed 2");
        },2000)
    }else{
        reject("i failed 2");
    }
})
let p2 = new Promise((resolve,reject)=>{
    let status = true
    if(status){
        setTimeout(()=>{
            resolve("i succeed 3");
        },3000)
    }else{
        reject("i failed 3");
    }
})
// Promise.all([p,p1,p2]) 
//here one rejected all are failed ,all success mean only it will print all success
// Promise.allSettled([p,p1,p2])
//here it will print the all status and reason what for it is like fulfilled and rejected
// Promise.race([p,p1,p2])
// here which comes first it will print 1st,fast promise it prints first,whether it is t or f  it prints 
Promise.any([p,p1,p2])
//here any means it prints the true or fastest cases first and prints the succeed ones
.then((result)=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})
console.log("i am last");

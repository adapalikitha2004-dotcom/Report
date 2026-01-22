
//simple class program 
// class Demo{
//     constructor(){
//         console.log("I am Likitha");
        
//     }
// }
// new Demo();

//example
// class Demo{
//     a = 25
//     constructor(){
//         let b = 67;
//         this.b=34;
//         console.log("I am Likitha");
//         console.log(this);
//         console.log(b);
        
//     }
// }
// let d = new Demo();

class Demo{
    a = 25
    name = "harika"
    constructor(){
        console.log("I am Likitha");  
    }
    likki(){
        let a = 89;
        console.log("hello");
        console.log(this.a);
        console.log(a);
    }
}
let d = new Demo();
d.name="hiiii";
console.log(d.a);
console.log(d.name);
d.likki()


// class Demo{
//     a = 25
//     name = "harika"
//     constructor(){
//         console.log("I am Likitha");  
//     }
//     likki(){
//         let a = 56;
//         console.log("hello");
//         console.log(this.a);
//         console.log(a);
//         console.log(arguments);
        
//     }
//     harka(){
//         console.log("heyy hi likitha");
        
//     }
// }
// let d = new Demo();
// let d2 = new Demo();
// d.likki(34,45,56,"abc");
// d2.likki("99",true);
// d.harka();

// class Demo{
//     a = 25
//     name = "harika"
//     constructor(){
//         console.log("I am Likitha");  
//     }
//     likki(a,b,...c){
//         console.log("hello");
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         return "welcome"
//     }
//     harka(){
//         console.log("heyy hi likitha");
//     }
// }
// let d = new Demo();
// let msg=d.likki(5,45,56,78);
// console.log(msg);

//static methods and variables
// class Demo{
//     a = 25
//     name = "harika"
//     constructor(){
//         console.log("I am Likitha");  
//     }
//     likki(){
//         console.log("hellowwww");
//     }
//     static likki(){
//         console.log("welcome");
//     }
//     harka(){
//         console.log("heyy hi likitha");
//     }
// }
// let d = new Demo();
// d.likki();
// Demo.likki();

//inheritance
// class Demo{
//     a = 25
//     name = "harika"
//     constructor(){
//         console.log("I am Likitha");  
//     }
//     likki(){
//         console.log("hello");
//     }
// }
// class Test extends Demo{

// }
// let t = new Demo();
// console.log(t.a);
// console.log(t.name);
// t.likki();

//practice questions logically
// for( var i=0;i<5;i++){
//     function example(n){
//     console.log(i);  
// }
// example(5);
// }


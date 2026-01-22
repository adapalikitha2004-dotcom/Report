// function ram(){
//     console.log("hello");
    
// }
// function sai(){
//     console.log("hiii");
    
// }
// ram();
// sai();

// //lambda expressions

// // 0 0
// function liki(){
//     console.log("hi liki");
// }
// let sai = function(){
//     console.log("hi sai");
// }
// let raj = () => {
//     console.log("hii sai");
// }
// liki();
// sai();
// raj();

// // 1 0
// function liki1(a){
//     console.log("hi liki");
// }
// let  sai1= function(a) {
//     console.log(" hi sai1");  
// }
// let raj1 = a => {
//     console.log(" hi sai1"); 
// }
// liki1();
// sai1();
// raj1();

// // 0 1
// function liki2(){
//     console.log("hi liki");
//     return "welcome"
// }
// let sai2 = function(){
//     console.log("hi sai2");
//     return "welcome"
// }
// let raj2 = () => {
//     console.log("hi sai2");
//     return "welcome"
// }
// let a1 = liki2();
// let a2 = sai2();
// let a3 = raj2();
// console.log(a1+" "+a2+" "+a3);

// // 1 1
// function liki3(a,b){
//     this.name = "samantha"
//     // console.log(arguments); // {0:a,1:b}
//     // console.log(this); // object details our {"name":"sai"}
//     console.log("hi liki");
//     return "hello";
// }
// let sai3 = function(a,b){
//     this.name = "samantha"
//     // console.log(arguments); // {0:a,1:b}
//     // console.log(this); // object details our {"name":"sai"}
//     console.log("hi sai3");
//     return "hello";
// }
// let raj3 = (a,b) => { 
//     console.log(); //here before attaching variable also we can print this
//     this.name = "samantha"
//     // console.log(arguments); // object details our argument will not attach to it
//     // console.log(this);  // {'name':'raj'}
//     console.log("hi raj3");
//     return "hello";
// }

// let b1 = liki3(2,3);
// let b2 = sai3(4,5);
// let b3 = raj3(6,7);
// console.log(b1+" "+b2+" "+b3);

// different ways of lambda expression
// let sai = () => {
//     console.log("saiiiiii");
// }
// sai()

// let sai2 = (a) => {
//     console.log(" i am sai"+a);
// }
// sai2(23);

// let sai3 = a => {
//     console.log(" i am sai");
// }
// sai3(23);

// let sai4 = ( ) => {
//     return "abc";
// }
// let a1 = sai4();

// let sai5 = ( ) => "abc";
// let a2 = sai5();
// console.log(a1+" "+a2);

// let person = function() {
//     this.name = "likitha";
//     this.email = "lik@gmail.com";
//     this.age = "21";
//     return this
// }

// let person2 = () => {
//     this.name = "likitha";
//     this.email = "lik@gmail.com";
//     this.age = "21";
//     return this
// } 

// let p = person.call({'gender':'female'});
// console.log(p);

// let p2 = person2.call({'gender':'female'});
// console.log(p2);

//callback function
// let a = 46;
// let b = 6 ;
// function calculator(display){
//     let sum = a + b;
//     let sub = a - b ;
//     let mul = a * b;
//     let div = a / b;
//     display(sum,sub,mul,div);
// }
// function display(sum,sub,mul,div){
//     console.log("sum:"+sum);
//     console.log("sub:"+sub);
//     console.log("mul:"+mul);
//     console.log("div:"+div);
// }
// calculator(function(sum,sub,mul,div){
//     console.log("sum:"+sum);
//     console.log("sub:"+sub);
//     console.log("mul:"+mul);
//     console.log("div:"+div);
// });

//example 
// let names =['sid','raj','rams']
// let namecallback = function(name,index,array){
//     console.log(name+" "+index);
    
// }
// names.forEach(namecallback)

// let sai = () => "45";
// console.log(sai());






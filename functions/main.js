// function liki(){
//     console.log("hello");
// }
// liki()

// console.log("welcome");
// let a = 67;
// function venu(){
//     console.log("I am from hyd");
//     console.log(arguments);
    
// }
// venu()
// console.log("hello");
// venu()
// console.log(a);

// function samy(a,b,...c){
//     console.log("I am Likitha");
//     console.log(arguments);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// samy(23,34,546,645,56,786)



// function venu(a){
//     console.log(" iam likitha");
//     return arguments;   
// }
// let b = venu(24)
// console.log(b);

// function liki2(){
//     this.phone="8979485763";
//     console.log(" I am liki");
//     console.log(arguments);
//     console.log(this);   
// }
//  liki2.call({"name":"ramya","email":"ramya@gmail.com"})

// function rams(){
//     this.phone="8745684476";
//     console.log(this);
// }
// let v = new rams();

// function person(name,email,phone){
//     this.name = name
//     this.email = email
//     this.phone = phone
//     return this
// }
// let p1 = new person('lilly','lilly@gmail.com','6854693876')
// let p2 = new person('sri','sri@gmail.com','7868764378')
// let p3 = new person('ram','ram@gmail.com','876584768')
// let persons =[p1,p2,p3]
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(persons);


function forEach(aa,display){
    for(i=0;i<aa.length;i++){
        display(aa[i],i,aa)
    }
}
let aa=[34,56,67,87]
forEach(aa,display)
function display(a,index,array){
    console.log(a+" "+index+" "+array);
}

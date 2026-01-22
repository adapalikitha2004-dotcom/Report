
// let name = "venu";
// let name2 = "raj";
// let name3 = "sai";
// console.log(name);
// console.log(name2);
// console.log(name3);
// let person = function(){
//     console.log();
// }
// let names = ['venu','raj','sai',34,person]
// console.log(names);



//create
// let names = [ 'venu','raj','sai'];
// console.log(names);


//modifying of array
// let names = [ 'venu','raj','sai'];
// names.push('veda');
// console.log(names);

// const names = ['venu','raj','sai'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//modifying main
// let names = ['sai','saivee','sita']
// names[2]='ram';
// names.push('ramu');
// names.pop();
// names[5]='liki';
// console.log(names);

//concating in array 
// const males=['venu','raj'];
// const females=['saivee','sita'];
// const names=males.concat(females);
// console.log(names);

//delete
// const names = ['sai','raj','ram']
// delete names[1];
// console.log(names);

// read methods in array
// const names = ['venu','raj','sai'];
// console.log(names);

// for(i=0;i<names.length;i++){
//     console.log(names[i]); 
// } 

// convert string into array
// const name = 'adapalikitha';
// for(let i in name){
//     console.log(name[i]);
// }

// const names = 'adapalikitha';
// for(let name of names){
//     console.log(name);
// }

const names1 = 'adapalikitha';
for(let [index,name] of  names1.split(' ').entries()){
    console.log(name+" "+index);
}
u



// one method in array
// const names =['sai', 'ram', 'raj'];
// names.forEach(myname);
// function myname(name,index,array){
//     console.log(name+" "+index);
// }

//another methods for array 1.map() method
// const names = ['sai','raj','ram'];
// const names2 = names.map((names)=>{
//     return names+=" GVS"
// });
// console.log(names2);

// //example for array that is to check whethe person is minor or major
// let ages = [2,4,14,17,34,45,59,88];
// let MajororMinor = ages.map((age)=>{ // which returns entire values,and also can be modified
//     if(age<=18){
//         return "minor";
//     }else{
//         return "major";
//     }
// })
// console.log(MajororMinor);

//if we want just only major we use filter method
// let ages = [3,6,15,17,19,34,87,99];
// let minors = ages.filter((age)=>{  // checks whether it is there are not so that i will prints those values
//     if(age<18){
//         return age;
//     }
// })
// console.log(minors);

// some() method to tell there are minor 
// let ages = [3,5,15,17,29,34,87,99];
// let anyMinor = ages.some((age)=>{ //atleast one should satisfy sothat it will prints true for that given condition
//     return age <= 18;
// })
// console.log(anyMinor);


//search technique in arrays
// const names = ['sai','sita','ram','sai']
// let index =names.indexOf('ram'); //checks for index
// console.log(index);
// let index2 = names.lastIndexOf('sai') //checks for last index element
// console.log(index2);

// let isAvailable = names.includes('sai'); // checks whether the element is present or not
// console.log(isAvailable);

// let result = names.find((name)=>{ //checks whether the letter is there or not and prints that element
//     if(name[0]=='s'){
//         return name
//     }
// })
// console.log(result);

// let resultIndex = names.findIndex((names)=>{ //checks for the index element number and it prints it
//     if(names[0]==='s'){
//         return names
//     }
// })
// console.log(resultIndex);


//print given numbers
for(let i=1;i<=10;i++){
    console.log(i);
}

let i=1
while(i<=10){
    console.log(i);
    i++
}

//print the numbers in reverse
let j=10
while(j>=1){
    console.log(j);
    j--
}

let persons=10
for(i=1;i<persons;i++){
    console.log(i);
    if(i==5){
        break;
    }
}

abc:for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        console.log("i is"+i+"j is"+j);
        if(i==5 && j==5){
            break abc
        }
    }
}


//prime number or not
for(i=1;i<=100;i++){
    let count=0
    if(i%2==0){
        continue
    }
    for(j=2;j<i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==0){
        console.log(i+"is prime number");
    }
}

//even or not
for(i=1;i<=10;i++){
    if(i%2==0){
        console.log(i+"is even")
    }
}

//print sathwik
let a=0
while(a!=5){
    console.log("sathwik");
    a++
}

for(i=0;i<=3;i++){
    console.log(i);
}
console.log('sathwik');

//second method
let n=0
do{
    console.log('sathwik');
}
while(n<=3){
    console.log(n);
    n++
}

// sum of two digits
let a2 = 123
let sum = 0
let p = a2
while( p > 0)
{
    let digit = p % 10
    sum+= digit
    p = parseInt(p / 10)
}
console.log("sum of digit", sum);



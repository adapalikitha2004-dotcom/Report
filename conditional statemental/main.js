  let a=90
  let b=87
  let c=45
  console.log(a==b);
  console.log(a===b);
  console.log(a!=b);
  console.log(a!==b);
  console.log(a<b);
  console.log(a>b);
  console.log(a<=b);
  console.log(a>=b);
  console.log(a>b && a>c);
  console.log(a>b || a>c);
  console.log(!(a>b && a>c));

  let x=78
  let y=67
  if(x=y){
    console.log("she is playing");
  }
  console.log("she is not playing");

  let s=23
  let f=45
  let k=67
  if(s>f && s>k){
    console.log('s is big');
  }else if(s>k){
    console.log('f is big');
  }else{
    console.log('k is big');

  }
  console.log('there in hyd');


  let q=23
  let v=45
  let m= q>v ? q:v;
  console.log(m);

  let g='iklkjkljl'
  console.log(g ?? 'no value');
  
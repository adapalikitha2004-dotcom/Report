//2025-12-30T01:20:23:124z
// let d = new Date();
// console.log(d.toISOString()); // used for GMT 00
// console.log(d.toLocaleString()); //short datetime
// console.log(d.toString()); //long datetime
// console.log(d.toLocaleDateString()); //prints only date
// console.log(d.toLocaleTimeString()); // prints only time
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.getFullYear()); //prints year like 2025
// console.log(d.getMonth()); //prints the current month
// console.log(d.getDate());
// console.log(d.getHours()+" "+d.getMinutes());
// console.log(d.getMinutes());
// console.log(d.getMilliseconds());
// console.log(d.getDay());

// console.log(d.getUTCFullYear()); //prints year like 2025
// console.log(d.getUTCMonth()); //prints the current month
// console.log(d.getUTCDate());
// console.log(d.getUTCHours());
// console.log(d.getUTCMinutes());
// console.log(d.getUTCMilliseconds());
// console.log(d.getUTCDay());

// console.log(d.getTimezoneOffset());
// console.log(d.getTime());


//another way for creating custom date
//2026-01-01T08:30:45:234
// let d = new Date(0); //milliseconds
// console.log(d.toISOString());

// let d1 = new Date(550); //adds at milliseconds
// console.log(d1.toISOString());

// let d2 = new Date(1000); // one second
// console.log(d2.toISOString());

// let d3 = new Date(1000*60); //one minute
// console.log(d3.toISOString());

// let d4 = new Date(1000*60*60); //one hour
// console.log(d4.toISOString());

// let d5 = new Date(1000*60*60*24); //one day
// console.log(d5.toISOString());

// let d6 = new Date(1000*60*60*24*30); //one month
// console.log(d6.toISOString());
// let d7 = new Date(1000*60*60*24*31); //one month
// console.log(d7.toISOString());

// let d8 = new Date(1000*60*60*24*31*12); //one year
// console.log(d8.toISOString());
// console.log(1000*60*60*24*31*12);

// let d9 = new Date(1000*60*60*24*31*12*55); // checking with difference and printing 2026
// console.log(d9.toISOString());

// let d = new Date();  // currrent time in milliseconds
// console.log(d.getTime());
 
//conversion of millisecond to particular value
// let d = new Date();
// let time = d.getTime();
// console.log(time); //milliseconds
// console.log(time/1000); //sec
// console.log(time/(1000 * 60)); // minute
// console.log(time/(1000 * 60 * 60)); // hour
// console.log(time/(1000 * 60 * 60 * 24)); // day
// console.log(time/(1000 * 60 * 60 * 24 * 30)); // month
// console.log(time/(1000 * 60 * 60 * 24 * 30 * 12)); // year

// checking the difference between the past and the current year
//  let d = new Date("2025-12-30T06:30:45.500z");
//  let d2 = new Date("2026-12-30T06:30:45.500z");
//  console.log(d);
//  console.log(d2);

//  let dif = d2.getTime() - d.getTime();
//  let yrs = parseInt(dif / (1000 * 60 * 60 * 24 * 30 * 12));
//  let remain = dif % (1000 * 60 * 60 * 24 * 30 * 12);

//  let months = parseInt(dif / (1000 * 60 * 60 * 24 * 30 ));
//  remain = dif % (1000 * 60 * 60 * 24 * 30 );

//  let days = parseInt(dif / (1000 * 60 * 60 * 24 ));
//  remain = dif % (1000 * 60 * 60 * 24 );

//  let hrs = parseInt(dif / (1000 * 60 * 60 ));
//  remain = dif % (1000 * 60 * 60 );

//  let min = parseInt(dif / (1000 * 60 ));
//  remain = dif % (1000 * 60 );

//  let sec = parseInt(dif / 1000);
//  remain = dif % 1000;
  
//  let millisecond = remain 
//  console.log("years: "+yrs+",months: " +months+" ,days: "+days+" ,hrs: "+hrs+" ,min: "+min+" ,sec: "+sec+" ,millisecond: "+millisecond);
 
// giving values directly to print in the current time details all
let d = new Date(2025,15);
console.log(d.toString());






// primitive data types 

// Number
let balance=10;
let anotherbalane=new Number(120);

// console.log(anotherbalane.valueOf());

// console.log(typeof(balance));
// console.log(typeof(anotherbalane));


// Boolean

let isactive=true;
let isreallyactive=new Boolean(true);

// null / undefined

let firname;
let checknull=null;
// console.log(checknull);

// console.log(firname);

// String 

let mystring="hello";
let mystring2=" new hello";
let firtsname='chandan';

let oldgreet=firtsname+" "+'hello';
// console.log(oldgreet);

let greetmessage=`hello ${firtsname} tiwari`
// console.log(greetmessage);

let demo=   `hello ${2*5}`;
// console.log(demo);

// Symbol :- Always provide unique value. it always return a symble that's guarantee to be unique

let sm1=Symbol("chandan");
let sm2=Symbol("chandan");
console.log(sm1== sm2);


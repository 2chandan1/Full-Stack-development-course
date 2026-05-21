// WHILE LOOP
let sum=0;
let i=0;
while(i <= 5){
    sum=sum+i
    i++;
}
// console.log(sum);

// write a loop tha counts down from 5-1

let count =[];
let j=5;
while(j>0){
    count.push(j)
    
    j--;
}
// console.log(count);

// Do while loop exercise

// let teacollection=[];
// let tea;
// do {
//     tea= prompt("enter your favorite tea (type stop to finish)");
//     if(tea !== "stop"){
//         teacollection.push(tea);
//     }
//     // console.log(teacollection);
    
// } while (tea !== "stop");

// Write do while loop that add number from 1 - 3 and find the total and store the value;
let num=1;
let total=0;
do {
    total+=num;
    num++;
   
    
} while (num<=3);
//  console.log(total);


 // Write a "for" loop for multiplies each element in the array [2,4,6] by 2 and store result in new array called `multipliedNumbers`

 let numbers=[2,4,6];
 let multipliedNumbers=[]
 for(let item=0;item<numbers.length;item++){
     multipliedNumbers.push(numbers[item]*2);
 }
//  console.log(multipliedNumbers);

// Write a for loop that lists all the cities in the array [""] and stor each city in a new array called "cityList".

let cities=["new York","cicago","delhi","mumbai"];
let citylist=[];
for (let c=0;c<cities.length;c++){
    citylist.unshift(cities[c])
}
// console.log(citylist);
    
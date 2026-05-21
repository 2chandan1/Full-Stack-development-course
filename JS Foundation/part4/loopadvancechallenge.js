// Q1:- Write a for loop that loops through the array ["green tea","black tea","chai","red tea","ollong tea"] and stop the loop when it finds chai.
//  store all the tea befor "chai" in a new array called selectedtea
 let teaarr= ["green tea","black tea","chai","red tea","ollong tea"]
 let selectedtea=[]
 for (let i=0;i<teaarr.length;i++){
     selectedtea.push(teaarr[i])
    if(teaarr[i]=="chai"){
         break
    }
    selectedtea.push(teaarr[i])
 }
 console.log(selectedtea)

// Q2 :- Write a for loop that loop through the array ["London","newyork","tokyo","paris"] and skipd tokyo . Store other citie in a new array called visitedCities;

let cities=["London","newyork","tokyo","paris"]
let visitedCities=[];
for(let j=0;j<cities.length;j++){
    if(cities[j]=="tokyo"){
        continue;
    }
    visitedCities.push(cities[j])
}
console.log(visitedCities);


// Q3 :- Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when 4 is found and store the new array in `smallnumbers`

let numbers=[1,2,3,4,5]
let smallNumbers=[]
for (const num of numbers) {
    if(num==4){
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);

// Q4 use a for of loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skipp "herbal tea". Store the others teas in a array names preferredTea.

let teas=["chai","green tea","herbal tea","black tea"] 
let preferredTea=[];
 for (const chai of teas) {
    if(chai=="herbal tea"){
        continue
    }    
    preferredTea.push(chai)
 }
 console.log(preferredTea);

// Q5:- Use a for-in loop to loop through an object containing city population. Stop the loop when the populations of "berlin" is found and store all previous cities populations in a new object named 'cityPopulations.

let citiesPopulation={
    "London":89000,
    "New York":98503,
    Berlin:1099889,
    Paris:3420183
}
let cityNewPopulations={};
console.log(Object.keys(citiesPopulation));
console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) { 
    
    // key==value
    if(city=="Berlin"){
        break
    }
    cityNewPopulations[city]=citiesPopulation[city];
   
}
console.log(cityNewPopulations);

// Q6 :-  Use a for-in loop to loop through an object containing city population. Skip any city with a population below 3 million and  store rest cities  in a new object named 'largeCities.

let worldCities={
    "London":5000000,
    "New York":9000000,
    Berlin:2000000,
    Paris:3000000
}
let largeCities={};
for (const key in worldCities) {
    if(worldCities[key] < 3000000){
        continue
    }
    largeCities[key]=worldCities[key]
}
console.log(largeCities);


// FOR-EACH LOOP

// Q7:- Write a for-each loop that iterates through the array ['earlgrey',"green tea","chai","oolong tea"] stop the loop when the chai is found and store all the privious teas in an new array called 'availableTeas'

let teasType=['earl grey',"green tea","chai","oolong tea"] 
let availableTeas=[]
teasType.forEach(element => {
    if(element==="chai"){
        return;
    }
    availableTeas.push(element)
});
console.log(availableTeas);

// Q8 : Write a for each loop that iterate through the array ["Berlin","Tokyo","Paris","New York"].skip "Paris" and store all others in a new arrat called 'traveledCity'.

let citis=["Berlin","Tokyo","Paris","New York"]
let traveledCity=[]
citis.forEach(city=>{
    if(city=="Paris"){
        return;
    }
    traveledCity.push(city)
})
console.log(traveledCity);

// Q9:- Write a for loop that itereate through array [1,2,3,4,5]
// skip the number 3 and multiply the rest by 2 and store the array in new array called "doubledNumber"
let numbersarr=[1,2,3,4,5]
let doubledNumber=[]
for(let k=0;k<numbersarr.length;k++){
    if(numbersarr[k]==3){
        continue
    }else{
        doubledNumber.push(numbersarr[k]*2)
    }

}
console.log(doubledNumber);

// Q10 :- Use a for-of loop to iterate through the array ['earl grey',"green tea","chai","oolong tea","jasmin tea"] and stop when the length of current tea name is greater than 10. Store tea iterated over in a array names 'shorttea'.


let myteas= ['grey432fr',"green","chai","oolong tea3","jasmin tea"]
let shortTea=[]
for (const element of myteas) {
    if(element.length>10){
        break
    }
    shortTea.push(element)
}
console.log(shortTea);



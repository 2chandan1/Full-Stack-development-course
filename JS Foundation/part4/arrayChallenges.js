/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors=["green tea", "black tea", "oolong tea"]
let firstTea=teaFlavors[0];
console.log(firstTea);


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities=["London","Paris","New York"];
let favoritCity=cities[2];
console.log(favoritCity);


/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teatypes=["herbal tea","white tea","masala chai"]
teatypes[1]="jasmine tea"
console.log(teatypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited=["Mumbai","Sydney"];
citiesVisited.push("Berlin")
console.log(citiesVisited);


/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders=["chai","iced tea","matcha","earl grey"];
const lastOrder=teaOrders.pop()
console.log(teaOrders);

console.log(lastOrder);


/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas=["green tea","oolong tea","chai"]

const softCopyTeas=popularTeas;
popularTeas.pop()
console.log(popularTeas);
console.log(softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities=["Berlin","Singapore","New York"];
const hardCopyCities=[...topCities]; 
const hardCopyCities=topCities.slice(1)
topCities.push("Delhi");
console.log(topCities);
console.log(hardCopyCities);


/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities=["Paris","Rome"]
let asianCities=["Tokyo","Bangkok"]
// const worldCities=europeanCities + asianCities // strings not array  Paris,RomeTokyo,Bangkok
// const worldCities= [europeanCities,asianCities] // cretaes 2d arrray [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]
const worldCities=europeanCities.concat(asianCities)  /// [ 'Paris', 'Rome', 'Tokyo', 'Bangkok' ]
console.log(worldCities);


/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu=["masala chai","oolong tea","earl grey"];
const menuLength=teaMenu.length;
console.log(menuLength);



/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList=["Kyoto","London","Cape town","Vancouver"];
const isLondonInList=cityBucketList.includes("London");
console.log(isLondonInList);

let arr=[1,2,3,4];
console.log(arr.indexOf(3));



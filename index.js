// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const firstTwo=drivers.slice(0,2);
const lastTwo=drivers.slice(2,drivers.length);

function returnFirstTwoDrivers(){

   return firstTwo;

}
const ans=returnFirstTwoDrivers();
console.log("First two sliced: "+ ans);


function returnLastTwoDrivers(){
 
    return lastTwo;
 
 }
 const ans2=returnLastTwoDrivers();
 //console.log("Last two: "+ ans2);


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


const createFareMultiplier = function (myMultiplier) {
  return function(value) {
    return myMultiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }


//function selectingDrivers(firstTwo,lastTwo){

//   returnFirstTwoDrivers(drivers);
  // returnLastTwoDrivers(drivers);


    
    //returnLastTwoDrivers());
   
    //returnFirstTwoDrivers();
   // returnLastTwoDrivers();




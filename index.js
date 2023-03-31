// Code your solution in this file!
const returnFirstTwoDrivers = function() { 
   const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
   return drivers.slice(0,2)
} 

const returnLastTwoDrivers = function() { 
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2)
 } 

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
   return function fareMultiplier () {
      const fare = 5

      return fare * 5
   }
}



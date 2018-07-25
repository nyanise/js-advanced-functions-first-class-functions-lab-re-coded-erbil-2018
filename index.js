// Code your solution in this file!
// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers =
function(driversArray)
{
    let copyArray = driversArray.slice(0,2);
    return copyArray;
};

const returnLastTwoDrivers =
function (driversArray)
{
  let copyArray=driversArray.slice(driversArray.length-2);
  return copyArray;
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];  
const createFareMultiplier = function(multiplyValue)
{
 return  function(value){return multiplyValue*value;};
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (drivers, whichDrivers) {
 return whichDrivers(drivers);
}

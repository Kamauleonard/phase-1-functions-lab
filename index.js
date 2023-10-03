// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {

    let destination = 42;

    let distanceFromHqInBlocks = Math.abs(pickup - destination);
    return distanceFromHqInBlocks;
}
console.log(distanceFromHqInBlocks(43));

// Solution 2

function distanceFromHqInFeet(pickup) {

    let destination = 42;

    let distanceFromHqInFeets = Math.abs(pickup - destination) * 264;
    return distanceFromHqInFeets;
}
console.log(distanceFromHqInFeet(43));


// solution 3distanceFromHqInFeet

function distanceTravelledInFeet(pickup, destination) {


    let distanceFromHqInFeets = Math.abs(pickup - destination) * 264;
    return distanceFromHqInFeets;
}
console.log(distanceTravelledInFeett(43, 48));

// solution 4

function calculatesFarePrice(start, destination) {

    let distanceInFeet = Math.abs(start - destination) * 264;
 
    if (distanceInFeet <= 400) {
        return 0; 
      } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; 
      } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25; 
      } else {
        return 'cannot travel that far'; 
      }
  }

  
  console.log(calculatesFarePrice(43, 43));
  console.log(calculatesFarePrice(34, 32));
  console.log(calculatesFarePrice(50, 58));
  console.log(calculatesFarePrice(34, 24));

  
  
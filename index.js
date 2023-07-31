// Code your solution in this file!
let hq = 42;

function distanceFromHqInBlocks(someValue) {
    return Math.abs(hq - someValue);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * .02;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else if (feet > 2500) {
        return `cannot travel that far`;
    }
}
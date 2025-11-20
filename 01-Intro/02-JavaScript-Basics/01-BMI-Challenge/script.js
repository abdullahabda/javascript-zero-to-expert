// Coding Challenge #1 - BMI Comparison

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / (markHeight * markHeight);
const BMIJohn = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI:", BMIMark);    // ~27.31
console.log("John's BMI:", BMIJohn);    // ~24.19

const markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John?", markHigherBMI); // true

// Bonus: Test Data 2 (uncomment to test)
/*
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const BMIMark2 = markMass2 / (markHeight2 * markHeight2);
const BMIJohn2 = johnMass2 / (johnHeight2 * johnHeight2);
console.log("Test Data 2 - Mark's BMI:", BMIMark2);
console.log("Test Data 2 - John's BMI:", BMIJohn2);
console.log(BMIMark2 > BMIJohn2); // false
*/

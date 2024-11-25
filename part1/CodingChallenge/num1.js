// Data 1
let markWeight1 = 78; // Mark's weight in kg
let markHeight1 = 1.69; // Mark's height in meters
let johnWeight1 = 92; // John's weight in kg
let johnHeight1 = 1.95; // John's height in meters

// Data 2
let markWeight2 = 95; // Mark's weight in kg
let markHeight2 = 1.88; // Mark's height in meters
let johnWeight2 = 85; // John's weight in kg
let johnHeight2 = 1.76; // John's height in meters

// BMI Calculation Function
function calculateBMI(weight, height) {
  return weight / (height * height);
}

// Calculate BMIs for Data 1
let markBMI1 = calculateBMI(markWeight1, markHeight1);
let johnBMI1 = calculateBMI(johnWeight1, johnHeight1);

// Determine who has the higher BMI for Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;

// Calculate BMIs for Data 2
let markBMI2 = calculateBMI(markWeight2, markHeight2);
let johnBMI2 = calculateBMI(johnWeight2, johnHeight2);

// Determine who has the higher BMI for Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;

// Log Results
console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

console.log("\nData 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);

const { intervalToDuration, addMonths } = require('date-fns');

const start = new Date(2023, 0, 1); // Jan 1st 2023
const end = new Date(2023, 3, 1); // Apr 1st 2023

console.log(intervalToDuration({ start, end }));
console.log(intervalToDuration({ start, end: addMonths(end, 1) }));


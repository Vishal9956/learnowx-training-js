const dayName=["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"];
const d = new Date();
console.log("Today is :"+dayName[d.getDay()]);
console.log("Current Time is :"+d.toLocaleTimeString());
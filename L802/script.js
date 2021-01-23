let pSeconds = new Promise((resolve, reject) => {
  setTimeout(() => {
    let d1 = new Date();
    resolve(d1.getSeconds());
    console.log("Seconds: " + d1.getSeconds());
  }, 10000);
});

let pMinutes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let d2 = new Date();
    resolve(d2.getMinutes());
    console.log("Minutes: " + d2.getMinutes());
  }, 20000);
});

let pHour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let d3 = new Date();
    resolve(d3.getHours());
    console.log("Hours: " + d3.getHours());
  }, 20000);
});

let promises = [pSeconds, pMinutes, pHour];
Promise.all(promises).then((values) =>
  console.log("Sum = " + values.reduce((a, b) => a + b))
);

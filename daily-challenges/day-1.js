// Day 1: Promise basics
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Day 1 done!"), 1000);
});
myPromise.then((msg) => console.log(msg));

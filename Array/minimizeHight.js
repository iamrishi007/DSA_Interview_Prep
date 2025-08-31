// Given an array arr[] denoting heights of n towers and a positive integer k.
// For each tower, you must perform exactly one of the following operations exactly once.
// Increase the height of the tower by
// Decrease the height of the tower by k
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

const k = 3
const arr = [2, 3, 4]
let result = []

for (let i = 0; i < arr.length; i++) {
     if (arr[i] - k < 0) {
          result.push(arr[i] + k)
     }
     else {
          result.push(arr[i] - k)
     }

}

console.log(result);

let min = result[0]
let max = result[0]
let ans = 0

for (let i = 0; i < result.length; i++) {
     if (result[i] > max) {
          max = result[i]

     }
     else if (result[i] < min) {
          min = result[i]

     }
}
console.log(max - min);


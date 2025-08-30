// Move all negative numbers to beginning and positive to end with constant extra space

function solve(arr) {

     let n = arr.length
     let pointer = 0
     for (let i = 0; i < n; i++) {
          if (arr[i] < 0) {
               let temp = arr[i]
               arr[i] = arr[pointer]
               arr[pointer] = temp
               pointer++
          }
     }
     return arr
}

console.log(solve([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

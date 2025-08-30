// You are given an integer array arr[]. You need to find the maximum sum of a subarray (containing at least one element) in the array arr[].

function solve(arr) {

     let maxSum = -arr[0]
     let currentSum = arr[0]

     for (let i = 1; i < arr.length; i++) {
          currentSum = Math.max(arr[i], currentSum + arr[i])
          maxSum = Math.max(currentSum, maxSum)
     }
     return maxSum
}

console.log(solve([2, 3, -8, 7, -1, 2, 3]));

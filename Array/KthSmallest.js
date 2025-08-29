// Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

function solve(arr, k) {

     let n = arr.length
     for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
               }
          }
     }
     return arr[k - 1]
}

console.log(solve([7, 10, 4, 3, 20, 15], 3));

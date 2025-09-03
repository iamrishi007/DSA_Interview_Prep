// You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

function minJumps(arr) {
     let n = arr.length

     if (n <= 1) {
          return 0
     }
     if (arr[0] == 0) {
          return -1
     }

     let maxReach = arr[0]
     let steps = arr[0]
     let jumps = 1

     for (let i = 1; i < n; i++) {
          if (i == n - 1) {
               return jumps
          }
          maxReach = Math.max(maxReach, i + arr[i])
          steps--

          if (steps == 0) {
               jumps++


               if (i >= maxReach) {
                    return -1
               }
               steps = maxReach - i
          }
     }
     return -1
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));

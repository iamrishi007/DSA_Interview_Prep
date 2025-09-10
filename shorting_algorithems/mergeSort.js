
function mergeSort(arr) {
     let n=arr.length
     if (n <= 1) {
          return arr
     }
     const mid = Math.floor(arr.length / 2)
     const left = mergeSort(arr.slice(0, mid))
     const right = mergeSort(arr.slice(mid,n))

     return merge(left, right)
}

function merge(left, right) {
     let sortedArr = [];
     let i = 0, j = 0;

     while (i < left.length && j < right.length) {
          if (left[i] < right[j]) {
               sortedArr.push(left[i])
               i++;
          } else {
               sortedArr.push(right[j])
               j++;
          }
     }

     return [...sortedArr, ...left.slice(i), ...right.slice(j)]
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

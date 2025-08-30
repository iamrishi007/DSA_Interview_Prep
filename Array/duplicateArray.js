// The Union of two arrays is a collection of all distinct elements present in either of the arrays. If an element appears more than once in one or both arrays, it should be included only once in the result.



function solve(arr1, arr2) {

     let result = [];

     for (let i = 0; i < arr1.length - 1; i++) {
          let flag = false
          for (let j = 0; j < result.length; j++) {
               if (result[j] == arr1[i]) {
                    flag = true
                    break
               }
          }
          if (!flag) {
               result.push(arr1[i])
          }
     }
     for (let i = 0; i < arr2.length - 1; i++) {
          let flag = false
          for (let j = 0; j < result.length; j++) {
               if (result[j] == arr2[i]) {
                    flag = true
                    break
               }
          }
          if (!flag) {
               result.push(arr2[i])
          }
     }

     return result

}
console.log(solve([1, 2, 3, 2, 1], [3, 2, 2, 3, 3, 2]));

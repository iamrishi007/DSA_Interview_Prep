// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

function findDuplicate(arr) {
     let n = arr.length
     let dict = {}

     for(let nums of arr){
          if(dict[nums]){
               return nums
          }
          dict[nums]=1
     }
     return dict

}
console.log(findDuplicate([1, 3, 4, 2, 2]));

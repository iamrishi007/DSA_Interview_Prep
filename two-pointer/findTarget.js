function findPairWithTarget(arr, target) {
  let left = 0;
  let right = arr.length 

  while (left < right) {
    let  sum = arr[left] + arr[right]

    if (sum === target) {
      return [arr[left], arr[right]]
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return -1;
}
console.log(findPairWithTarget([12,12,50,88,99,102],62));

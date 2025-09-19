// Normalize an integer array containing only 0, 1, and 2 so that all elements are grouped in non-decreasing order in place, ensuring O(n) time and O(1) space.


function sortColors(nums) {
     let low = 0, mid = 0, high = nums.length - 1
     while (mid <= high) {
          if (nums[mid] === 0) [nums[low++], nums[mid++]] = [nums[mid], nums[low]]
          else if (nums[mid] === 1) mid++
          else[nums[mid], nums[high--]] = [nums[high], nums[mid]]
     }
     return nums
}




console.log(sortColors([2, 0, 2, 1, 1, 0]))

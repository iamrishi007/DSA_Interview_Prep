// Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

function maxProduct(nums) {
    let maxProd = nums[0]
    let minProd = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        if (curr < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(curr, maxProd * curr)
        minProd = Math.min(curr, minProd * curr)

        result = Math.max(result, maxProd)
    }

    return result;
}

console.log(maxProduct([-2, 6, -3, -10, 0, 2]))

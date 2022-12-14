/**
 * Kadane's Algorithm is a well-known algorithm for finding the maximum subarray sum in an 
 * array. It is a simple and straightforward algorithm that can be easily implemented in 
 * JavaScript.
 */

function maxSubArray(arr) {
    // Keep track of the maximum subarray sum
    let maxSum = 0;

    // Keep track of the current subarray sum
    let currentSum = 0;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Add the current element to the current subarray sum
        currentSum += arr[i];

        // If the current subarray sum is greater than the maximum sum, update the maximum sum
        maxSum = Math.max(maxSum, currentSum);

        // If the current subarray sum is negative, reset it to 0
        currentSum = Math.max(currentSum, 0);
    }

    return maxSum;
}

// Test the maxSubArray function
let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr1)); // Output: 6 (the subarray [4, -1, 2, 1] has the maximum sum)

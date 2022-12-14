/**
 * @description medianOfTwoSortedArrays takes in two sorted arrays arr1 and arr2 and returns the median of the two arrays. 
 * It does this by first concatenating the two input arrays and then sorting the combined array. It then finds the length 
 * of the combined array and checks if it is odd or even. If the length is odd, it returns the middle element of the combined array. 
 * If the length is even, it returns the average of the two middle elements of the combined array. This approach allows the function 
 * to efficiently find the median of two sorted arrays.
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function medianOfTwoSortedArrays(arr1, arr2) {
    // Create a combined array by concatenating the two input arrays
    let combined = arr1.concat(arr2);

    // Sort the combined array
    combined.sort((a, b) => a - b);

    // Find the length of the combined array
    let length = combined.length;

    // If the length is odd, return the middle element of the combined array
    if (length % 2 !== 0) {
        return combined[Math.floor(length / 2)];
    } else {
        // If the length is even, return the average of the two middle elements of the combined array
        let middle1 = combined[length / 2 - 1];
        let middle2 = combined[length / 2];
        return (middle1 + middle2) / 2;
    }
}

// Test the medianOfTwoSortedArrays function
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
console.log(medianOfTwoSortedArrays(arr1, arr2)); // Output: 5.5

/* Function to calculate length */
function recLen(str) {

    // if we reach at the end of the string
    if (str == "")
        return 0;
    else
        return recLen(str.substring(1)) + 1;
}

// Driver code

let str = "GeeksforGeeks";
console.log(recLen(str));
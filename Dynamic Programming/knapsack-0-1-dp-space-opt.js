
function knapSack(W, wt, val, n) {

    // making and initializing dp array
    var dp = Array(W + 1).fill(0);

    for (i = 1; i < n + 1; i++) {
        for (w = W; w >= 0; w--) {

            if (wt[i - 1] <= w)

                // finding the maximum value
                dp[w] = Math.max(dp[w], dp[w - wt[i - 1]] + val[i - 1]);
        }
    }
    return dp[W]; // returning the maximum value of knapsack
}

// Driver code
var val = [60, 100, 120];
var wt = [10, 20, 30];
var W = 50;
var n = val.length;
console.log(knapSack(W, wt, val, n));


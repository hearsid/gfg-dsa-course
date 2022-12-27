
// A utility function that returns
// maximum of two integers
function max(a, b) {
    return (a > b) ? a : b;
}

// Returns the value of maximum profit
function knapSackRec(W, wt, val, n, dp) {

    // Base condition
    if (n == 0 || W == 0)
        return 0;

    if (dp[n][W] != -1)
        return dp[n][W];

    if (wt[n - 1] > W)

        // Store the value of function call
        // stack in table before return
        return dp[n][W] = knapSackRec(W, wt, val,
            n - 1, dp);

    else

        // Return value of table after storing
        return dp[n][W] = max((val[n - 1] +
            knapSackRec(W - wt[n - 1], wt,
                val, n - 1, dp)),
            knapSackRec(W, wt, val,
                n - 1, dp));
}

function knapSack(W, wt, val, N) {

    // Declare the table dynamically
    var dp = new Array(N + 1);
    for (var i = 0; i < dp.length; i++) {
        dp[i] = new Array(W + 1);
    }

    // Loop to initially filled the
    // table with -1
    for (var i = 0; i < N + 1; i++)
        for (var j = 0; j < W + 1; j++)
            dp[i][j] = -1;

    return knapSackRec(W, wt, val, N, dp);
}


var val = [60, 100, 120];
var wt = [10, 20, 30];

var W = 50;
var N = val.length;

console.log(knapSack(W, wt, val, N));



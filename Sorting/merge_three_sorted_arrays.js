
// Javascript program to merger three sorted arrays
// Without caring about the exhausting array

function printVector(a) {
	document.write("[");
	for (let e of a) {
		document.write(e + " ");
	}
	document.write("]" + "<br>");
}

// A[], B[], C[]: input arrays
// Function to merge three sorted lists into a single
// list.
function merge3sorted(A, B, C)
{
	let ans = [];
	
	// Get Sizes of three vectors
	let l1 = A.length;
	let l2 = B.length;
	let l3 = C.length;

	let i = 0;
	let j = 0;
	let k = 0;

	while (i < l1 || j < l2 || k < l3)
	{
		// Assigning a, b, c with max values so that if
		// any value is not present then also we can sort
		// the array.
		
		let a = Number.MAX_SAFE_INTEGER;
		let b = Number.MAX_SAFE_INTEGER;
		let c = Number.MAX_SAFE_INTEGER;
		
		// a, b, c variables are assigned only if the
		// value exist in the array.
			if (i < l1)
				a = A[i];
			if (j < l2)
				b = B[j];
			if (k < l3)
				c = C[k];
		
		// Checking if 'a' is the minimum
			if (a <= b && a <= c) {
				ans.push(a);
				i++;
			}
			// Checking if 'b' is the minimum
			if (b <= a && b <= c) {
				ans.push(b);
				j++;
			}
			// Checking if 'c' is the minimum
			if (c <= a && c <= b) {
				ans.push(c);
				k++;
			}
	}
	return ans;
}

// Driver Code

let A = [1, 2, 41, 52, 84];
let B = [1, 2, 41, 52, 67];
let C = [1, 2, 41, 52, 67, 85];

let final_ans = merge3sorted(A, B, C);
// Print Result
printVector(final_ans);


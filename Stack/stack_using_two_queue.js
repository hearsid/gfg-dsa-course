/*Javascript Program to implement a stack using
two queue */

// Two inbuilt queues
class Stack {
	constructor() {
		this.q1 = [];
		this.q2 = [];
	}

	push(x) {

		// Push x first in isEmpty q2
		this.q2.push(x);
		// Push all the remaining
		// elements in q1 to q2.
		while (this.q1.length != 0) {
			this.q2.push(this.q1[0]);
			this.q1.shift();

		}

		// swap the names of two queues
		this.q = this.q1;
		this.q1 = this.q2;
		this.q2 = this.q;
	}

	pop() {
		// if no elements are there in q1
		if (this.q1.length == 0)
			return;
		this.q1.shift();
	}

	top() {
		if (this.q1.length == 0)
			return -1;
		return this.q1[0];
	}

	size() {
		console.log(this.q1.length);
	}

	isEmpty() {
		// return true if the queue is empty.
		return this.q1.length == 0;
	}

	front() {
		return this.q1[0];
	}
}

// Driver code


let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("current size: ");
s.size();
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());

console.log("current size: ");
s.size();

// This code is contributed by adityamaharshi21

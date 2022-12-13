
// javascript program to see if two trees
// are mirror of each other

// A binary tree node
class Node {

    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

var a, b;

/*
* Given two trees, return true if they are mirror of each other
*/
function areMirror(a, b) {
    /* Base case : Both empty */
    if (a == null && b == null)
        return true;

    // If only one is empty
    if (a == null || b == null)
        return false;

    /*
    * Both non-empty, compare them recursively Note that in recursive calls, we
    * pass left of one tree and right of other tree
    */
    return a.data == b.data && areMirror(a.left, b.right) && areMirror(a.right, b.left);
}

// Driver code to test above methods


a = new Node(1);
b = new Node(1);
left = new Node(2);
right = new Node(3);
left.left = new Node(4);
left.right = new Node(5);
a.left = left;
a.right = right;

left = new Node(3);
right = new Node(2);
right.left = new Node(5);
right.right = new Node(4);
b.left = left;
b.right = right;

if (areMirror(a, b) == true)
    console.log("Yes");
else
    console.log("No");


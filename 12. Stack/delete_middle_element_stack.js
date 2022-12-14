
// Javascript code to delete middle of a stack
// without using additional data structure.

// Deletes middle of stack of size
// n. Curr is current item number
function deleteMid(st, n, curr) {

    // If stack is empty or all items
    // are traversed
    if (st.length == 0 || curr == n)
        return;

    // Remove current item
    let x = st[st.length - 1];
    st.pop();

    // Remove other items
    deleteMid(st, n, curr + 1);

    // Put all items back except middle
    if (curr != parseInt(n / 2, 10))
        st.push(x);
}

let st = [];

// push elements into the stack
st.push('1');
st.push('2');
st.push('3');
st.push('4');
st.push('5');
st.push('6');
st.push('7');

deleteMid(st, st.length, 0);

// Printing stack after deletion
// of middle.
while (st.length > 0) {
    let p = st[st.length - 1];
    st.pop();
    console.log(p + " ");
}


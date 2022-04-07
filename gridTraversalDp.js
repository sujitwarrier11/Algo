//find number of ways you can travel from top left to bottom right
//use dynamic programming to split problem into smaller size 


const gridTraversal = (n,m, history={}) => {
    if (history[`${m},${n}`]) return history[`${m},${n}`];
    if (n ===0 || m === 0) return 0;
    if (n == 1 && m == 1) return 1;
    history[`${m},${n}`] = gridTraversal(n - 1, m, history) + gridTraversal(n, m-1, history);
    return history[`${m},${n}`];
}

console.log(gridTraversal(3,4));
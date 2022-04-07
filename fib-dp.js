const fibDP = (n, history={ '1': 1, '2': 1  }) => {
    if (history[n]) return history[n];
    const sum = fibDP(n-1, history) + fibDP(n-2, history);
    history[n] = sum;
    return sum; 
}

console.log(fibDP(50))
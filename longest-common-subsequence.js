var longestCommonSubsequence = function (text1, text2) {
    const grid = [];
    for(let g = 0 ;g <= text1.length; g++) {
        grid.push(new Array(text2.length + 1).fill(0));
    }
    for (let j = text2.length - 1; j > -1; j--) {
        for (let i = text1.length - 1; i > -1; i--) {
            if (text1[i] === text2[j]) {
                grid[i][j] = 1 + grid[i + 1][j + 1];
                continue;
            }
            grid[i][j] = Math.max(grid[i][j + 1], grid[i + 1][j]);
        }
    }
    return grid[0][0];
};

console.log(longestCommonSubsequence("bsbininm","jmjkbkjkv"));
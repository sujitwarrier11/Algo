function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    if (array.length === 0) return 0;
    if (array.length < 2) return array[0];
    const maxArr = [array[0], Math.max(array[0], array[1])];
    for (let i = 2; i < array.length; i++) {
        maxArr.push(Math.max(maxArr[i - 1], (maxArr[i - 2] + array[i])));
    }
    return maxArr.pop();
}

// maArr[i] = max (mArr[i-1], mArr[i-2] + arr[i]);
// maArr[0] = arr[0];
// maArr[i] = max(arr[0], arr[1]);
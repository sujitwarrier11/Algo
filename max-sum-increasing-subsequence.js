function maxSumIncreasingSubsequence(array) {
    // Write your code here.
    if (array.length === 1) return [array[0], [array[0]]];
    const sumArray = new Array(array.length).fill(0);
    sumArray[0] = array[0];
    let i = 1;
    while (i < array.length) {
        if (array[i - 1] < array[i]) {
            const newSum = sumArray[i - 1] + array[i];
            sumArray[i] = Math.max(newSum, array[i]);
            i++;
            continue;
        }
        let j = i - 2;
        while (j > -1 && array[j] >= array[i]) {
            j--;
        }
        if (j < 0) {
            sumArray[i] = Math.max(array[i], sumArray[i - 1]);
            i++;
            continue;
        }
        const temp = sumArray[j] + array[i];
        sumArray[i] = Math.max(temp, array[i]);
        i++;
    }

    const max = sumArray.reduce((acc, item, idx) => {
        if (acc.max < item) {
            acc.max = item;
            acc.idx = idx;
        }
        return acc;
    }, { max: 0 });
    let k = max.idx - 1;
    const result = [array[max.idx]];
    console.log(sumArray);
    while (k > -1) {
        while (sumArray[k] === sumArray[k - 1]) {
            k--;
            continue;
        }
        if (sumArray[k] <= sumArray[k + 1]) {
            if (sumArray[k] > 0)
                result.push(array[k]);
            k--;
            continue;
        }
        break;
    }
    return [max.max, result.reverse()];
}

console.log(maxSumIncreasingSubsequence([70, -1, 10]))
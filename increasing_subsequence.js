function maxSumIncreasingSubsequence(array) {
    // Write your code here.
    const sequences = new Array(array.length);
    const sums = array.map(item => item);
    let maxIdx = 0;
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        for (let j = 0; j < i; j++) {
            const other = array[j];
            if (other < current && sums[j] + current >= sums[i]) {
                sums[i] = sums[j] + current;
                sequences[i] = j;
            }
        }
        if (sums[i] >= sums[maxIdx]) maxIdx = i;
    }
    return [sums[maxIdx], buildSequence(array, sequences, maxIdx)];
}

const buildSequence = (array, sequences, currentIndex) => {
    const sequence = [];
    console.log(array);
    console.log(currentIndex)
    while (currentIndex !== undefined) {
        if (array[currentIndex])
            sequence.unshift(array[currentIndex]);
        currentIndex = sequences[currentIndex]
    }
    return sequence;
}


console.log(maxSumIncreasingSubsequence([1]))
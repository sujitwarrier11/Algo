const twoSum = (target, sortedArray) => {
    let i = 0;
    let j = sortedArray.length - 1;
    const op = [];
    while (i < j) {
        const sum = sortedArray[j] + sortedArray[i];
        if (sum === target) {
            op.push([sortedArray[i], sortedArray[j]]);
            i++;
            j--;
            continue;
        }
        if (sum < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return op;
}


const nSum = (n, target, sortedArray) => {
    if (n == 2) return twoSum(target, sortedArray);
    const operands = [];
    for (let i = 0; i < sortedArray.length; i++) {
        const newOperands = nSum(n - 1, target - sortedArray[i], sortedArray.slice(i + 1));
        for (let operand of newOperands) {
            operands.push([sortedArray[i], ...operand]);
        }
    }
    return operands;
}

const find4Sum = (target, array) => {
    array.sort((a, b) => a - b);
    return nSum(4, target, array);
}

console.log(find4Sum(16, [7, 6, 4, -1, 1, 2]))
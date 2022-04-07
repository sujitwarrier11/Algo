

const twoSum = (target, sortedArray) => {
    let i = 0;
    let j = sortedArray.length -1;
    while (i<j) {
        const sum = sortedArray[j] + sortedArray[i];
        if (sum === target) return [sortedArray[i], sortedArray[j]];
        if (sum < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return [];
}


const nSum = (n, target, sortedArray) => {
    if (n == 2) return twoSum(target, sortedArray);
    const operands = [];
    for (let i = 0; i < sortedArray.length; i++) {
        const newOperands = nSum(n - 1, target - sortedArray[i], sortedArray.slice(i+1));
        if (newOperands.length === n -1) {
            operands.push(sortedArray[i]);
            operands.push(...newOperands);
            return operands;
        }
    }
    
}

const find4Sum = (target, array) => {
  array.sort((a,b) => a-b);
  return nSum(4, target, array);
}

console.log(find4Sum(10,[1,2,4,3,6,7]))
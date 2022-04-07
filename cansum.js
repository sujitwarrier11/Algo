// is the target sum possible with the give set of values

const canSum = (target, arr, history = {}) => {
    if (history[target] !== undefined) return history[target];
    if (target === 0) {
        return true;
    }
    if (target < 0) {
        return false;
    }
    for(let num of arr) {
        const diff = target - num;
        const res = canSum(diff, arr, history);
        if (res) {
            history[target] = res;
            return true;
        }
    }

    history[target] = false;
    return false;
}

console.log(canSum(300, [7,14]));
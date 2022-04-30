// Implement simple back tracking

var combinationSum = function (candidates, target) {
    const result = [];
    backTrack(candidates, target, result);
    return result;
};

const backTrack = (candidates, target, result, currentCombination = [], newStart = 0) => {
    if (target === 0) {
        result.push([...currentCombination]);
        return;
    }
    if (target < 0) {
        return;
    }

    for (let i = newStart; i < candidates.length; i++) {
        currentCombination.push(candidates[i]);
        backTrack(candidates, target - candidates[i], result, currentCombination, i);
        currentCombination.pop();
    }
}
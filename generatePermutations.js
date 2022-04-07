//This meathod only works for distinct 

const generateCombinations = (curr, arr) => {
    if (arr.length === 0) return [curr];
    const comBinations = [];

    arr.forEach((element,idx) => {
        const newArr = [...arr.slice(0, idx), ...arr.slice(idx +1,arr.length)];
        const elementCombiations = generateCombinations(element, newArr);
        elementCombiations.forEach(item => comBinations.push(curr+item));
    });
    return comBinations;
}

const getCombinations = (str) => {
    const strArr = str.split('');
    return generateCombinations('', strArr);
}

const generateKey = (curr, arr) => {
    return `${curr}|${arr.join('|')}`;
}

console.time();
console.log(getCombinations('testestest'));
console.timeEnd();
function smallestSubstringContaining(bigString, smallString) {
    // Write your code here.
    let l = 0;
    let r = 0;
    let min = Infinity;
    let subStr = '';
    let smallFreqCount = 0;
    let bounds = [0,Infinity];
    const smallFreq = smallString.split('').reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 1;
            smallFreqCount++;
            return acc;
        }
        acc[item] += 1;
        return acc;
    }, {});
    const bigFreq = {};
    let bigFreqCount = 0;
    while (r < bigString.length && l <= r) {
        const rightchar = bigString[r];
        if (!smallFreq[rightchar]) {
            r++;
            continue;
        } 

        bigFreq[rightchar] = (bigFreq[rightchar] || 0) + 1;
        if (bigFreq[rightchar] === smallFreq[rightchar]) bigFreqCount++;

        while (bigFreqCount === smallFreqCount && l <= r) {
            bounds = getCloserBounds(l, r, bounds[0], bounds[1]);
            const leftChar = bigString[l];
            if(!smallFreq[leftChar]) {
                l++;
                continue;
            }
            if(smallFreq[leftChar] === bigFreq[leftChar]) {
                bigFreqCount--;
            }
            bigFreq[leftChar]--;
            l++;
        }
        r++;
    }

    return bigString.slice(bounds[0], bounds[1] + 1);
}

const getCloserBounds = (a,b,c,d) => b-a < d-c ? [a,b] : [c,d];

const checkFreq = (big, small) => {
    return Object.keys(small).every(key => big[key] && big[key] === small[key]);
}

console.log(smallestSubstringContaining('abcd$ef$axb$c$','$$abf'));
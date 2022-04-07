function knuthMorrisPrattAlgorithm(string, substring) {
    // Write your code here.
    const pattern = buildPattern(substring);
    const isMatch = matchPattern(string, substring, pattern);
    console.log(pattern);
    console.log(isMatch);
}

const buildPattern = str => {
    const pattern = new Array(str.length).fill(-1);
    let i = 1;
    let j = 0;
    while (i < str.length) {
        if (str[i] === str[j]) {
            pattern[i] = j;
            i++;
            j++;
        }
        else if (j > 0) {
            const prevPatternIndex = pattern[j - 1];
            j = prevPatternIndex + 1;
        } else {
            i++;
        }
        
    }
    return pattern;
}

const matchPattern = (string, substring, pattern) => {
    let i = 0;
    let j = 0;
    while (i + substring.length -j <= string.length) {
        if (string[i] === substring[j]) {
            if(j === substring.length -1) return true;
            i++;
            j++;
        } else if (j > 0) {
            j = pattern[j-1] + 1;
        } else {
            i++;
        }
    }
    return false;
}

knuthMorrisPrattAlgorithm("this is sujit and im tring to test this thing", "sujit");
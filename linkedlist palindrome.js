function linkedListPalindrome(head) {
    // Write your code here.
    return isPalindRome(head, head).match;
}

const isPalindRome = (left, right) => {
    if (!right) return { match: true, left };
    const res = isPalindRome(left, right.next);
    if (!res.match) return { match: false };
    if (res.left.value === right.value) return { match: true, left: res.left.next };
    return { match: false };
}

const list = {
    value: 0,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 2,
                next: {
                    value: 1,
                    next: {
                        value: 0
                    }
                }
            }
        }
    }
}

console.log(linkedListPalindrome(list));
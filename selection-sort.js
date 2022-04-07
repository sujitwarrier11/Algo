// there will be two sublists logically onse sorted and one unsorted each round you take smallest from unsorted list and add it to end of sorted list.

function selectionSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[smallestIndex] > array[j]) {
                smallestIndex = j;
            }
        }
        swap(i, smallestIndex, array);
    }
    return array;
}

const swap = (p1, p2, arr) => {
    const temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}

console.log(selectionSort([2, 3, 5, 6, 5, 8, 9]))
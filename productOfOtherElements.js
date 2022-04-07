// return array of same lenght as input where each element is the product of other elements in the array
// cannot use divison to achieve this

function arrayOfProducts(array) {
    // Write your code here.
    const result = new Array(array.length).fill(1);
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        result[i] = product;
        product *= array[i];
    }
    product = 1;
    for (let i = array.length - 1; i > -1; i--) {
        result[i] *= product;
        product *= array[i];
    }
    return result;
}

console.log(arrayOfProducts([1,2,3,4]))

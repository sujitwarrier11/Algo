const matrix1 = [[ 1, 2, 3, 4],
                [12,13,14, 5],
                [11,16,15, 6],
                [10, 9, 8, 7]];
const matrix2 = [[1,2],[4,3]];
const matrix3 = [[1,2,3,4,5],[15,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]];


/* Note: for transposing n x n matrixes transpose the 4 corners first then the cells in between 
and call the same function recursively with inner cells. */

const transpose = (mat, left, right, leftBottom, rightBottom) => {
    let originalLeft = left || [0,0];
    let originalRight = right || [0, mat[0].length-1];
    let originalLeftBottom = leftBottom || [mat.length-1 , 0];
    let originalRightBottom = rightBottom || [mat.length - 1, mat[mat.length - 1].length -1];

    let l = originalLeft;
    let r = originalRight;
    let lb = originalLeftBottom;
    let rb = originalRightBottom;

    if (l[1] < r[1]) {
        const temp = mat[l[0]][l[1]];
        mat[l[0]][l[1]] = mat[lb[0]][lb[1]];
        mat[lb[0]][lb[1]] = mat[rb[0]][rb[1]];
        mat[rb[0]][rb[1]] = mat[r[0]][r[1]];
        mat[r[0]][r[1]] = temp;
        //console.log(mat);
        if(l[1] +1 < r[1]) {
            const top = originalLeft;
            const right = originalRight;
            const bottom = originalRightBottom;
            const left = originalLeftBottom;
            for (let i = 1; i < right[1] - top[1]; i++) {
                const temp2 = mat[top[0]][top[1] + i];
                mat[top[0]][top[1] + i] = mat[left[0] - i][left[1]];
                mat[left[0] - i][left[1]] = mat[bottom[0]][bottom[1] - i];
                mat[bottom[0]][bottom[1] - i] = mat[right[0]+i][right[1]];
                mat[right[0] + i][right[1]] = temp2;
            }
        }

       mat = transpose(mat, [originalLeft[0] + 1, originalLeft[1] + 1],
            [originalRight[0] + 1, originalRight[1] - 1],
            [originalLeftBottom[0] - 1, originalLeftBottom[1] + 1],
            [originalRightBottom[0] - 1, originalRightBottom[1] -1]);
    }
    return mat;
}

console.log("matrix1 Before", matrix1)

transpose(matrix1);

console.log( "matrix1 After",matrix1)

console.log("matrix2 before", matrix2)

transpose(matrix2);

console.log("matrix2 After", matrix2)

console.log("matrix3 before", matrix3)

transpose(matrix3);

console.log("matrix3 After", matrix3)
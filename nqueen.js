function nonAttackingQueens(n) {
    // Write your code here.
    const queenPos = new Array(n).fill(0);


    return getPlacements(0, queenPos, n);
}

const getPlacements = (row, placements, n) => {
    if (row === n) return 1;
    let validPlacements = 0;
    for(let col =0; col <n; col++) {
        if (nonAttacking(row, col, placements)) {
            placements[row] = col;
            validPlacements += getPlacements(row+1, placements, n);
        }
    }
    return validPlacements;
}

const nonAttacking = (r, c, placement) => {
  for(let i =0; i< r; i++) {
      const colCheck = placement[i];
      const sameColumn = colCheck === c;
      const diag = Math.abs(colCheck -c) === r - i;
      if (sameColumn || diag) return false;
  }
  return true;
}

console.log(nonAttackingQueens(5));


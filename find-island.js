const grid = [
    [1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1],
];

const findPathToIsland = (ocean, m, n) => {
    const firstIslandStart = findFirstIsland(ocean, m, n);
    if (firstIslandStart.i < 0) return 0;
    const queue = [firstIslandStart];
    const visited = {};
    let count = 0;
    let min = Infinity;
    while (queue.length > 0) {
        const current = queue.shift();
        const key = getKey(current);
        if (!visited[key]) {
            if (ocean[current.i][current.j] !== 1) {
                count++
            }
            visited[key] = true;
            const neighbours = getValidNeighbours(ocean, current, m, n, visited);
            if(neighbours.length === 0) {
                min = min < count ? min : count;
                count = 0;
            }
            for (let neighbour of neighbours) {
                queue.push(neighbour);
            }
        }
    }

    return min;
}


const getValidNeighbours = (ocean,{ i, j }, m, n, visited) => {
    const neighbours = [];
    if (i > 0 && !visited[getKey({ i: i-1, j })]) {
        neighbours.push({
            i: i-1,
            j
        });
    }
    if (j > 0 && !visited[getKey({ i, j: j-1 })]) {
        neighbours.push({
            i,
            j: j-1
        });
    }
    if (j < n - 1 && !visited[getKey({ i, j: j+1 })]) {
        neighbours.push({
            i,
            j: j + 1
        });
    }
    if (i < m - 1 && !visited[getKey({ i: i+1, j })]) {
        neighbours.push({
            i: i + 1,
            j
        });
    }
    return neighbours;
}

const getKey = ({i, j}) => `${i}|${j}`;

const findFirstIsland = (ocean,m, n) => {
    for(let i = 0; i< m; i++) {
        for( let j = 0; j< n; j++) {
            if(ocean[i][j] === 1) return {i, j}; 
        }
    }
    return { i : -1, j : -1 };
}

console.log(findPathToIsland(grid, 5, 5))
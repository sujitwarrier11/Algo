const bfs = (graph, src) => {
    const queue = [ src ];
    const visited = {  [src]: true };
    while(queue.length > 0) {
        const current = queue.shift();
        console.log("current", current);
        for (let neighbour of graph[current]) {
            if(!visited[neighbour]) {
                queue.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
}

const dfs = (graph, src, visited = {}) => {
    if(!visited[src]){
        console.log("current", src);
        visited[src] = true;
        for(let neighbour of graph[src]) {
            dfs(graph, neighbour, visited);
        }
    }
} 


const graph = {
    a: ['b','d'],
    b: ['c','f'],
    c: ['g'],
    d: [],
    f: [],
    g: [],
    e: []
}

console.log("---------------- BFS-------------------")
bfs(graph, 'a');
console.log("----------------DFS--------------------")
dfs(graph, 'a');
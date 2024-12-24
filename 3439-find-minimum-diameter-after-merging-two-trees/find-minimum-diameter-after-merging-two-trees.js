/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    function getDiameter(graph, nodes) {
        const bfs = (start) => {
            const dist = Array(nodes).fill(-1);
            const q = [start];
            dist[start] = 0;
            let farNode = start;
            while (q.length) {
                const curr = q.shift();
                for (const next of graph[curr]) {
                    if (dist[next] === -1) {
                        dist[next] = dist[curr] + 1;
                        q.push(next);
                        if (dist[next] > dist[farNode]) {
                            farNode = next;
                        }
                    }
                }
            }
            return [farNode, dist[farNode]];
        };
        return bfs(bfs(0)[0])[1];
    }

        const n = edges1.length + 1;
        const m = edges2.length + 1;
        const g1 = Array(n).fill().map(() => []);
        const g2 = Array(m).fill().map(() => []);
        
        for (const edge of edges1) {
            g1[edge[0]].push(edge[1]);
            g1[edge[1]].push(edge[0]);
        }
        for (const edge of edges2) {
            g2[edge[0]].push(edge[1]);
            g2[edge[1]].push(edge[0]);
        }
        
        const d1 = getDiameter(g1, n);
        const d2 = getDiameter(g2, m);
        return Math.max(d1, d2, Math.floor((d1 + 1) / 2) + Math.floor((d2 + 1) / 2) + 1);
    
};
class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        n = len(graph)  # length of the graph
        color = [0] * n  # create a new list of same length as graph It contains either 0,1,2
        # 0--unvisited 1--visiting and 2--safe state

        result = []  # list to store all safe states


        def dfs(node):
            if color[node] > 0:
                return color[node] == 2  # Only 0 means unvisited 1,2 are visited it returns true for 2 and false for 1

            color[node] = 1  # making current unvisited to visiting
            for neighbor in graph[node]:  # checking if all the outgoing states for this index is safe state
                if color[neighbor] == 1 or not dfs(neighbor):
                    return False
            # we know that if neighbour is unsafe then current is also unsafe state
            # if neighbour is 1 means there is a loop
            # because we get 1 other than current when we try dfs(neighbour) getting 1 means going back to its ancestor
            # if all the outgoing states are safe then we have to make the current state as safe
            color[node] = 2
            return True


        for i in range(n):
            if dfs(i):
                result.append(i)  # call dfs() for all states if true then push that index to result

        return result


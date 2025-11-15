/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    let res = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff < minDiff) {
            minDiff = diff;
            // Start a new list of pairs
            res = [[arr[i], arr[i + 1]]];
        } else if (diff === minDiff) {
            // Add to the existing list of pairs
            res.push([arr[i], arr[i + 1]]);
        }
    }
    
    return res;
};
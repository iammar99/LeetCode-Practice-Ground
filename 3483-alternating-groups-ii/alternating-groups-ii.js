/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let left = 0
    let count = 0
    let n = colors.length
    for(let i = 1 ; i < n + k - 1 ; i++){
        if(colors[i%n] == colors[(i-1)%n]){
            left=i
        }
        if(i-left+1>=k){
            count++
        }
    }
    return count
};
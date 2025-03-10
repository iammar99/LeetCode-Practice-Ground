/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    let n = colors.length
    let count = 0
    for (let i = 0; i < colors.length; i++) {
        let fir = colors[i]
        let sec = colors[(i+1)%n]
        let thir = colors[(i+2)%n]
        if(fir != sec && sec != thir){
            count++
        }
    }
    return count
};
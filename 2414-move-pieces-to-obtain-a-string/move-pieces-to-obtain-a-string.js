/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    let i = 0, j = 0;
    const n = start.length, m = target.length;

    while (i < n && j < m) {
        const a = start[i];
        const b = target[j];

        if (a === '_' && b === '_') {
            i++;
            j++;
        }
        else if (a === '_') {
            i++;
        }
        else if (b === '_') {
            j++;
        }
        else if (
            a === b &&
            (
                (a === 'L' && i >= j) ||
                (a === 'R' && i <= j)
            )
        ) {
            i++;
            j++;
        }
        else {
            return false;
        }
    }
    while (i < m && start[i] == "_"){
        i++
    }
    while (j < m && target[j] == "_"){
        j++
    }
    return i == j
};
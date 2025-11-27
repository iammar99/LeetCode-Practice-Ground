/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
    let alice = false
    while (n > 1) {
        if (n % 2 == 0) {
            n--
        }
        else {
            for (let i = 1; i < n / 2; i += 2) {
                if (n % i == 0) {
                    n -= i
                    break
                }
            }
        }
        alice = !alice
    }
    return alice
};
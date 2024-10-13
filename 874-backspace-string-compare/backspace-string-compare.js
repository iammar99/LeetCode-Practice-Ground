/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let S_stack = []
    let t_stack = []
    for (let i = 0; i < s.length; i++) {
        S_stack.push(s[i])
        if (s[i] == "#") {
            S_stack.pop()
            S_stack.pop()
        }
    }
    for (let i = 0; i < t.length; i++) {
        t_stack.push(t[i])
        if (t[i] == "#") {
            t_stack.pop()
            t_stack.pop()
        }
    }
    return S_stack.join("") == t_stack.join("")
};
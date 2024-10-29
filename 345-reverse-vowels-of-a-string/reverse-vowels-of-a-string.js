/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let left_pointer = 0
    let right_pointer = s.length - 1
    const vowels = "aeiouAEIOU";
    let arr = s.split("")
    while (left_pointer <= right_pointer) {
        if (vowels.includes(arr[left_pointer]) && !vowels.includes(arr[right_pointer])) {
            right_pointer--
        }
        else if (!vowels.includes(arr[left_pointer]) && vowels.includes(arr[right_pointer])) {
            left_pointer++
        }
        else if (vowels.includes(arr[left_pointer]) && vowels.includes(arr[right_pointer])) {
            let temp = arr[left_pointer]
            arr[left_pointer] = arr[right_pointer]
            arr[right_pointer] = temp
            left_pointer++
            right_pointer--
        }
        else {
            left_pointer++
            right_pointer--
        }
    }

    return arr.join("")
};
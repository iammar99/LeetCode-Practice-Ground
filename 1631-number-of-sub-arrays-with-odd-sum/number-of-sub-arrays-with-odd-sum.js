/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    const MOD = 1e9 + 7;
    let oddPrefixCount = 0;
    let evenPrefixCount = 1;  
    let ans = 0;
    let prefixSum = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSum % 2 === 1) {
            ans = (ans + evenPrefixCount) % MOD;
            oddPrefixCount++;
        } else {
            ans = (ans + oddPrefixCount) % MOD;
            evenPrefixCount++;
        }
    }

    return ans;
};
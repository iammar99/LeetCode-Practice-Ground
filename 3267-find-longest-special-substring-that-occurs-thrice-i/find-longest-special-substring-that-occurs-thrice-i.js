/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  let maxLength = -1;
  const map = new Map();
  let left = 0;

  while (left < s.length) {
    let right = left;

    // Extend the right pointer to find the block of same characters
    while (right < s.length && s[right] === s[left]) {
      right++;
    }

    // Now we have a block of 'right - left' same characters
    let blockLength = right - left;

    // For each block of length 'blockLength', we can efficiently count substrings of lengths 1 to blockLength
    for (let len = 1; len <= blockLength; len++) {
      const substr = s.substring(left, left + len);  // Length of the current special substring
      const currentCount = map.get(substr) ?? 0;
      const newCount = currentCount + (blockLength - len + 1);  // Increment count based on how many times this length can appear
      map.set(substr, newCount);

      // If the substring appears at least 3 times, update the max length
      if (newCount >= 3) {
        maxLength = Math.max(maxLength, len);
      }
    }

    // Move the left pointer to the right of the current block of same characters
    left = right;
  }

  return maxLength;
};
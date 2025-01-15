/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
        let reqOnes = num2.toString(2).split('1').length - 1;

    let x = 0;

    for (let i = 31; i >= 0 && reqOnes > 0; i--) {
        if ((num1 & (1 << i)) !== 0) {
            x |= (1 << i); 
            reqOnes--; 
        }
    }

    for (let i = 0; i <= 31 && reqOnes > 0; i++) {
        if ((x & (1 << i)) === 0) {  
            x |= (1 << i);         
            reqOnes--;   
        }
    }

    return x;
};
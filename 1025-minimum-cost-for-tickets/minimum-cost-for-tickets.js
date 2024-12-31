/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let maxDay = days[days.length - 1]
    let dp = new Array(maxDay+1).fill(0)
    let travelDays = new Set(days)
    for(let i = 1 ; i <= maxDay ; i++){
        if(!travelDays.has(i)){
            dp[i] = dp[i - 1]
        }
        else{
            dp[i] = Math.min(
                dp[Math.max(0,i-1)] + costs[0],
                dp[Math.max(0,i-7)] + costs[1],
                dp[Math.max(0,i-30)] + costs[2]
            )
        }
    }
    return dp[maxDay]
};
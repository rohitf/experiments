var goal = 16;
var denoms = [1, 5, 10, 12];
var minCounts = [0], prevCoins = [0];
var target = 1;
while (target <= goal) {
    // While we haven't made the goal amt.
    let minCount = target - 1;
    let prevCoin;
    let validCoins = denoms.filter((x) => (x <= target));
    // check minCounts for all denominations less than current target
    for (let coin of validCoins) {
        let lastValue = minCounts[target - coin];
        if (lastValue < minCount) {
            [minCount, prevCoin] = [lastValue, coin];
        }
    }
    minCounts[target] = minCount + 1;
    prevCoins[target] = prevCoin;
    target++;
}
// Solution
// console.log(minCounts.map((count, index) => [count, index]));
console.log(`You need ${minCounts[goal]} coins with denominations: (${whichCoins(goal)}) to make ${goal} cents`);
function whichCoins(N) {
    var currCoin = prevCoins[N];
    return N == 0 ? "" : `${currCoin} ${whichCoins(N - currCoin)}`;
}

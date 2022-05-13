function maxProfit(arr){
    if(arr.length < 1){
        return 0;
    }
    const differences = [];
    for(let i = 0; i < arr.length; ++i){
        for(let j = i+1; j < arr.length; ++j){
            differences.push(arr[j]-arr[i]);
        }
    }

    differences.sort();
    //console.log(differences);
    const lastVal = differences[differences.length-1]
    return  lastVal < 0 ? 0 : lastVal;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 - buy at 1, sell at 6
console.log(maxProfit([7, 6, 5, 4, 3, 2])); // 0 - don't buy!
console.log(maxProfit([])); // 0
console.log(maxProfit([1,1,1,1,1])); // 0


function maxProfit2(arr){
   let maxProfit = 0;
   let startPrice = prices[0];
   for(let i = 1; i < prices.length; ++1){
       const price = prices[i];

       if(price < start){
           entryPrice = price;
           continue;
       }

       const profit = price - startPrice;
       if(profit > maxProfit) maxProfit = profit;
   } 
   return maxProfit
}

function maxProfitKalebsVersion(prices){
    let maxProfit = 0;
    for (i = 1; i < prices.length; i++)
        if (prices[i] > prices[i - 1])
            maxProfit = maxProfit+( prices[i] - prices[i - 1]);

    return maxProfit;
}


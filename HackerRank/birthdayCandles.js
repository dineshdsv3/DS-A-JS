// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle
//  for each year of their total age. They will only be able to blow out the tallest of the candles.
//  Count how many candles are tallest.
// Output - birthdayCakeCandles([4,4,1,3]) => 2

// Points to remember from this Challenge
// 1) Store the max value by iterating over the array and compare the max value by iterating over the array
// and increase the count 

function birthdayCakeCandles(arr) {
    let count = 0;
    let max = arr[0];

    arr.map((ele) => {
        max = Math.max(ele,max)
    })

    arr.map((ele) => {
        ele === max && count++
    })

    return count;

}

console.log(birthdayCakeCandles([4,4,1,3]))
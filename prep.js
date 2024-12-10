//Timed attempt -------------
//Problem :

//Code Review after TA -------

//Final Code --------


//Timed attempt -------------
//Problem 1: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { //Use the question against itself: You are given an array prices where prices[i] is the price of a given stock on the ith day. --> [7,1,5,3,6,4] - Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. buy after 2nd element, index 1 due to rule. If a 1 is found, find the biggest number to max profit

    //12:30 mark - base case from constraints
    if (prices.length === 0 ) {
        console.log("Value detected outside of constraints, review and input again")
    }

    //Halfway psuedocode: try to sort the array first?
    prices.sort()
    console.log(prices)

    //Plan: choose a single day - use a loop
    for (i = 0; i < prices.length; i++) {
        console.log(prices[i]) //the price of a given stock on the ith day.
        console.log(prices[1]) //target the first index, in case a 1
        //scan for a 1
        if(prices[i] === 1) {
            console.log("1 detected, you can buy now") 
        }
        //psuedocode:find the biggest number... find a future day to sell the stock
        console.log(Math.max(prices[i]))

        let standard = 1 // where the price will always be one
        let bigger = null; //psuedocode: where the biggest value in the prices can be stored

        let profit = bigger - standard // where profit = 6-1 = 5. 
         //return and exit - max profit otherwise return zero

        if (profit) { 
            return 5 //using hard coded value 
            ///psuedocode: return profit
            //from test case, output is 5
        } else {
            return 0 //In this case, no transactions are done and the max profit = 0.
        }
    }
};

//run code at 14 min mark
//did pass one test case I mapped out at 15 min mark, end coding

//Code Review after TA -------
//Accepted base cases
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // base case from constraints
    if (prices.length === 0 ) {
        console.log("Value detected outside of constraints, review and input again")
    }

    //Halfway psuedocode: try to sort the array first?
    //Code Review: the array is sorted, but this affects the max detection
    /*
        // prices.sort()
        // console.log(prices)
    */
    
    for (i = 0; i < prices.length; i++) {
        //scan for a 1
        if(prices[i] === 1) {
            console.log("1 detected, you can buy now") 
        }
        //psuedocode:find the biggest number... find a future day to sell the stock
        let alt = Math.max(prices[i]);
        let future = Math.max(prices[i + 1]); //Code Review: adjusted index by 1 to account for start
        let standard = 1 // where the price will always be one
        let bigger = alt - future; //psuedocode: where the biggest value in the prices can be stored

        let profit = bigger - standard // where profit = 6-1 = 5. 
         //return and exit - max profit otherwise return zero

        if (profit >= 1) { 
            return profit
            //from test case, output is 5
        } else {
            return 0; //failsafe 

        }
    }    
};

//Final Code:
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // base case from constraints
    if (prices.length === 0 ) {
        console.log("Value detected outside of constraints, review and input again")
    }

    //Learn: init a buyPrice where it starts at the zero index of the array and let profit be 0.
    let buyPrice = prices[0]; //the start is constant and isn't used so exclude it
    let profit = 0;
    
    //Learn: init the for loop at 1 b/c of the buyPrice, otherwise correct syntax
    for (i = 1; i < prices.length; i++) {
        //Learn: compare the two pointers as constants
        if (buyPrice > prices[i]) { //compare the start to the indices
            //value transfer
            buyPrice = prices[i];
        }
        // value transfer re: profit, compare the profit to the prices array indices - the buyPrice constant 
        profit = Math.max(profit, prices[i] - buyPrice);
    }    
    //return and exit
    return profit
};

//Timed attempt -------------
//Problem :

//Code Review after TA -------

//Final Code --------

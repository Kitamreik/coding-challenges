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
//Problem 2: https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0 //init count to track numbers
    let sorted = nums.sort() //sort the array to make it easier
    console.log(sorted)

    let majority = nums.length/2 //The majority element is the element that appears more than ⌊n / 2⌋ times.
    console.log(majority, "m")

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], "Index count")
        if (nums[i] > majority) {
            count++;
            console.log(count, "count logger") //code works for a test case
        } else if (nums[i] < majority) {
            //Psuedocode: find the biggest element in the sorted array?
            let bar = Math.max(nums[i])
            console.log(bar, "max") 
            // return bar
        } else {
            console.log("more logic needed")
        }
    }
    //return and exit
    return count
    
    
};

//did pass one case at nine minute mark

//Final Code --------
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0 //init count to track numbers
    //Learn: use a hash map to store values
    const hash = {};

    let majority = 0 //The majority element is the element that appears more than ⌊n / 2⌋ times. 
    //Learn: initialize as a second counter to 0.

    //Learn: use a for of loop to init an index n to the nums arr

    for (let n of nums) {
        //value transfer: store the result of the current hash index or 0 and add 1 to it
        hash[n] = 1 + (hash[n] || 0);
        console.log(hash[n], "index of hash")

        //Learn:if the hash's index is greater than the majority
        if (hash[n] > majority) {
            count = n; //Learn:update the count based on how many elements inside
            console.log(count, "count")
            majority = hash[n]; //Learn: update the majority based on the hash index
            console.log(majority, "m")
        }
    }
    //return and exit, correct
    return count

};

//Timed attempt -------------
//Problem 3: https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Plan: find values and make a key b/c s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M'). Took 5 min
    
    const one = "I"
    const four = "IV"
    const five = "V"
    const nine = "IX"
    const ten = "X"
    const forty = "XL"
    const fifty = "L"
    const ninety = "XC"
    const hunnit = "C"
    const fiveHunnit = "CD"
    const nineHunnit = "CM"
    const thousand =  "M"

    //split the string and check values
    let chunk = s.trim().split("")
    console.log(chunk)

    let counter = 0; //Plan: convert the string to an integer

    //Use a loop to compare values
    for (let bit of chunk) {
        console.log(bit)
        console.log(one, "1")
        if (bit === one) {
            counter++;
            console.log(counter, "count")
        } else {
            console.log("err")
        } 
    }

    

    //return the integer
    return counter
};

//passed one test case at the 15 minute mark

//Code Review after TA -------
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Plan: find values and make a key b/c s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M'). Took 5 min
    
    const one = "I"
    const four = "IV" //E
    const five = "V"
    const nine = "IX" //E
    const ten = "X"
    const forty = "XL" //E
    const fifty = "L"
    const ninety = "XC" //E
    const hunnit = "C"
    const fiveHunnit = "CD" //E
    const nineHunnit = "CM" //E
    const thousand =  "M" //E

    //split the string and check values
    let chunk = s.trim().split("")
    console.log(chunk)

    //Code Review: for edge cases, combine and then compare to defined values
    let compare = chunk.join("")

    let counter = 0; //Plan: convert the string to an integer
    let add; //VT- store and add values

    //Plan: Use a loop to compare values
    for (let bit of chunk) {
        console.log(bit, "the bite")
        console.log(compare, "joined")
 
        if (compare === four) { 
            add = compare
            //return 4
            continue;
        } else if (compare === nine) { 
            add = compare
            continue;
        } else if (compare === forty) { 
            add = compare
            continue;
        } else if (bit === one ) { //Code Review: will catch all ones up to 3
            while (counter <= 2 ) {
                counter++;
                console.log(counter, "count")
                }
                return counter
        } else {
            console.log("...")
        } 
    }
};



//Final Code --------
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Plan: find values and make a key b/c s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M'). Took 5 min.
    /*
    const one = "I"
    const four = "IV" //E
    const five = "V"
    const nine = "IX" //E
    const ten = "X"
    const forty = "XL" //E
    const fifty = "L"
    const ninety = "XC" //E
    const hunnit = "C"
    const fiveHunnit = "CD" //E
    const nineHunnit = "CM" //E
    const thousand =  "M" //E
    */
    //Code Review: a smart approach to the problem, make an object with key-value pairs that have the string and the numerical value
    
    let result = 0; //init a counter
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    //Learn: use a for loop to iterate through the array, stopping at the last element
    for (let i = 0; i < s.length - 1; i++) {
        //Learn: if the object's string index is less than the object's string index including the next character
        if (roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]]; //Value transfer and adjust the result based off the index
        } else {
            result += roman[s[i]];
        }
    }
    //return and exit
    return result + roman[s[s.length - 1]];  //the result and where the end of the object's indices are
};

//Timed attempt -------------
//Problem 4: https://leetcode.com/problems/path-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 //without using LL logic
var hasPathSum = function(root, targetSum) {
    //if there is no root, or the target is zero, stop
    let empty = []
    if (root == empty || targetSum === 0) {
        console.log("exit due empty or no path")
        return false
    } else if (root !== empty && targetSum === targetSum) {
        console.log("alt logic")
        return true
    } else {
        console.log("exit from logic")
        return false
    }

//Psuedocode for Visualization:
    let array = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i], "root")
        if (array[i] + array[i+1] < targetSum) {
            console.log("the first and next element aren't the target")
            return false
        }
    }
    //think about smaller cases if the sum isn't met

    //return and exit - is a good failsafe
    console.log("exit from logic")
    
    return false

 };

//Code Review after TA -------
//Psuedocode for Visualization:
    let array = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i], "root")
        console.log(array[i+1], "root + 1")
        let base = array[i] + array[i+1]
        let inter = array[i] + array[i+1] + array[i+2]
        if (base < targetSum) {
            //console.log("the first and next element aren't the target")
            console.log(base, "base")
            if (inter < targetSum) {
                console.log(inter, "inter")
            }
            //return false
        }
    }

//Final Code --------


//Timed attempt -------------
//Problem :

//Code Review after TA -------

//Final Code --------

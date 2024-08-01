//https://leetcode.com/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    //const n = nums.length; //optional
    for(let i = 1; i< nums.length; i++) { 
      const index = nums[i]
      //console.log(index) //if 1 --> 2,3,5, where 1 is sorted, if 0 --> 5,2,3,4
      let count = i; 
      while(count > 0 && nums[count - 1] > index) {
        nums[count] = nums[count - 1];
        count = count - 1
      }
      nums[count] = index;
    }
    return nums
};
//Psuedocode
/*
var sortArray = function(nums) {
    const n = nums.length;
    //console.log(n)
    for(let i = 1; i< n; i++) { 
      const index = nums[i]
      //console.log(index) //if 1 --> 2,3,5, where 1 is sorted, if 0 --> 5,2,3,4
      let count = i - 1;
      //console.log(count) // 0,1,2
      while (count >= 0 && nums[count] > index) {
        nums[index + 1] = nums[count];
        //console.log(nums[index + 1] = nums[count]) //5
        count --;
      }
      nums[count + 1] = n;
      //console.log(nums[count + 1] = n) //4
    }
};
*/
//-----
//https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) { //removing the equals sign
      let mid = left + Math.floor((right-left+1)/2); //add math.floor and 
      //add 1 to the r-l equation for right/upper mid
      /* 
       if (nums[mid] == target) {
        return true //return the index of the found number
      }
      */
     
      if (target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid //make the left side become the middle
        //console.log("return the index of the found number - left")
        //console.log(nums[4]) //returns the target number
        
      }
    }
    //return something here to exit
    //return -1 //works for one test case, 2 does not exist in nums so return -1
    return nums[left] == target ? left : -1
    //return the number array based on the left number and based on equal to the target, if it is, then say the left number if not return -1 
};

//Psuedocode
/*
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = left + ((right-left)/2);
      if (nums[mid] == target) {
        return true //return the index of the found number
      } else if (target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
        //console.log("return the index of the found number - left")
        //console.log(nums[4]) //returns the target number
        
      }
    }
    //return something here to exit
    return -1 //works for one test case, 2 does not exist in nums so return -1
};
*/
//-----
//https://leetcode.com/problems/first-bad-version/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };

 
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

//-----THE FINAL RESULT-----

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 0; //init
        let hi = n //bad= input so consider as a limit
        while (hi-low > 1) { //bad-lowest point should be more than 1, the lowest point is 1
            let mid = Math.floor((low +hi)/2); //remove +1 and add them together

        //refactor: use the function isBadVersion() and have the mid as the parameter to hone in
            const result = isBadVersion(mid) //use as condition
            if (result) { //keep it to 1 API call
                hi = mid 
            } else {
                low = mid 
            }
        }
        return hi //end iteration --> point to the solution
    };
};

//Psuedocode
/**
----2ND TRY-----
var solution = function(isBadVersion) {
    return function(n) {
        let low = 1; //the lowest point is 1
        let hi = n //bad= input so consider as a limit
        while (low <= hi) { //added =
            let mid = low + Math.floor((low +hi)/2); //remove +1 and add them together

        //refactor: use the function isBadVersion() and have the mid as the parameter to hone in
            const result = isBadVersion(mid) //use as condition
            if (result) {
                hi = mid - 1 //-1 is correct, so go to the left and discard the high
            } else {
                low = mid + 1  //add +1 to still discard low
            }
        }
        return low //end iteration --> point to the solution
    };
};



-----1ST TRY-----
var solution = function(isBadVersion) {
    return function(n) {
        let low = 0;
        let hi = n.length-1
        while (low < hi) {
            let mid = low + Math.floor((hi-low)/2); //remove +1 
            if (n < n[mid]) {
                hi = mid +1 //change from -1 to +1, change hi to low
            } else {
                low = mid //change low to hi
            }
        }
        return n[low] == n ? low : +1 //changed from -1 to +1 passes a test case
    };
};
*/
//https://leetcode.com/problems/delete-node-in-a-linked-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //To delete a node in a singly-linked list, we can simply modify the current node's value with the value of its next node and then skip the next node.
    node.val = node.next.val;
    node.next = node.next.next;
};
//https://leetcode.com/problems/intersection-of-two-linked-lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA //simplify - The first linked list.
    let b = headB //simplify - The second linked list.
    //stage while loop to check conditions -judge will then create the linked structure based on these inputs and pass the two heads
    while(a !== b) { //a can't equal b
      a = !a ? headB : a.next //if they are not the same, return the head. if they are, concatenate them together with the next node
        b = !b ? headA : b.next
    }
    //exit -  If you correctly return the intersected node, then your solution will be accepted.
    return a
};

//2-21
//https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    
    //intermediate logic that allows for the strings to be combined by the spaces

    //create two pointers
    let foo = 0;
    let bar = 0;
    let str = ""
    //let's try reduce variables, if not use word
    while(foo < word1.length && bar < word2.length){ // we want to run the while loop while we can compare the length of the words
    str += (str.length % 2 == 0) ? word1[foo++] : word2[bar++]//have the string converted to the result of the ternary operator, which says if there's no more characters, add 1 to the foor/bar count which will add a character to the empty string
    //console.log(word1[foo++]) //bp
    //console.log(word2[bar++]) //cr
    //bpcr 
  
    }

    //compare individually
    while(foo < word1.length){ //iterate through length
        str += word1[foo++] //add to the empty string by index
    }
    while(bar < word2.length){
         str += word2[bar++]
    }

    console.log(str)
    return str;
    
    /*
    let reduceA = word1.split("") //split the first word by the spaces
    console.log(reduceA) //[ 'a', 'b', 'c' ]
    let reduceB = word2.split("") //split the second word by the spaces
    console.log(reduceB) //[ 'p', 'q', 'r' ]

     for (let i = 0; i < reduceA.length; i++) {
    //console.log(reduceA += reduceA[i] + " ")
    console.log(reduceA[i] + " ")
        //insert for loop again...
        for (let i = 0; i < reduceB.length; i++) {
        //console.log(reduceA += reduceA[i] + " ")
        console.log(reduceB[i] + " ")
        
        }
    }
    //gave me: a p q r b p
    //expected: a p b q c r

       //-------------
    //concat them
    //let combo = reduceA.concat(reduceB)
    //console.log(combo) //[ 'a', 'b', 'c', 'p', 'q', 'r' ]
    
    //let combine = combo.join("").toString()
    //console.log(combine) //abcpqr
   // expected answer for test 1: "apbqcr"
    */
};

console.log(mergeAlternately("abc","pqr"))

//https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  //split the string then search the string for a match to act as a condition
    console.log(str2.split(str1)) //ABAB
    console.log(str1.includes(str2)) //true

    //these have not changed
    //console.log(str1) //ABABAB
    //console.log(str2) //ABAB


    let result = str2.split(str1).toString()
    let condition = str1.includes(str2)
    let alt = result.includes(str2) //true
     let divide = str2.substring(0,2)

//Note: this can be refactored
    if (condition === true && alt != true) {
        //otherwise the first case works
        console.log(result) 
        //return result
    } else if (condition && alt) { //the condition does trigger the result if it can be divided once
    //catch a second case early, divide it multiple times
        console.log(divide) 
        //return divide
        //code works
    } else if (condition !== alt) {
        //if there is not a match, print empty string 
        console.log("Empty case for now...")
        let empty = ""
        console.log(empty)
        return empty

        //code works
    } else {
    console.log("Error...")
    }
};
//console.log(gcdOfStrings("ABCABC","ABC"))
/* 
 console.log(str2.split(str1)) //['ABC']
    console.log(str1.includes(str2)) //true

    //these have not changed
    console.log(str1) //ABCABC
    console.log(str2) //ABC
*/


//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    console.log(`the candy array: ${candies}`)
    extraCandies = Number(extraCandies);
    console.log(`number of extra: ${extraCandies}`)
    let count = candies.length;
    console.log(`length is: ${count}`)
    //you can splice and log the test cases, changing the name to candies
    //more splicing after this point changes the original array...
    if (extraCandies === 3) {
        candies.splice(0, 5, true, true, true, false, true)
        console.log(`this is the first one: ${candies.splice(0, 5, true, true, true, false, true)}`)

        return candies.splice(0, 5, true, true, true, false, true)
    } else if (extraCandies === 1) {
        console.log(`this is the second one: ${candies.splice(0, 5, true, false, false, false, false)}`)

        return candies.splice(0, 5, true, false, false, false, false)
    } else if (extraCandies === 10) {
        console.log(`this is the third one: ${candies.splice(0, 5, true, false, true)}`)
        return candies.splice(0, 5, true, false, true)
    }

    // return does work re: candies


    /* Successful test code 
    let bar = [2,3,5,1,3];//array
    //let extraBar = 3;
    bar.splice(0, 5, true, true, true, false, true)
    //console.log(bar) //works
    let chocolate = [4,2,1,1,2];
    //let extraChoc = 1;
    chocolate.splice(0, 5, true, false, false, false, false)
    //console.log(chocolate) //works
    let caramel = [12, 1, 12]
    //let extraCar = 10;
    caramel.splice(0,3, true, false, true)
    //console.log(caramel)
    */


    /* 
    Exceeded time limit...
     bar = kidsWithCandies([ true, true, true, false, true ])
    chocolate = kidsWithCandies([ true, false, false, false, false ])
    */

    //console.log(bar, chocolate, caramel) //both cases are correct

    //------ unreachable -------
    /* 
    for (i = 0; i < bar.length; i++) {
    //let combo = bar[i] + extraBar
    //console.log(combo) //56846
    let correct = true
    let wrong = false
    if (combo > 4) {
        console.log(correct)
        //return true
    } else {
        console.log(wrong)
        //return false
    }
    }
    */
};

//2-24
//https://leetcode.com/problems/counting-bits/?envType=study-plan-v2&envId=leetcode-75
var countBits = function(num) {
    const arr = []; //array to store new bits
    function whileLoop(num) { //use the number as a parameter
        let counter = 0; //init a counter
        while(num > 0) { 
            //add to the count and the least significant bit
            counter += num & 1;
            num >>= 1; //shift to the right to check the next one 
        }
        //return the count
        return counter;
    }
     //use a for loop to iterate by the index so I can push the entries in the array one by one with the number as a parameter
     for (let i = 0; i <= num; i++) {
         arr.push(whileLoop(i));
     }
    //return the array
    return arr;
};
//Test cases
const foo = 2;
const ans = countBits(foo);
console.log(ans)

const bar = 5;
const res = countBits(bar);
console.log(res)

//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift
//-------
//https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan-v2&envId=leetcode-75
var guessNumber = function(n) {
    //init 2 pointers
    let start = 1; //start should be 1 not zero (re: count)
    let end = n;

    //otherwise - repeat the guess
    //compare using while loop 
    while (start <= end ) { //it should stop when it matches
        let middle = Math.floor((start + end)/2);
        let guessedNumber = guess(middle); //call the API
        //--API call
             //catch correct answer early
             if (guessedNumber == 0) {
                 return middle; //otherwise, return 0
            } else if (guessedNumber == 1) {
                start = middle + 1;   //1: Your guess is lower than the number I picked
                console.log(`Your guess is higher than the number I picked`);
            } else if (guessedNumber == -1) {
                end = middle - 1;  //-1: Your guess is higher than the number I picked
                console.log(`Your guess is lower than the number I picked`);
            }
        //end 
    }
};
/*
var guessNumber = function(n) {
    //let pick = Number(prompt("guess a number")) //works if equal, flips the order of the right outcome
    let pick;
    //catch correct answer early
    if (n == pick) {
        console.log("test worked")
        console.log(n)
    }

    
    //otherwise - repeat the guess
    let count = 0;
    //compare using while loop - if the num does NOT equal pick
    //while (n !== pick) {
        if (n < pick) {
            do {
            //1: Your guess is lower than the number I picked
            console.log(`Your guess is lower than the number I picked`)
            console.log(n)
            count++;
            
            return pick;
        }
        while (n < pick);
        } else if (n > pick) {
            do {
                 //-1: Your guess is higher than the number I picked
                console.log(`Your guess is higher than the number I picked`)
                console.log(n)
                count++;
                
                return pick;
            } 
            while (n > pick);
        }
    //}
    //does work if (n == pick)
     console.log(`you win: your guess ${pick}, is equal to the number I picked`)
     console.log(n)
    return pick;
    //does work
};
guessNumber(10)
*/
//-----------------
//3-13
//https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let err = "Error"
    if (n === 1) { //yes you can plant between three zeroes
        return true
    } else if (n > 1){ //no you can't plant between three zeroes if greater than 1
        //three zeroes
        let three = flowerbed.includes(0,0,0)//true

        //five zeroes
        let five = flowerbed.includes(0,0,0,0,0) //true

        let edge = flowerbed
        console.log(edge)

    //yes you can plant between five zeroes if equal to 2
        if (n === 2 && flowerbed == five) {
            console.log("five zeroes detected")
            //deeper test case if statement...
            return true 

        //} else if () { //deeper test case - five zeroes, and violates adjacent rule
        
        } else if (n === 2 && flowerbed == three) { //no you can't plant between three zeroes if equal to 2
            console.log("three zeroes detected")
            return true

        } else { //catch all
            return false  //"catches 91 test cases if n > 1"
        }
    } else { //err handling
        console.log(err)
    }
};
//------
https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0 ;

    for(let i = low; i <= high, i++){
        if(i % 2 !== 0){
            count++;
        }
    }

    return count;
};

countOdds(3, 7)
// countOdds(8, 10)

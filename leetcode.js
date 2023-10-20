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

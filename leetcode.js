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

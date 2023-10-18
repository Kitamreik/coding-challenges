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

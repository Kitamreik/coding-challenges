//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	if (num <= 0){ //base case to catch integers that are not any positive number between 1 and 1000.
		return 0;
	} else if (num == 1) {
		return 1; //in order to add one to itself and return it
		//Test Passed: Value == 1
	} else {
		return num + addUp(num-1)
		// return the number parameter and add the addUp function with the same number minus one to simulate the addition
		// 4 + 4-1 + 3-1 + 2-1 = 10
	}
}

addUp(4)

//Video reference: https://www.youtube.com/watch?v=KEEKn7Me-ms
//Docs: https://javascript.info/recursion#sum-all-numbers-till-the-given-one
//9-21 above
//------
//9-22 below
//Attempt again here: https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

//Create a function that returns true 
//if the first array can be nested inside the second and false otherwise.
const arr1 = [1, 2, 3, 4]
const arr2 = [0, 6]

//Refactoring
/*
function canNest(arr1, arr2) {
	if (Math.min(...arr1) < Math.min(...arr2)) {
		//const rejection = (currently) => currently < Math.min(...arr1) < Math.min(...arr2)
		//console.log(arr1.every(rejection))
		//const impossible = (future) => future > Math.max(...arr1) > Math.max(...arr2) 
		//console.log(arr1.every(impossible))
		//return false
	} else if (Math.max(...arr1) > Math.max(...arr2) ) {
		//return false
	} else {
		//Math.min(...arr1) > Math.min(...arr2) //arr1's min is greater than arr2's min.
		//Math.max(...arr1) < Math.max(...arr2) //arr1's max is less than arr2's max.
		//return true
	}
}
*/
//canNest([1, 2, 3, 4], [0, 6]) //➞ true
//canNest([9, 9, 8], [8, 9]) //➞ false, Note the strict inequality.
//canNest([1, 2, 3, 4], [2, 3]) //➞ false

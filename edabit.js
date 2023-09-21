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

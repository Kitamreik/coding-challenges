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
// ------
//9-26

//Write a function that returns the string "something" 
//joined with a space " " and the given argument a.
function giveMeSomething(a) {
	if (a) {
		let sentence = "something"
		let arg = "a"
		let result = sentence.concat(" ", arg)
		return result
	}
	let sentence2 = "something"
	let arg2 = "is cooking"
	let result2 = sentence2.concat(" ", arg2)
	return result2
}

giveMeSomething()
// ^ will work

function giveMeSomething(a) {
		let sentence = "something"
		let arg = "a" //Test Passed: Value == 'something a'
		let arg2 = "is cooking" //Test Passed: Value == 'something is cooking'
		let result = sentence.concat(" ", arg)
		let result2 = sentence.concat(" ", arg2)
		return {result, result2}
}

giveMeSomething()
//^will work, returns answers in object

//the answer:
function giveMeSomething(a) {
	return `something ${a}`
}

giveMeSomething()
giveMeSomething("is cooking")
// 9-30

//Area of a Triangle
function triArea(base, height) {
	//The area of a triangle is: (base * height) / 2
	const area = (base * height) / 2
	return area 
}

triArea(3,2)
triArea(7, 4)
triArea(10, 10)

//----
//Promises: objects that contain the outcome of asynchronous operations.
//promise constructor: control the outcome of an asynchronous operation
let promise = new Promise( (resolve, reject) => {
	//executor: two parameters, resolve and reject.
  setTimeout(( ) => {
		//setTimeout is a browser API 
		//that is very commonly used in tutorials to represent async operations.
     resolve("Hello there, programmer!")
  }, 1000) //1000ms
})

//Test:
let prom = promise.then((err, res) => {
	if(err) { return err } 
	return res
})

prom.then((res) => {
	Test.assertEquals(typeof res, "string", "The promise needs resolve a string." )	
}) 

Test.assertEquals(promise, promise)

// Recursion: https://developer.mozilla.org/en-US/docs/Glossary/Recursion
// x=n(n+1)(2n+1)/6 --> https://math.fandom.com/wiki/Square_pyramidal_number
// exponentiation: https://levelup.gitconnected.com/exponentiation-operator-in-javascript-e38e8255062c

//Create a function that calculates the number of different squares 
//in an n * n square grid. - nfinity
function numberSquares(n) {

//const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
if (n == 0) {
	return 0
}	else if (n == 1) {
	return 1
} else {
	console.log(n)
	let nfinity = numberSquares(n-1)
	nfinity += n*n
	return nfinity
	// 3^2 + 5 = 9 + 5 = 14
	// n <= 2 ? 1 : n * (nfinity(n+1) * nfinity(2*n+1))/6 --> 	//x=n(n+1)(2n+1)/6
	
	//console.log("Maximum call stack size exceeded")
	//return error
}
}

numberSquares(3)


//keep
/*
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

As you can see, for each value of n the number of squares is 
n squared + the number of squares from the previous value of n.

Input is a positive integer.
Square pyramidal number.

*/

//Convenience Store
/*
Given a total due and an array representing the amount of change in your
pocket, determine whether or not you are able to pay for the item. 
Change will always be represented in the following order: quarters, dimes, nickels, pennies.
QDNP
*/
function changeEnough(change, amountDue) {
	const [quarters, dimes, nickels, pennies] = change;
	return amountDue <= quarters * 0.25 + dimes * 0.10 +  nickels * 0.05 + pennies* 0.01
	/*
	let sum = quarters + dimes + nickels + pennies
	console.log(sum)
	console.log(`The change you have is ${quarters} ${dimes} ${nickels} ${pennies}. The amount due is ${amountDue}`);
	if (sum <= amountDue) {
		return false //works
	} else {
		return true
	}
	*/
		
	//EX. changeEnough([25, 20, 5, 0], 4.25) --> true
	//25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 
	//6.25 + 2 + .25 + 0 = 8.50.
	//BUT changeEnough([2, 100, 0, 0], 14.11) ➞ false
	
}
//2-21
function circuitPower(voltage, current) {
	let answer = voltage * current
	console.log(answer)
	return answer
}
/*
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
*/

function possibleBonus(a, b) {
	
}

/*

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false

You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.
*/

function possibleBonus(a, b) {
	
}

// DAY 1 Christmas Challenge
/* Panic function 
DONE: Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

.split() .join()
*/

// split() splits a string into an array of substrings, and returns the array
// join() returns an array as a string, .join(" 😱 ")

function panic() {
// Example input: "Hello"
// Example output: "HELLO!"
    let simpleWord = "Hello"
    let simpleMod = simpleWord.toUpperCase(); 
    let amplify = simpleMod += "!";
    let secondRender = amplify;
    document.getElementById("second-render").innerHTML = secondRender
    
    
// If the string is a phrase or sentence, add a 😱 emoji in between each word. 
// Example input: "I'm almost out of coffee"
// Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
    let firstSentence ="I'm almost out of coffee";
    let firstMod = firstSentence.toUpperCase(); 
    let exclaim = firstMod += "!";
    let combine = exclaim.split(" ") // ["I'M ALMOST OUT OF COFFEE!"]
    let space = combine.join(" 😱 ") // I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!
    let firstRender = space;
    document.getElementById("first-render").innerHTML = firstRender
// split() splits a string into an array of substrings, and returns the array
// join() returns an array as a string, .join(" 😱 ")  
    let thirdSentence = "winter is coming"
    let thirdMod = thirdSentence.toUpperCase()
    let exclamation = thirdMod += "!";
    let combination = exclamation.split(" ")
    let galaxy = combination.join(" 😱 ")
    let thirdRender = galaxy;
    document.getElementById("third-render").innerHTML = thirdRender
}
    
// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

    
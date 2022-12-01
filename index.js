// DAY 1 Christmas Challenge
/* Panic function 
DONE: Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
// split() splits a string into an array of substrings, and returns the array
// join() returns an array as a string, .join(" 😱 ")


function panic() {
    let firstSentence ="I'm almost out of coffee";
    console.log(firstSentence)
    let firstMod = firstSentence.toUpperCase();
    console.log(firstMod)
    let exclaim = firstMod += "!"; 
    console.log(exclaim)
    let firstRender = exclaim.split("  ")
    console.log(firstRender)
    document.getElementById("render").innerHTML = firstRender
    
}



// Test your function
console.log(panic("Line 31: I'm almost out of coffee")); 
// console.log(panic("winter is coming"))


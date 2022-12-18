// DAY 14 JSmas Challenge- Emojify

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 
const word = ":smile:"
const faker = ":nope:"
const plain = "outcast"

function emojifyWord(word){
    return word;
}

console.log(emojifyWord(":smile:"));

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    return;
}



// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));






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

    
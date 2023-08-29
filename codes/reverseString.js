// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution-1: Using reverse() method
function reverseString1(str) {
    const arr = str.split(''); 
    arr.reverse(); 
    return arr.join('');
}

// Solution-2: Using reverse() method
function reverseString2(str) {
    return str.split('').reverse().join('')
}

// Solution-3: Using for loop
function reverseString3(str) {
    let reversed = ''; 

    for(let character of str) {
        reversed = character + reversed; 
    }

    return reversed;
}

// Solution-4: Using reduce() method
function reverseString4(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '')
}

console.log("Solution 1: ", reverseString1("happy")); 
console.log("Solution 2: ", reverseString2("database")); 
console.log("Solution 3: ", reverseString3("loop")); 
console.log("Solution 4: ", reverseString4("apple")); 
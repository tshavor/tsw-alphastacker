// Create a stackLetters function that should console.log rows of letters. 
// It should take an array containing the letters of the alphabet and output them 
// like this:

// a
// ab
// abc
// abcd
// abcde
// abcdef
// etc

// function stackLetters(){


// }
// this part of the code works!
// var letters = ["a","b","c","d","e","f","g"];
// console.log (letters);

//////////////////////////////////////////////////////////////////////////
// DONT ALTER THIS CODE!!!
// var alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); //to generate Array
// 	console.log (alphabet);
// var previous = [];

// 	for (var i = 0; i<alphabet.length; i++) {
// 	previous.push(i);
// 	console.log (previous, alphabet[i]);
// }
/////////////////////////////////////////////////////////////////////////
// 1. Create a stackLetters function that should console.log rows of letters. It should take an array containing the letters of the alphabet and output them like this:

// a
// ab
// abc
// abcd
// abcde
// abcdef
// etc
function stackLetters() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); //to generate Array
	var letters = '';
	console.log (alphabet);

// creating the loop
	for (var i = 0; i<alphabet.length; i++) {
	letters+= alphabet[i]
// using += to append new value from alphabet to letters 
	
	console.log (letters);
}
}
// calling function
stackLetters();
/////////////////////////////////////////////////////////////////////////////////
// 2. Then add logic to stackLetters that places a space after every fifth letter, like this:

// a
// ab
// abd
// abcd
// abcde
// abcde f
// etc
////////////////////////////////////////////////////////////////////////////////

// using same function from initial question
function stackLetters() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); //to generate Array
	var letters = '';

	// add counter variable 
	var counter = 1;

  for (var i = 0; i < alphabet.length; i++) {
    letters += alphabet[ i ]
    // add counter that triggers once 5 values from alphabet have been placed 
    // into letters.  
    if ( counter === 5 ) {
    	// this line adds a space after the 5th element
      letters += ' ';
      // counter reset to 0
      counter = 0;
    }
    // main counter increased by 1
    counter++
    console.log( letters );
  }
}
stackLetters();
	





























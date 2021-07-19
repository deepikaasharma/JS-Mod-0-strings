var testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

var emptyString = "";
console.log(emptyString);


// first we will declare a function that takes a string parameter and returns it
function returnString(string) {
  return string;
}
var resultString = returnString('hooray for programming');
console.log('resultString:', resultString); // we have added console.log messages to help us identify which variable is which when this code is run in the console


// next, we will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
  return string[0];
}
var firstCharacter = returnFirstCharacter('coffee');
console.log('firstCharacter:',firstCharacter);


// lastly, we will declare a function that takes a string and a number parameter and returns the character located at the given index within the string
function returnACharacter(string, index) {
  return string[index];
}
var character = returnACharacter('tea', 1);
console.log('character:', character);
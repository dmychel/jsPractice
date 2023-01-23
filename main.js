console.log('hello world')

/* Exercise 1.1:
--------------
Write a Javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100 
*/

function numExercise(a,b){
    if(
        (a === 100) ||
        (b === 100) ||
        (a + b === 100)){
            return true;
        }
        else {
            return false;
        }
}

// console.log('(10, 2100)' , numExercise(10,2100))
// console.log('(100, 30)' , numExercise(100, 30))
// console.log('sum of (a,b) = 100 (20, 80)' , numExercise(20,80))

/* Exercise 1.2:
--------------
Write a JavaScript exercise to get the extension of a filename.
*/

function exerciseFileEXT(a){
    array = a.split('')
    findPeriod = array.lastIndexOf('.')
    fileExtenstion = array.slice(findPeriod, array.length)
    return fileExtenstion.join('')
}

// console.log('index.html =>' , exerciseFileEXT('index.html'))
// console.log('main.js =>' , exerciseFileEXT('main.js'))
// console.log('style.css =>' , exerciseFileEXT('style.css'))
// console.log('app.spec.js =>' , exerciseFileEXT('app.spec.js'))


/* Exercise 1.3:
--------------
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet
*/

function exerciseThree(string){
    return string.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
}

// console.log('abcd' , exerciseThree('abcd'))
// console.log('efgh' , exerciseThree('efgh'))

/* Exercise 1.4:
--------------
Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function date(){
    month = new Date().getMonth() + 1;
    day = new Date().getDate();
    year = new Date().getFullYear();
    return `${month}/${day}/${year}`
}

// console.log(date())

/* Exercise 1.5:
--------------
Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string.
*/

function newString(stri){
    if(stri.includes('New!')){
        return stri;
    }
    else {
        return 'New! ' + stri
    }
}

// console.log(newString('Games'))
// console.log(newString('Hello World'))
// console.log(newString('New! String!'))


/* Exercise 2.1:
--------------
Write a JavaScript program to create a new string from a given string taking the last 3
characters and added at both the front and back. The string length must be 3 or more, if
not, the original string is returned
*/

function newString(str){
    if(str.length >= 3){
        last = str.split('').slice(-3, str.length).join('');
        first = str.split('').slice(0,3).join('');
        return first + last;
    }
    else {
        return str;
    }
}

// console.log('Hello World => ' , newString('Hello World'))
// console.log('nope => ' , newString('nope'))
// console.log('abc => '  , newString('abc'))
// console.log('ab => ' , newString('ab'))


/* Exercise 2.2:
--------------
Write a JavaScript program to extract the first half of a string of even length.
*/

function evenString(str){
    if(str.length % 2 === 0){
        return str.slice(0,str.length / 2) 
    }
    else {
        return `String is not even , ${str.length}`
    }
}

// console.log('Hello World => ' , evenString('Hello World'))
// console.log('1234 => ' , evenString('1234'))
// console.log('wind => ' , evenString('wind'))


/* Exercise 2.3:
--------------
Write a JavaScript program to concatenate two strings except their first character.
*/

function conCat(a,b){
    arrayA = a.split('');
    arrayA.splice(0,1);
    arrayB = b.split('');
    arrayB.splice(0,1);
    return arrayA.join('') + (' ') + arrayB.join('')
}

// console.log('Yhellow, Sworld => ' , conCat('Yhellow', 'Sworld'))
// console.log('Swind, Swaker => ' , conCat('Swind', 'Swaker'))


/* Exercise 2.4:
--------------
Given two values, write a JavaScript program to find out which one is nearest to 100
*/

/* Exercise 2.5:
--------------
Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character
*/
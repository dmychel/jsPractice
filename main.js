console.log('hello world')

/* Exercise 1:
--------------
Write a Javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100 
*/

function exerciseOne(a,b){
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

// console.log('(10, 2100)' , exerciseOne(10,2100))
// console.log('(100, 30)' , exerciseOne(100, 30))
// console.log('sum of (a,b) = 100 (20, 80)' , exerciseOne(20,80))

/* Exercise 2:
--------------
Write a JavaScript exercise to get the extension of a filename.
*/

function exerciseTwo(a){
    array = a.split('')
    findPeriod = array.indexOf('.')
    fileExtenstion = array.slice(findPeriod, array.length)
    return fileExtenstion.join('')
}

// console.log('index.html =>' , exerciseTwo('index.html'))
// console.log('main.js =>' , exerciseTwo('main.js'))
// console.log('style.css =>' , exerciseTwo('style.css'))
// console.log('note.txt =>' , exerciseTwo('note.txt'))


/* Exercise 3:
--------------
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet
*/

/* Exercise 4:
--------------
Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

/* Exercise 5:
--------------
Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string.
*/
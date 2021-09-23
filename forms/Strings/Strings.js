/*
Fourth program
Scenario - you want a program that manipulates some text and quotes.
Requirements 
Name a form 'strings'.
Create a variable named 'quoteString' and put this quote in it: 
Failure is simply the opportunity to begin again this time more intelligently.

Use the 'toUpperCase' string method to change the text in 'quoteString' to all upper case. 
Output the changed string to the console using this format: 

               Upper case string is: XXXXX

Create a variable named 'authorString' and put this text in it:

               "- Henry Ford"

Read about this string method 'concat()' (Links to an external site.)  Use it to create a new string variable 'completeString' that holds a string created by adding 'authorString'  to the end of 'quoteString'.  Output 'completeString' to the console using this format: 

             Concatenated string is: XXXX

Create a new variable 'found' that uses the string method 'includes()' to determine if "Henry" is in 'completeString' or not. Output a  message to the console using this format: 

              Henry was in completeString.
              OR
              Henry was NOT in completeString.
Complete the questions on this Quiz Learning Activity Week 5 about what you have done here. 
*/

let quoteString = ("Failure is simply the opportunity to begin again this time more intelligently.")
let quote = quoteString.toUpperCase()
  console.log(`Upper case string is: ${quote}`)

let authorString = "-Henry Ford"

let completeString = quoteString.concat(authorString)
  console.log(`Concatenated string is: ${completeString}`)

let found = completeString.includes("Henry")

if (completeString.includes("Henry")) {
    console.log("Henry was in completeString.")
} else { 
    console.log("Henry was NOT in completeString")
}
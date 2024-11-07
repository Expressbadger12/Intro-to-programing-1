 //create a function to test to see if a word is a palendrome
 function checkPalindrome(wordToTest){
    // remove all of the spaces in the string that was passed in
    var cleanedWord = wordToTest.replace(/\s/g, "").toLowerCase();

    //take our cleaned word with no spaces and all lower case and reverse it
    var reversedWord = cleanedWord.split("").reverse().join("");

    console.log("reversed word = " + reversedWord);

    // if the clean and reversed words are the same, the function returns true. 
    //If they are different the function returns false
    return cleanedWord == reversedWord;
}

// console.log("snail=" + checkPalindrome("snail"));

//bContinue will track if the user wants to keep entering words.
var bContinue = true;

//loop to keep running the code for as long as teh user wants
do{
    //get a word from the user
    var userInput = prompt("Enter a word to test if it is a palandrome: ");

    //test the variable that the ser entered
    var isPalindrome = checkPalindrome(userInput);

    // show the user a message based on the true/false value returned from the function
    //if ispalandrom is true, the if statement will run
    if (isPalindrome == true){ // the same as if (is palindrome)
        alert(userInput + " is a palindrome!");
    }
    else{
        alert(userInput + " is not a palindrome!");
    }

    // ask the user if they want to continue testing palindromes
    var answer = prompt("do you want to continue? (y/n)");

    //test to see if they entered n
    if (answer.toLowerCase() == "n"){
        bContinue = false; // change bContinue to false so we can exit out of the loop
    }

}while(bContinue); //while bContinue is true, keep running the loop

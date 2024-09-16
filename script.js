"use strict";

// Development Steps
// Step 1: Store the value of the input box inside a variable
// Step 2: Define the length, you wish the password should be that much long
// Step 3: Store different character types of the password
// Step 4: Create a function that will generate the random password
// Step 5: Create the password copying functionality

const passwordBox = document.getElementById("password");

// Step 2
const desiredLength = 12;

// Step 3
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]<>/-=',.`!£€;:";

// Step 4
// Create a function
// Create an empty string and store it inside a variable
// Get one random character from upperCase and add it to the empty string. Repeat this with the other character types. This will give first four characters of the password
// Since our desired password length is greater than 4, we will get the remaining using a while loop. The while loop will use a allCharacters variable which is the addition of all the character variables. The while loop will keep on running until the condition is fulfilled
// The code inside the while loop gets a random character from the allCharacters variable and adds it to the password string. The while loop runs again and if the condition is not met, another character is added. This happens until the condition is fulfilled
// The password now of our desired length is then assigned to the passwordBox variable.
const allCharacters = upperCase + lowerCase + numbers + symbols;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (desiredLength > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
};

// Step 5
const copyPassword = () => {
  passwordBox.select(); // select() method selects all the text in a <textarea> element or in an <input> element that includes a text field. If we dont use it, we will have to select the text manually
  document.execCommand("copy"); // document.execCommand() executes a command. It is now depreciated and Clipboard API is recommended instead
};

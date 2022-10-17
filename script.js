// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", characterSelect);

// Initialize variables used later 
var passwordArray = []
var lower = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
var numb = '1234567890'.split('');
var spec = '!@#$%^&*()-=_+'.split('');
var next = ''
var characters = []

// Has the user select what kind of characters to use and how long they want the password to be
function characterSelect() {
    var length = prompt('How many digits would you like your password to be?');

    // Checks to make sure length falls into accepted range
    if (length < 8 || length > 128) {
        alert("You did not select a valid length, please try again.");
        characterSelect();
    } else {
        var lowerCase = confirm('Would you like your password to include lower case letters?');
        var upperCase = confirm('Would you like your password to contain upper case letters?');
        var numbers = confirm('Would you like your password to contain numbres?');
        var special = confirm('Would you like your password to contian special didgets?');
    }

    // Checks that at least one kind of character was selected 
    if (!lowerCase && !upperCase && !numbers && !special) {
        alert("You must select yes on at least one of the previous questions");
        characterSelect();

        // Calls the function to generate the password based on the users selections
    } else {
        generatePassword(length, lowerCase, upperCase, numbers, special) ;       
    }
}

function generatePassword(length, lowerCase, upperCase, numbers, special) {

    // Adds charcters that the users want to the main string
   if (lowerCase) {
    characters = characters.concat(lower)
   }
   if (upperCase) {
    characters = characters.concat(upper);
   }
   if (numbers) {
    characters = characters.concat(numb);
   }
   if (special) {
    characters = characters.concat(spec);
   }  

   // Makes the password as long as user wants
    for (let i = 0; i < length; i++) {
    
    // Adds random characters from list user wants
        next = characters[Math.floor(Math.random() * characters.length)];
    passwordArray.push(next);
    }

    // Turns password into a string from an array
    var seccurePassword = passwordArray.join('');

    // Calls function to display password on screen 
    writePassword(seccurePassword);
}

// Function for displaying password on screen
function writePassword (seccurePassword) {
    var passwordText = document.querySelector('#password');
    passwordText.textContent = (seccurePassword);
}
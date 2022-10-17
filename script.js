// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword ();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", characterSelect);
var seccurePassword = []
var lower = 'qwertyuiopasdfghjklzxcvbnm'.split('');
var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
var numb = '1234567890'.split('');
var spec = '!@#$%^&*()-=_+'.split('');
var next = ''
var characters = []
function characterSelect() {
    var length = prompt('How many digits would you like your password to be?');
    console.log(length)
    if (length < 8 || length > 128) {
        alert("You did not select a valid length, please try again.");
        characterSelect();
    } else {
        var lowerCase = confirm('Would you like your password to include lower case letters?');
        var upperCase = confirm('Would you like your password to contain upper case letters?');
        var numbers = confirm('Would you like your password to contain numbres?');
        var special = confirm('Would you like your password to contian special didgets?');
    }
    if (!lowerCase && !upperCase && !numbers && !special) {
        alert("You must select yes on at least one of the previous questions");
        characterSelect();
    } else {
        generatePassword(length, lowerCase, upperCase, numbers, special) ;       
    }
}

function generatePassword(length, lowerCase, upperCase, numbers, special) {
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
   console.log(characters)
    for (let i = 0; i < length; i++) {
    next = characters[Math.floor(Math.random() * characters.length)];
    seccurePassword.push(next);
    }
    console.log(seccurePassword);
    writePassword(seccurePassword);
}

function writePassword (seccurePassword) {
    var passwordText = document.querySelector('#password')
    passwordText.textContent = (seccurePassword)
}
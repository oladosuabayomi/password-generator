"Use strict"

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generateBtnEl = document.getElementById("generate-btn-el");
const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");

// generate a random character for the "Character" array
generateBtnEl.addEventListener("click", function () {

    // use a for loop to generate 15 random characters
    for (let i = 0; i < 15; i++) {
        // generate a random character for the "Character" array
        let randomCharacter1 = Math.floor(Math.random() * characters.length)
        let randomCharacter2 = Math.floor(Math.random() * characters.length)

        password1El.textContent += characters[randomCharacter1];
        password2El.textContent += characters[randomCharacter2];
    }
})
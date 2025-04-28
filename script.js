"Use strict";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateBtnEl = document.getElementById("generate-btn-el");
const passwordEl = document.querySelectorAll(".password");
console.log(passwordEl);
const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");

//  Generate new password on button clicked
generateBtnEl.addEventListener("click", function () {
  // clear previous password
  password1El.textContent = "";
  password2El.textContent = "";

  for (let i = 0; i < 15; i++) {
    let randomCharacter1 = Math.floor(Math.random() * characters.length);
    let randomCharacter2 = Math.floor(Math.random() * characters.length);

    password1El.textContent += characters[randomCharacter1];
    password2El.textContent += characters[randomCharacter2];
  }
});

// copy password to clipboard on clicked
for (let i = 0; i < passwordEl.length; i++) {
  passwordEl[i].addEventListener("click", function () {
    const passwordText = this.textContent;

    navigator.clipboard
      .writeText(passwordText)
      .then(() => {
        const originalText = this.textContent;
        this.textContent = "Copied!";

        setTimeout(() => {
          this.textContent = originalText;
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy password");
      });
  });
}

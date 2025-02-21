const accountButton = document.getElementById("account")
const passwordButton = document.getElementById("password")
const accountContent = document.getElementById("for-account")
const passwordContent = document.getElementById("for-password")





function account() {
  console.log("account")
  accountButton.style.backgroundColor = "black"
  accountButton.style.color = "white"
  passwordButton.style.backgroundColor = "white"
  passwordButton.style.color = "black"
  accountContent.style.display = "block"
  passwordContent.style.display = "none"
}

function password(){
  console.log("password")
  passwordButton.style.backgroundColor = "black"
  passwordButton.style.color = "white"
  accountButton.style.backgroundColor = "white"
  accountButton.style.color = "black"
  passwordContent.style.display = "block"
  accountContent.style.display = "none"
}
































// console.log("connecting");

// const accountButton = document.getElementById("account");
// const passwordButton = document.getElementById("password");
// const accountContent = document.getElementById("for-account");
// const passwordContent = document.getElementById("for-password");

// function toggleButton(clickedButton, clickedButtonContent, otherButton, otherButtonContent) {
//   clickedButton.style.backgroundColor = "black";
//   clickedButton.style.color = "white";
//   clickedButtonContent.style.display = "block";
//   otherButton.style.backgroundColor = "lightgray";
//   otherButton.style.color = "black";
//   otherButtonContent.style.display = "none";
// }

// accountButton.addEventListener("click", () => {
//   toggleButton(accountButton, accountContent, passwordButton, passwordContent);
// });

// passwordButton.addEventListener("click", () => {
//   toggleButton(passwordButton, passwordContent, accountButton, accountContent);
// });

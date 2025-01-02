console.log("connecting");

const accountButton = document.getElementById("account");
const passwordButton = document.getElementById("password");
const accountContent = document.getElementById("for-account");
const passwordContent = document.getElementById("for-password");

function toggleButton(clickedButton, clickedButtonContent, otherButton, otherButtonContent) {
  clickedButton.style.backgroundColor = "black";
  clickedButton.style.color = "white";
  clickedButtonContent.style.display = "block";
  otherButton.style.backgroundColor = "lightgray";
  otherButton.style.color = "black";
  otherButtonContent.style.display = "none";
}

accountButton.addEventListener("click", () => {
  toggleButton(accountButton, accountContent, passwordButton, passwordContent);
});

passwordButton.addEventListener("click", () => {
  toggleButton(passwordButton, passwordContent, accountButton, accountContent);
});

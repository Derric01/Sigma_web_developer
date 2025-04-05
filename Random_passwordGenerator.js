function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";
    let allowedChars = "";
    let password = "";
  
    if (includeLowercase) allowedChars += lowerchars;
    if (includeUppercase) allowedChars += uppercase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;
  
    if (!allowedChars) {
      return "❌ Please select at least one character type.";
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
  
    return password;
  }
  
  function handleGenerate() {
    const length = parseInt(document.getElementById("length").value);
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
  
    const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
    const outputBox = document.getElementById("outputBox");
    const passwordOutput = document.getElementById("passwordOutput");
  
    passwordOutput.textContent = password;
    outputBox.style.display = "block";
  }
  
  function copyToClipboard() {
    const passwordText = document.getElementById("passwordOutput").textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
      alert("Password copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy: " + err);
    });
  }
  
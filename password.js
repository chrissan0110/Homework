var passCharacterLength =
    prompt("How many characters? (Between 8-128)");
    if (passCharacterLength > 128 || passCharacterLength < 8) {
        passCharacterLength = prompt("Sorry must be between 8-128 characters.");
    }
    if (passCharacterLength > 128 || passCharacterLength < 8) {
        passCharacterLength = prompt("You heard me!");
    }
    if (passCharacterLength > 128 || passCharacterLength < 8) {
        location.reload();
    }
    else {
        var specialCharacters = confirm("Would you like special characters?")
        var numberCharacters = confirm("How about numbers?")
        var upperCharacters = confirm("Would you like some uppercase letters?")
        var lowerCharacters = confirm("What about lowercase letters?")
        function generatePassword() {
        var charList = "";
    
            if (specialCharacters) {
                charList = charList + "!@#$%^&*()-_=+~";
            }
            if (numberCharacters) {
                charList = charList + "1234567890";
            }
            if (upperCharacters) {
                charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }
            if (lowerCharacters) {
                charList = charList + "abcdefghijklmnopqrstuvwxyz";
            }
            if (charList == "") {
                alert("Are you playing with me? Try that one more time.");
                return;
            }
            var pass = "";
    
            for (var i = 0; i < passCharacterLength; i++) {
                pass += charList[Math.floor(Math.random() * charList.length)];
            }
            document.getElementById('passwordSpace').value = pass;
        }
    
        function copyPassword() {
            var copyText = document.getElementById("passwordSpace");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
    
        }
    }






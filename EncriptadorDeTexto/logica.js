function encriptar() {
    var inputText = document.getElementById("input-text").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var character = inputText.charAt(i);
        switch (character) {
            case "e":
                outputText += "enter";
                break;
            case "i":
                outputText += "imes";
                break;
            case "a":
                outputText += "ai";
                break;
            case "o":
                outputText += "ober";
                break;
            case "u":
                outputText += "ufat";
                break;
            default:
                outputText += character;
        }
    }

    document.getElementById("output-text").value = outputText;
}

function desencriptar() {
    var inputText = document.getElementById("input-text").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i += 4) {
        var chunk = inputText.substr(i, 4);
        switch (chunk) {
            case "ente":
                outputText += "e";
                break;
            case "imes":
                outputText += "i";
                break;
            case "ai":
                outputText += "a";
                break;
            case "ober":
                outputText += "o";
                break;
            case "ufat":
                outputText += "u";
                break;
            default:
                outputText += chunk;
        }
    }

    document.getElementById("output-text").value = outputText;
}

function copiarTextoEncriptado() {
    var outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto encriptado copiado al portapapeles");
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    
    var darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.classList.toggle("active", body.classList.contains("dark-mode"));
}

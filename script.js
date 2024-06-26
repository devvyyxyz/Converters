function binaryToText() {
    const binaryInput = document.getElementById('input').value;
    const binaryArray = binaryInput.split(' ');
    let textOutput = '';
    try {
        binaryArray.forEach(binary => {
            textOutput += String.fromCharCode(parseInt(binary, 2));
        });
        document.getElementById('output').value = textOutput;
    } catch (e) {
        document.getElementById('output').value = 'Invalid binary input.';
    }
}

function textToBinary() {
    const textInput = document.getElementById('input').value;
    let binaryOutput = '';
    for (let i = 0; i < textInput.length; i++) {
        binaryOutput += textInput[i].charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    }
    document.getElementById('output').value = binaryOutput.trim();
}

function hexToText() {
    const hexInput = document.getElementById('input').value;
    let textOutput = '';
    try {
        for (let i = 0; i < hexInput.length; i += 2) {
            textOutput += String.fromCharCode(parseInt(hexInput.substr(i, 2), 16));
        }
        document.getElementById('output').value = textOutput;
    } catch (e) {
        document.getElementById('output').value = 'Invalid hex input.';
    }
}

function textToHex() {
    const textInput = document.getElementById('input').value;
    let hexOutput = '';
    for (let i = 0; i < textInput.length; i++) {
        hexOutput += textInput.charCodeAt(i).toString(16).padStart(2, '0');
    }
    document.getElementById('output').value = hexOutput;
}

function base64ToText() {
    const base64Input = document.getElementById('input').value;
    try {
        const textOutput = atob(base64Input);
        document.getElementById('output').value = textOutput;
    } catch (e) {
        document.getElementById('output').value = 'Invalid Base64 input.';
    }
}

function textToBase64() {
    const textInput = document.getElementById('input').value;
    const base64Output = btoa(textInput);
    document.getElementById('output').value = base64Output;
}

function urlEncode() {
    const textInput = document.getElementById('input').value;
    const encodedOutput = encodeURIComponent(textInput);
    document.getElementById('output').value = encodedOutput;
}

function urlDecode() {
    const urlInput = document.getElementById('input').value;
    try {
        const decodedOutput = decodeURIComponent(urlInput);
        document.getElementById('output').value = decodedOutput;
    } catch (e) {
        document.getElementById('output').value = 'Invalid URL input.';
    }
}

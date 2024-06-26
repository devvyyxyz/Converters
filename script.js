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

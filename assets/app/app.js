const input = document.querySelector('textarea#text-input-field');
const output = document.querySelector('div.text-output-field');
const btnEncrypt = document.querySelector('button.btn-encrypt');
const btnDecrypt = document.querySelector('button.btn-decrypt');
let removeBoxAlertIn10Seconds = undefined;
const btnCopy =  document.createElement('button');
const invalidTextAlertBox = document.createElement('div');

btnCopy.innerText = 'Copiar';
btnCopy.classList.add('btn');

invalidTextAlertBox.innerHTML = '<p>Texto inválido! Por favor, insira um texto com letras minúsculas e sem acentos.</p><button onclick="removeBoxAlert()">X</button>';
invalidTextAlertBox.classList.add('box-alert');

const encrypt = (text) => {
  return text
        .replaceAll('e', 'enter')
        .replaceAll('o', 'ober')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat');
};

const decrypt = (text) => {
  return text
        .replaceAll('enter', 'e')
        .replaceAll('ober', 'o')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ufat', 'u');
};


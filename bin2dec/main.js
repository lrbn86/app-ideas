const form = document.querySelector('form');

const convertBinaryToDecimal = (input) => {
  let result = 0;
  let i = input.length - 1;
  for (const digit of input) {
    const num = Number(digit);
    result += num * (2 ** i);
    i--;
  }
  return result;
}

const validateInput = (input) => {
  const n = input.length;
  if (n !== 8) return false;
  for (const digit of input) {
    if (!(digit === '0' || digit === '1')) return false;
  }
  return true;
}

const formSubmit = (event) => {
  event.preventDefault();
  const binaryInput = document.querySelector('#binary-input').value;
  if (validateInput(binaryInput)) {
    const decimal = convertBinaryToDecimal(binaryInput);
    const output = document.querySelector('#result');
    output.textContent = `The binary string ${binaryInput} converted to decimal form is ${decimal}.`;
  } else {
    alert('Invalid input. The input should be a binary string (only 0s and 1s).');
  }
  form.reset();
}

form.addEventListener('submit', formSubmit);
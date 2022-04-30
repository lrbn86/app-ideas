const cssResult = document.querySelector('.css-result');
const box = document.querySelector('.box');

let topLeftRadius = 0;
let topRightRadius = 0;
let bottomLeftRadius = 0;
let bottomRightRadius = 0;

const updateTopLeftRadius = (event) => {
  const radius = event.target.value
  box.style.borderTopLeftRadius = (radius === '') ? 0 : `${radius}px`;
  topLeftRadius = (radius === '') ? 0 : radius;
  cssResult.textContent = `border-radius: ${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px;`;
}

const updateTopRightRadius = (event) => {
  const radius = event.target.value
  box.style.borderTopRightRadius = (radius === '') ? 0 : `${radius}px`;
  topRightRadius = (radius === '') ? 0 : radius;
  cssResult.textContent = `border-radius: ${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px;`;
}

const updateBottomLeftRadius = (event) => {
  const radius = event.target.value
  box.style.borderBottomLeftRadius = (radius === '') ? 0 : `${radius}px`;
  bottomLeftRadius = (radius === '') ? 0 : radius;
  cssResult.textContent = `border-radius: ${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px;`;
}

const updateBottomRightRadius = (event) => {
  const radius = event.target.value
  box.style.borderBottomRightRadius = (radius === '') ? 0 : `${radius}px`;
  bottomRightRadius = (radius === '') ? 0 : radius;
  cssResult.textContent = `border-radius: ${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px;`;
}

const cssResultClick = (event) => {
  const text = event.target.textContent;
  navigator.clipboard.writeText(text);
  alert(`Copied to clipboard: ${text}`);
}

document.querySelector('#top-left-radius-input').addEventListener('input', updateTopLeftRadius);
document.querySelector('#top-right-radius-input').addEventListener('input', updateTopRightRadius);
document.querySelector('#bottom-left-radius-input').addEventListener('input', updateBottomLeftRadius);
document.querySelector('#bottom-right-radius-input').addEventListener('input', updateBottomRightRadius);

cssResult.addEventListener('click', cssResultClick);
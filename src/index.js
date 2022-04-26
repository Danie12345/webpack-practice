import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['I', 'am', 'Daniel'], ' ');
  element.innerHTML += 'added this at the end lol';
  element.classList.add('nohay');

  return element;
}

document.body.appendChild(component());
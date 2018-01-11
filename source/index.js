import UserController from './userController';
import Context from './context';
import State from './state';
import './main.css';


let cnt = new Context('canvas');
let usr = new UserController('canvas');
let st = new State('canvas');

export function getElem(id) {
    return document.getElementById(id);
}

export  function relativePos(event, element) {
  let rect = element.getBoundingClientRect();
  return {x: Math.floor(event.clientX - rect.left),
          y: Math.floor(event.clientY - rect.top)};
}


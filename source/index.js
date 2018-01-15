import UserController from './userController';
import Context from './context';
import State from './state';
import './main.css';


const cnt = new Context('canvas');
const usr = new UserController('canvas');
const st = new State('canvas');

export function getElem(id) {
    return document.getElementById(id);
}

export function relativePos(event, element) {
    const rect = element.getBoundingClientRect();
    return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top)
    };
}

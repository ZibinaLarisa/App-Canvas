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

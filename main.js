import {
    cube,
    surface,
    diagonal
} from './figureFoo.js';



const btnCube = document.querySelector('#cube');
const btnSurface = document.querySelector('#surface');
const btnDiagonal = document.querySelector('#diagonal');
let cubeResult = document.getElementById("cube-result");
let surfaceResult = document.getElementById("surface-result");
let diagonalResult = document.getElementById("diagonal-result");

const calc = {
    "cube": cube,
    "surface": surface,
    "diagonal": diagonal
}

let element = {
    "cube": cubeResult,
    "surface": surfaceResult,
    "diagonal": diagonalResult
}

function getData(e) {

    e.preventDefault();

    let selection = e.target.id;

    let x = Number(document.querySelector("#height").value);
    let y = Number(document.querySelector("#length").value);
    let z = Number(document.querySelector("#width").value);

    element[selection].innerText = Math.round(Number(calc[selection](x, y, z)) * 100) / 100;

    document.querySelector("#height").value = 0;
    document.querySelector("#length").value = 0;
    document.querySelector("#width").value = 0;
}

btnCube.addEventListener('click', getData);
btnSurface.addEventListener('click', getData);
btnDiagonal.addEventListener('click', getData);
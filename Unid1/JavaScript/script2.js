// Modules

// import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
import quadrado from './quadrado.js';
import numeroAleatorio from './numeroAleatorio.js';

const randomN = numeroAleatorio();
console.log(quadrado.areaQuadrado(randomN));

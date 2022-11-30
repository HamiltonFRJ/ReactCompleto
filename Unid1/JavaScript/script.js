// const menu = {
//   seletor: '.principal',
// };
// console.log(menu.seletor.toUpperCase());
// function upperName(name) {
//   return name.toUpperCase();
// }

// Arrow function
const lowerName = (name) => name.toLowerCase();

console.log(lowerName('Hamilton'));

// Destructuring
function handleMouse({ clientX, clientY }) {
  // const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

const frutas = ['banana', 'maça'];
const [, fruta2] = frutas;
console.log(fruta2);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(perimetro(10));

// Rest e Spread
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Google', 'Hamilton', 'Francisco');
const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);
const numeros2 = [13, ...numeros, 24, 32, 32];

const carro = {
  cor: 'azul',
  portas: 4,
  modelo: 'sedan',
};
carroAno = { ...carro, ano: 2020 };
console.log(carro);

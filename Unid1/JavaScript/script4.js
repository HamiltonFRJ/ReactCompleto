const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((p) => p.includes('R$'));
const precosNumeros = precosFiltro.map((p) => Number(p.replace('R$ ', '')));
// Isso não alterou as outras Arrays de precos, apenas a nova array PrecosNumeros

console.log(precosNumeros);

// Diferenca de Filter e Map
// O Filter cria um novo array assim como o map, porem, o filter trabalha apenas nos elementos retornados como true
// O map, seleciona todos os elementos

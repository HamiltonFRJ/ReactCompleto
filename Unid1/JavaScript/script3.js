// Fetch
// fetch('https://ranekapi.origamid.dev/json/api/produto')
//   .then((r) => r.json()) // r = response
//   .then((json) => console.log(json));

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos(
  'https://ranekapi.origamid.dev/json/api/produto',
);

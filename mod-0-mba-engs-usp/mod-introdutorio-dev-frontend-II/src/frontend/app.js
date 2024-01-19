const endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json';

getProducts()

const listProductsElement = window.document.getElementById('produtos__lista');

async function getProducts() {
  const res = await fetch(endpoint);
  const products = await res.json();

  showProductsInScreen(products);
}

function showProductsInScreen(products) {
  products.forEach((product) => {
    listProductsElement.innerHTML += `
    <li class="produtos__item">
      <div class="produtos__content">
        <img src="${product.img}" alt="Imagem de celular">
        <div class="produtos__informacoes">
          <h3>${product.nome}</h3>
          <p>${product.descricao}</p>
          <h4>R$ ${product.valorComDesconto}<del>R$ ${product.valorSemDesconto}</del></h4>
          <p>${product.tipoEntrega}</p>
        </div>
      </div>
    </li>`;
  });
}

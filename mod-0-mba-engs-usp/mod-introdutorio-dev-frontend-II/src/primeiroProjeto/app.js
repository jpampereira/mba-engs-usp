// alert('Hello, World!')
// console.log('Hello, World!')

// let nome = prompt('Digite seu nome')
// alert('Oi ' + nome)
// console.log('Oi ' + nome)

// Recuperando informação dentro do HTML
// let elemento = window.document.querySelector('h1');
// console.log(elemento.textContent);

// Inserindo informação dentro do HTML
// let elemento = document.createElement('h1')
// elemento.textContent = 'Hello, World!'
// console.log(elemento.textContent)
// window.document.body.appendChild(elemento)

// Alterando informação dentro do HTML
// let elemento = window.document.querySelector('h1')
// elemento.textContent = 'Hello, World!'

const elementoTitulo = window.document.querySelector('h1');
elementoTitulo.textContent = 'Clicker';

const botao = window.document.querySelector('button');
botao.addEventListener('click', somarUm)

function somarUm() {
  const elementoH3 = window.document.querySelector('h3');
  const valorAtual = elementoH3.textContent;
  const novoValor = parseInt(valorAtual) + 1;
  elementoH3.textContent = novoValor;

  const [r, g, b] = getRandomColorRGB();

  elementoH3.style.color = `rgb(${r}, ${g}, ${b})`;
}

function getRandomColorRGB() {
  return [
    getRandomInteger(255),
    getRandomInteger(255),
    getRandomInteger(255)
  ];
}

function getRandomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}
const colorPalet = document.getElementById('color-palette'); //chamei a ja existente div principal la do html com a CLASS REFERENTE para o JS aqui
console.log(colorPalet.id); //so para mostrar no console log, lembrar do ponto e do ID

for (let index = 0; index < 4; index++) { //percorre 4 indices
  const cores = document.createElement('div'); //CRIEI a div que não existia
  cores.setAttribute('class', 'color'); // addicionei ATRIBUTOS a div que acabei de criar a class com nome color
  if (index === 0) {     // como o projeto quer que pegue o primeiro atributo
    cores.classList.add('selected'); //Adicionei o comando SELECTED a div ZERO definida pelo IF
    cores.style.backgroundColor = 'black'; //Adicionei a COR PRETA a DIV ZERO
  } else if (index === 1) {
    cores.style.backgroundColor = 'red'; //Addicionei a COR VERMELHA A DIV UM
  } else if (index === 2) {
    cores.style.backgroundColor = 'green'; //Addicionei a COR VERDE A DIVI DOIS
  } else {
    cores.style.backgroundColor = 'blue'; // Addicionei a COR VERDE A DIVI RESTANTE, no caso a utima
  }
  colorPalet.appendChild(cores); //Chamei a Const colorPalet, a dei todos esses filho a ela usando o appendChild
}

const pixelBoard = document.getElementById('pixel-board');

for (let index = 0; index < 25; index++) {
  const pixel = document.createElement('div');
  pixel.setAttribute('class', 'pixel');
  pixel.style.background = 'white';

  pixelBoard.appendChild(pixel);  
}

const colorPalet = document.getElementById('color-palette'); //chamei a ja existente div principal la do html com a CLASS REFERENTE para o JS aqui
console.log(colorPalet.id); //so para mostrar no console log, lembrar do ponto e do ID

localStorage.setItem('saveColor', 'black');// setei o iten no local storage com a key savecolor e a valor cor preta

function selectColor(event) { 
  let saveColors = document.getElementsByClassName('color'); //chamei a class color com todas as cores e salva elas em uma variavel
  for (let index = 0; index < saveColors.length; index++) { //percorre todas as cores
    saveColors[index].classList.remove('selected'); // ao passar por todas as cores remove o atributo SELECT
  }
  event.target.classList.add('selected'); // Ao clicar add o atributo SELECT
  console.log(event.target.style.backgroundColor);  //mostra no console se a atributo esta realmente sendo Addicionado 
  localStorage.setItem('saveColor', event.target.style.backgroundColor);
}

for (let index = 0; index < 4; index++) {
  //percorre 4 indices
  const cores = document.createElement('div'); //CRIEI a div que não existia
  cores.setAttribute('class', 'color'); // addicionei ATRIBUTOS a div que acabei de criar a class com nome color
  cores.addEventListener('click', selectColor);
  if (index === 0) { // como o projeto quer que pegue o primeiro atributo    
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

function selectClick(event) {
  let saveColor = localStorage.getItem('saveColor');
  let color = event.target.style.backgroundColor;
  if (color === saveColor) {
    event.target.style.backgroundColor = 'white';
  } else {
    event.target.style.backgroundColor = saveColor;
  }
}

for (let index = 0; index < 25; index++) {
  const pixel = document.createElement('div');
  pixel.setAttribute('class', 'pixel');
  pixel.style.background = 'white';
  pixel.addEventListener('click', selectClick);

  pixelBoard.appendChild(pixel);
}

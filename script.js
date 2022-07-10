const colorPalet = document.getElementById('color-palette'); //chamei a ja existente div principal com a CLASS REFERENTE que esta no html
console.log(colorPalet.id); //so para mostrar no console log, lembrar do ponto e do ID

for (let index = 0; index < 4; index++) {
  //percorre 4 indices
  const div = document.createElement('div'); //CRIEI a div que não existia
  div.setAttribute('class', 'color'); // addicionei ATRIBUTOS a div que acabei de criar a class nome color
  if (index === 0) {     // como o projeto quer que pegue o primeiro atributo
    div.classList.add('selected'); //Adicionei o comando SELECTED a div ZERO definida pelo IF
    div.style.backgroundColor = 'black'; //Adicionei a COR PRETA a DIV ZERO
  } else if (index === 1) {
    div.style.backgroundColor = 'red'; //Addicionei a COR VERMELHA A DIV UM
  } else if (index === 2) {
    div.style.backgroundColor = 'green'; //Addicionei a COR VERDE A DIVI DOIS
  } else {
    div.style.backgroundColor = 'blue'; // Addicionei a COR VERDE A DIVI RESTANTE, no caso a utima
  }
  colorPalet.appendChild(div); //Chamei a Const colorPalet, a dei todos esses filho a ela usando o appendChild
}

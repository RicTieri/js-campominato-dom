// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const gameBox = document.getElementById('game_box');
const playButton = document.querySelector('button');

console.log(randomUniqueNumber(2, 100, 20))

playButton.addEventListener('click', function () {
  // cleaning the game box
  gameBox.innerHTML = ''
  // setting the grid based on level
  let gameLevel = document.querySelector('select').value;
  let totalCard;
  if (gameLevel == 1) {
    totalCard = 100
  } else if (gameLevel == 2) {
    totalCard = 81
  } else {
    totalCard = 49
  }
  // Ogni cella ha un numero progressivo, da 1 a 100.
  for (let i = 1; i <= totalCard; i++) {
    const divSquare = getDivWithClassAndText('game_card', i);
    gameBox.appendChild(divSquare);
    
    let squareSize = `calc(100% / ${Math.sqrt(totalCard)})`;
    divSquare.style.width = squareSize;
    divSquare.style.height = squareSize;
    
    // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    divSquare.addEventListener('click', function () {
      divSquare.classList.add('clicked');
      console.log(i)
    })
  }
})



// =============================================================== functoin ===============================================================

/**
 * function to create a new div with designed class and text inside, doesn't append element
 * @param {*} className 
 * @param {*} text 
 * @returns new div element
 */
function getDivWithClassAndText(className, text) {
  const divElement = document.createElement('div');
  divElement.classList.add(className);
  divElement.append(text);
  return divElement
}


function randomUniqueNumber(min, max, total){
  const genNum = [];
  while (genNum.length < total){
    let num = Math.floor(Math.random()*(max - min + 1) + min);
    while (genNum.includes(num)){
      num = Math.floor(Math.random()*(max - min + 1) + min);
    }
    genNum.push(num);
  }
  return genNum
}
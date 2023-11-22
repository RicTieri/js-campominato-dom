// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const gameBox = document.getElementById('game_box');
const playButton = document.querySelector('button');

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
    
    divSquare.style.width = `calc(100% / ${Math.sqrt(totalCard)})`
    divSquare.style.height = `calc(100% / ${Math.sqrt(totalCard)})`
    
    divSquare.addEventListener('click', function () {
      divSquare.classList.add('clicked');
      console.log(i)
    })
  }
})
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



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
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const gameBox = document.getElementById('game_box');
const playButton = document.querySelector('button');
const scoreCount = document.getElementById('score');
const gameOver = document.getElementById('popup-over');
const gameWin = document.getElementById('popup-win');

playButton.addEventListener('click', function () {
  // cleaning the game box
  gameBox.innerHTML = '';
  gameBox.style.pointerEvents = 'auto';
  gameOver.style.display = "none"; 
  gameWin.style.display = "none"; 
  scoreCount.innerHTML = 0 ;
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

  const squareSize = `calc(100% / ${Math.sqrt(totalCard)})`;
  const gameBomb = randomUniqueNumber(1, totalCard, 16);
  const maxScore = totalCard - 16;
  let score = 0;

  console.log(gameBomb)

  for (let i = 1; i <= totalCard; i++) {
    const divSquare = getDivWithClassAndText('game_card', i);
    gameBox.appendChild(divSquare);
    divSquare.style.width = squareSize;
    divSquare.style.height = squareSize;

    if (gameBomb.includes(i)) {
      divSquare.classList.add('red')
    }

    // active grid function
    divSquare.addEventListener('click', function () {
      divSquare.classList.add('clicked');
      if (gameBomb.includes(i)) {
        itemBomb.forEach(element => {
          element.classList.add('clicked')
        });
        gameOver.style.display = "flex" 
      } else if (score == maxScore) {
        gameWin.style.display = "flex" 
      } else {
        divSquare.style.pointerEvents = 'none';
        score += 1;
      }
      scoreCount.innerHTML = score
    })
  }
  let itemBomb = document.querySelectorAll('.red');
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

/**
 * Function to generate a precise amount of random number between an interval including min and max
 * @param {*} min 
 * @param {*} max 
 * @param {*} total 
 * @returns array of unique number
 */
function randomUniqueNumber(min, max, total) {
  const genNum = [];
  while (genNum.length < total) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    if (!genNum.includes(num)) {
      genNum.push(num)
    }
  }
  return genNum
}

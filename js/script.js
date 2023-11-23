const gameBox = document.getElementById('game_box');
const playButton = document.getElementById('play_btn');
const scoreCount = document.getElementById('score');
const gameOver = document.getElementById('popup-over');
const gameWin = document.getElementById('popup-win');

// starting game function
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
  
  // generating grid's element
  for (let i = 1; i <= totalCard; i++) {
    let divSquare = getDivWithClassAndText('game_card', i);
    divSquare.classList.add('flex');
    divSquare.style.width = squareSize;
    divSquare.style.height = squareSize;
    gameBox.appendChild(divSquare);
    
    if (gameBomb.includes(i)) {
      divSquare.classList.add('red')
    }
    
    // active grid function
    divSquare.addEventListener('click', function () {
      divSquare.classList.add('clicked');
      if (gameBomb.includes(i)) {
        for (let index = 0; index < itemBomb.length; index++) {
          itemBomb[index].classList.add('clicked');
          itemBomb[index].innerHTML = '<i class="fa-solid fa-bomb"></i>';
        }
        gameOver.style.display = "flex" 
      } else if (score == maxScore) {
        gameWin.style.display = "flex";
      } else {
        divSquare.style.pointerEvents = 'none';
        divSquare.innerHTML = '<i class="fa-solid fa-lemon"></i>';
        score += 1;
      }
      scoreCount.innerHTML = score;
    })
  }
  let itemBomb = document.querySelectorAll('.red');
})



// =============================================================== function ===============================================================

/**
 * function to create a new div with one class and possible string inside; it doesn't append element directly and it doesn't add multiple class
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

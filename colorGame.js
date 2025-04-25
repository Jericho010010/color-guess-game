
let score = JSON.parse(localStorage.getItem('score')) || {win: 0, losses: 0} /* <= Hold the result of the game even you reload the page*/

window.onload = () => {                         /* <= will load the recent result when page is reloaded*/ 
  updateScoreBoard("Let's play!", "white");
};

function randColorGame(color) {             /* <= First Function => DECLARES the following - Colors, Conditional Statements, Local storage of the result */

  let result = ''
  let colorsArr = ["Red", "Blue", "Yellow"]
  const randColors = colorsArr[Math.floor(Math.random() * colorsArr.length)]

  if (color === randColors){
     result = 'You win!'
     score.win += 1
  }
  else {
    result = 'You lose!'
    score.losses += 1
  }

  localStorage.setItem('score',JSON.stringify(score))
  updateScoreBoard(result, randColors);
} 

function updateScoreBoard(result, randColors){      /* <= Second Function => HOLDS - result and color generator - PURPOSE - reusability / readability */
  document.querySelector('.result-output').innerText
    =`${result} | Wins: ${score.win} | Losses: ${score.losses}`
  document.querySelector('.main-container').style.backgroundColor = randColors
}

function resetScoreBoard() {        /* <= Third Function => HOLDS - resetting the score - PURPOSE - reusability / readability */
  score.win = 0
  score.losses = 0
  localStorage.removeItem('score')
  document.querySelector('.result-output').innerText = `Wins: ${score.win} | Losses: ${score.losses} `
  document.querySelector('.main-container').style.backgroundColor = 'white'
}


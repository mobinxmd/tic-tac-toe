const divBox = Array.from(document.querySelectorAll(".box"));
const playerOne = document.getElementById('player1');
const playerTwo = document.getElementById('player2');
const divPlayer = document.getElementById('divPlayer');
const X = document.querySelectorAll(".x");
const resultLog = document.getElementById('resultLog');
const textLog = document.getElementById('textLog');
const playAgainBtn = document.getElementById('restart');

playerOne.classList.add('active');



divBox.forEach(function (box, index) {
  box.addEventListener('click', function (event) {
    handleClick(event, index);
  });
});
let X_text = 'x';
let O_text = 'o';
let space = Array(9).fill(null);

function handleClick(event, index) {
  const box = event.currentTarget;
  const X = box.querySelector(".x");
  const O = box.querySelector('.o');
  const activeOne = playerOne.classList.contains('active');
  const activeTwo = playerTwo.classList.contains('active');
  const hiddenX = X.classList.contains('hidden');
  const hiddenO = O.classList.contains('hidden');
 
  if (activeOne) {
    if (hiddenX & hiddenO && space[box.id]== null) {
      X.classList.remove('hidden');
      space[box.id]= X_text;
      playerOne.classList.remove('active');
      playerTwo.classList.add('active');
    }
  } else if (activeTwo) {
    if (hiddenX & hiddenO && space[box.id]== null) {
      space[box.id] =O_text;
      O.classList.remove('hidden');
      playerTwo.classList.remove('active');
      playerOne.classList.add('active');
    }
  }
  result();

  const playAgain =()=>{
    space.fill(null);
    console.log(space)
    resultLog.classList.add('hidden');
    X.classList.add('hidden');
    O.classList.add('hidden');
    playerTwo.classList.remove('active');
    playerOne.classList.add('active');

  };
  playAgainBtn.addEventListener('click', playAgain);
}


const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function result(){
  for(const combo of winCombo){
    let [a, b, c] = combo
  
    if(space[a] == X_text & space[b]== X_text & space[c]== X_text){
      console.log(`Player ${space[a]} is the winner!` );
      textLog.innerText=`Player 1 is the winner!`;
      resultLog.classList.remove('hidden');
    } else if(space[a] == O_text & space[b]== O_text & space[c]== O_text){
      console.log(`Player ${space[a]} is the winner!` )
      textLog.innerText=`Player 2 is the winner!`;
      resultLog.classList.remove('hidden');

    }
  };
};



// playerOne.addEventListener('click', activeClick);
// playerTwo.addEventListener('click', activeClick);

// function activeClick(event) {
//   const clickedElement = event.target;

//   if (clickedElement === playerOne) {
//     playerTwo.classList.remove('active');
//     playerOne.classList.add('active');
//   } else if (clickedElement === playerTwo) {
//     playerOne.classList.remove('active');
//     playerTwo.classList.add('active');
//   }
// }

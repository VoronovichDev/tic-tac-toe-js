const playerFactory = (mark) => {
   return { mark }
}

const player1 = playerFactory('X')
const player2 = playerFactory('O')

const Gameboard = (() => {

   const gameField = document.querySelector('#game')

   let fieldContent = ['X1', 'O2', 'X3', 'O4', 'X5', 'O6', 'X7', 'O8', 'X9']

   const renderGameboard = () => {
      fieldContent.forEach((el) => {
         const cell = document.createElement('div')
         cell.innerText = el;
         gameField.append(cell)
      })
   }
   renderGameboard()
})()


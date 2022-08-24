const playerFactory = (mark) => {
   return { mark }
}

const player1 = playerFactory('X')
const player2 = playerFactory('O')

const Gameboard = (() => {

   const gameField = document.querySelector('#game')

   let fieldContent = ['', '', '', '', '', '', '', '', '']

   const renderGameboard = () => {
      // addin ID for each cell
      let cellId = 0;

      // fill our field with empty cells
      fieldContent.forEach((el) => {
         const cell = document.createElement('div')
         //give id for each cell
         cell.setAttribute("cellid", cellId)
         cell.innerText = el;
         gameField.append(cell)
         cellId++
      })

      gameField.addEventListener('click', (e) => {

         if (!e.target.getAttribute('cellid')) return

         let xLength = fieldContent.filter(elem => elem == "X").length
         let oLength = fieldContent.filter(elem => elem == "O").length

         // checks the content and inserts "X" or "O"
         if (xLength === 0 || xLength !== 0 && xLength === oLength) {
            if (e.target.innerText != '') return
            e.target.innerText = player1.mark
         } else if (xLength > oLength) {
            if (e.target.innerText != '') return
            e.target.innerText = player2.mark
         }

         console.log(e.target.getAttribute('cellid'))

         // fill our array (fieldContent) with marks
         fieldContent[e.target.getAttribute('cellid')] = e.target.innerText
         console.log(fieldContent)


         if (fieldContent[0] == fieldContent[1] && fieldContent[1] == fieldContent[2] && fieldContent[2] == 'X') {
            document.body.append(winX)
            document.body.append(resetBtn)
            return
         } else if (fieldContent[0] == fieldContent[1] && fieldContent[1] == fieldContent[2] && fieldContent[2] == 'O') {
            document.body.append(winO)
            document.body.append(resetBtn)
            return
         }

         if (fieldContent[3] == fieldContent[4] && fieldContent[4] == fieldContent[5] && fieldContent[5] == 'X') {
            document.body.append(winX)
            document.body.append(resetBtn)
            return
         } else if (fieldContent[3] == fieldContent[4] && fieldContent[4] == fieldContent[5] && fieldContent[5] == 'O') {
            document.body.append(winO)
            document.body.append(resetBtn)
            return
         }

         if (fieldContent[6] == fieldContent[7] && fieldContent[7] == fieldContent[8] && fieldContent[8] == 'X') {
            document.body.append(winX)
            document.body.append(resetBtn)
            return
         } else if (fieldContent[6] == fieldContent[7] && fieldContent[7] == fieldContent[8] && fieldContent[8] == 'O') {
            document.body.append(winO)
            document.body.append(resetBtn)
            return
         }

         if (fieldContent[0] == fieldContent[4] && fieldContent[4] == fieldContent[8] && fieldContent[8] == 'X') {
            document.body.append(winX)
            document.body.append(resetBtn)
            return
         } else if (fieldContent[0] == fieldContent[4] && fieldContent[4] == fieldContent[8] && fieldContent[8] == 'O') {
            document.body.append(winO)
            document.body.append(resetBtn)
            return
         }

         if (fieldContent[2] == fieldContent[4] && fieldContent[4] == fieldContent[6] && fieldContent[6] == 'X') {
            document.body.append(winX)
            document.body.append(resetBtn)
            return
         } else if (fieldContent[2] == fieldContent[4] && fieldContent[4] == fieldContent[6] && fieldContent[6] == 'O') {
            document.body.append(winO)
            document.body.append(resetBtn)
            return
         }

      })
   }

   let winX = document.createElement('h2')
   winX.classList.add('result')
   winX.innerText = 'Player 1 wins'

   let winO = document.createElement('h2')
   winO.classList.add('result')
   winO.innerText = 'Player 2 wins'

   let resetBtn = document.createElement('button')
   resetBtn.innerText = 'Start new game'


   renderGameboard()

})()


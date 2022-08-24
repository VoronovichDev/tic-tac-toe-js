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

      })
   }

   renderGameboard()
})()


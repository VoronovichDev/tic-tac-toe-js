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


      gameField.addEventListener('click', cellClicked = (e) => {
         if (!e.target.getAttribute('cellid')) return

         let xLength = fieldContent.filter(elem => elem === "X").length
         let oLength = fieldContent.filter(elem => elem === "O").length

         // checks the content and inserts "X" or "O"
         if (xLength === 0 || xLength !== 0 && xLength === oLength) {
            if (e.target.innerText != '') return
            e.target.innerText = player1.mark
         } else if (xLength > oLength) {
            if (e.target.innerText != '') return
            e.target.innerText = player2.mark
         }

         // layout for "X" wins
         let winX = document.createElement('h2')
         winX.classList.add('result')
         winX.innerText = 'Player 1 wins'

         // layout for "O" wins
         let winO = document.createElement('h2')
         winO.classList.add('result')
         winO.innerText = 'Player 2 wins'

         // layout for draw
         let draw = document.createElement('h2')
         draw.classList.add('result')
         draw.innerText = 'Draw'

         // array from each cell of gameboard. Used for decoration in win cases
         let cellArray = Array.from(gameField.children)

         //logic of filling out the document, in case of victory X
         let winXContent = () => {
            document.body.append(winX)
            document.body.append(resetBtn)
            gameField.removeEventListener('click', cellClicked)
         }

         //logic of filling out the document, in case of victory O
         let winOContent = () => {
            document.body.append(winO)
            document.body.append(resetBtn)
            gameField.removeEventListener('click', cellClicked)
         }

         // fill our array (fieldContent) with marks
         fieldContent[e.target.getAttribute('cellid')] = e.target.innerText

         //victory conditions
         if (fieldContent[0] === fieldContent[1] && fieldContent[1] === fieldContent[2] && fieldContent[2] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 0 || +e.getAttribute('cellid') === 1 || +e.getAttribute('cellid') === 2).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[0] === fieldContent[1] && fieldContent[1] === fieldContent[2] && fieldContent[2] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 0 || +e.getAttribute('cellid') === 1 || +e.getAttribute('cellid') === 2).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[3] === fieldContent[4] && fieldContent[4] === fieldContent[5] && fieldContent[5] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 3 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 5).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[3] === fieldContent[4] && fieldContent[4] === fieldContent[5] && fieldContent[5] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 3 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 5).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[6] === fieldContent[7] && fieldContent[7] === fieldContent[8] && fieldContent[8] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 6 || +e.getAttribute('cellid') === 7 || +e.getAttribute('cellid') === 8).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[6] === fieldContent[7] && fieldContent[7] === fieldContent[8] && fieldContent[8] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 6 || +e.getAttribute('cellid') === 7 || +e.getAttribute('cellid') === 8).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[0] === fieldContent[4] && fieldContent[4] === fieldContent[8] && fieldContent[8] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 0 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 8).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[0] === fieldContent[4] && fieldContent[4] === fieldContent[8] && fieldContent[8] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 0 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 8).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[2] === fieldContent[4] && fieldContent[4] === fieldContent[6] && fieldContent[6] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 2 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 6).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[2] === fieldContent[4] && fieldContent[4] === fieldContent[6] && fieldContent[6] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 2 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 6).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[0] === fieldContent[3] && fieldContent[3] === fieldContent[6] && fieldContent[6] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 0 || +e.getAttribute('cellid') === 3 || +e.getAttribute('cellid') === 6).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[0] === fieldContent[3] && fieldContent[3] === fieldContent[6] && fieldContent[6] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 0 || +e.getAttribute('cellid') === 3 || +e.getAttribute('cellid') === 6).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[1] === fieldContent[4] && fieldContent[4] === fieldContent[7] && fieldContent[7] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 1 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 7).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[1] === fieldContent[4] && fieldContent[4] === fieldContent[7] && fieldContent[7] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 1 || +e.getAttribute('cellid') === 4 || +e.getAttribute('cellid') === 7).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[2] === fieldContent[5] && fieldContent[5] === fieldContent[8] && fieldContent[8] === 'X') {
            winXContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 2 || +e.getAttribute('cellid') === 5 || +e.getAttribute('cellid') === 8).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } else if (fieldContent[2] === fieldContent[5] && fieldContent[5] === fieldContent[8] && fieldContent[8] === 'O') {
            winOContent()
            cellArray.filter(e => +e.getAttribute('cellid') === 2 || +e.getAttribute('cellid') === 5 || +e.getAttribute('cellid') === 8).forEach(e => e.style.backgroundColor = '#34eb67')
            return
         } //draw conditions 
         else if (xLength === oLength && oLength === 4) {
            document.body.append(draw)
            document.body.append(resetBtn)
            gameField.removeEventListener('click', cellClicked)
            cellArray.forEach(e => e.style.backgroundColor = 'rgb(254, 238, 91)')
         }
      })

      //restart game
      resetBtn.onclick = () => {
         fieldContent = ['', '', '', '', '', '', '', '', ''];
         gameField.innerHTML = ''
         renderGameboard()
         document.body.querySelector('.result').remove()
         resetBtn.remove()
      }
   }

   // button for restart
   let resetBtn = document.createElement('button')
   resetBtn.classList.add('reset__btn')
   resetBtn.innerText = 'Start new game'

   renderGameboard()

})()


let container = document.querySelector('.container')
let boxes = document.querySelector('.boxes')
const reset = document.getElementById('reset')

let choosenColourHolder = document.querySelector('.colour')
let choosenColour = document.querySelector('.chosen-colour')
let colourChooser = document.querySelector('.colour-chooser')
let colours = document.querySelectorAll('.colours')

let gridSize = 10
let colour = "black"

function createGrid(x) {
    for(let i = 0; i < x; i++) {
        for(let j = 0; j < x; j++) {
            let grid = document.createElement('div')
            boxes.appendChild(grid)
            grid.setAttribute('class', 'grid-box')
            grid.style.width = container.offsetWidth / x + "px"
            grid.style.height = container.offsetHeight / x + "px"
        }
    }
}

colours.forEach(col => {
    col.addEventListener('click', () => {
        colour = col.classList[1]
        choosenColour.style.backgroundColor = colour
    })
})

createGrid(gridSize)

let gridBoxes = document.querySelectorAll('.grid-box')
boxes.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = colour
})

reset.addEventListener('click', () => {
    let gridSizePrompt = prompt("Choose your grid size (numeric input only)")
    if(!isNaN(gridSizePrompt)) {
        removeGrid()
        createGrid(gridSizePrompt)
    }
})

function removeGrid() {
    boxes.innerHTML = ''
}

choosenColourHolder.addEventListener('click', () => {
    let colourDisplay = colourChooser.style.display
    if(colourDisplay == 'none') {
        colourChooser.style.display = 'flex'
    } else {
        colourChooser.style.display = 'none'
    }
})
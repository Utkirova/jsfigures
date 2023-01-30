let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__block'),
    score = 0,
    time = 0,
    interval = 0;

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})
box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createFigures()
    }else if(event.target.classList.contains('triangle')){
        score++
        event.target.remove()
        createFigures()
    }else if(event.target.classList.contains('square')){
        score++
        event.target.remove()
        createFigures()
    }
    
})



function start() {
    interval =  setInterval(() => decrease(),1000)
    createFigures()
}

function decrease() {
   if(time == 0) {
        endGame()
   }else {
        let currentTime = --time
        if(currentTime < 10) {
            currentTime = '0' + currentTime
        }
        timeOut.innerHTML = '00:' + currentTime
   }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
}

function createFigures() {
    let figures = random(1,3)
     
    if(figures == 1){
    let ball = document.createElement('div')
    let size = random(20, 100)
    let coor = box.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    ball.classList.add('ball')
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    ball.style.background =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    
    box.append(ball)
    }else if(figures == 2){
    let triangle = document.createElement('div')
    let size = random(20, 100)
    let coor = box.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    triangle.classList.add('triangle')
    triangle.style.width = size + 'px'
    triangle.style.height = size + 'px'
    triangle.style.left = x + 'px'
    triangle.style.top = y + 'px'
    triangle.style.background = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    
    box.append(triangle)
    }else if(figures == 3){
        let square = document.createElement('div')
        let size = random(20, 100)
        let coor = box.getBoundingClientRect()
        let x = random(0, coor.width - size)
        let y = random(0, coor.height - size)
        
        square.classList.add('square')
        square.style.width = size + 'px'
        square.style.height = size + 'px'
        square.style.left = x + 'px'
        square.style.top = y + 'px'
        square.style.background =`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        
        box.append(square)
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}


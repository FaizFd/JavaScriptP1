let scoreEl = document.getElementById("score-el")
let scoregEl = document.getElementById("scoreg-el")

let score = 0
let scoreg = 0

function add1(){
    score += 1
    scoreEl.textContent = score
}

function add2(){
    score += 2
    scoreEl.textContent = score
}

function add3(){
    score += 3
    scoreEl.textContent = score
}


function addg1(){
    scoreg += 1
    scoregEl.textContent = scoreg
}

function addg2(){
    scoreg += 2
    scoregEl.textContent = scoreg
}

function addg3(){
    scoreg += 3
    scoregEl.textContent = scoreg
}

function reset(){
    score = 0
    scoreg = 0
    scoreEl.textContent = 0
    scoregEl.textContent = 0
}
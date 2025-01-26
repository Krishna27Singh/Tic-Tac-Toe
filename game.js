console.log('hello');

let turn = "X";
let gameover = false;

const changeTurn = () =>{
    return turn === "X" ? "0":"X";
}

const checkWin = () =>{
    let boxtext = document.getElementsByClassName("spanbox");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach((e) => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".result").innerHTML = boxtext[e[0]].innerText + " Won";
            gameover = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach( element =>{
    let boxtext = element.querySelector(".spanbox");
    element.addEventListener('click', () =>{
        if (boxtext.innerHTML === ""){
            boxtext.innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){

                document.getElementsByClassName("turn")[0].innerHTML = "Turn for " + turn;

            }
        }
    })
})

let reset = document.querySelector(".reset")
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".spanbox");
    Array.from(boxtexts).forEach(element =>{
        element.innerHTML = "";
    })
    document.querySelector(".result").innerHTML = "";
    turn = "X";
    gameover = false;
    document.getElementsByClassName("turn")[0].innerHTML = "Turn for" + turn;
})
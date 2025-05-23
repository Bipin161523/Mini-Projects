console.log("Welcome to tic Tac Toe ")
let musica = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let  isgameOver = false

/* function to change the turn */

const changeTurn = () =>{
    return turn==="X"?"0":"X"
}

//function to check for win

const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('Boxtext');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,5,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
            gameOver.play();
        }
    })
}

// game logic
//musica.play();
let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(elements =>{
    let boxtext = elements.querySelector('.Boxtext');
    elements.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText = "turn for "+ turn;
            }
        }
    })

})


// add on click to listner reset button

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.Boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameOver = false
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    

})
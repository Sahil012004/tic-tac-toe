let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#res");
let msgcontainer= document.querySelector(".msgcontainer");
let msg= document.querySelector("#msg");
let newgame= document.querySelector("#new")
let turnO=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turnO) {
            console.log("box was clicked");
            box.innerText="O";
            box.style.color="#151515"; 
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#A63D40"; 
            turnO=true;
        }
        box.disabled=true;
        count++;
        console.log(count);
        let WINNER = checkWinner();
        
        if(count === 9 && !WINNER){
            counting();
        }
    });
});
const counting = () => {
    msg.innerText=`The game was a DRAW :-(`;      
    msgcontainer.classList.remove("hide"); 
    disabledBoxes(); 
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
    let posVal1= boxes[pattern[0]].innerText;
    let posVal2= boxes[pattern[1]].innerText;
    let posVal3= boxes[pattern[2]].innerText;
        if(posVal1 !="" && posVal2 != "" && posVal3 !="") {
            if (posVal1===posVal2 && posVal2===posVal3) {
                console.log("Winner",posVal1);
                showWinner(posVal1)
            }
        }
}}

const showWinner = (winner) => {
    msg.innerText=`The winner of the game is ${winner}`;
    disabledBoxes();
    msgcontainer.classList.remove("hide");
}
const resetGame = () => {
    turnO= true;
    count = 0;
    msgcontainer.classList.add("hide");
    enabledBoxes();
}

const disabledBoxes = () => {
    for (box of boxes) {
        box.disabled=true;
    }
}
const enabledBoxes = () => {
    for (box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);



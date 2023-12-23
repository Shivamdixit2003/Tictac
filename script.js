console.log("welcome to tictactoe ");
let ans1 = confirm(
  "Do you Want to enter names of Player? \n Click OK for Yes and Cancle for NO"
);
let plr = ["X", "O"];

if (ans1) {
  let plr1 = prompt("Enter 1st Player Name");
  let plr2 = prompt("Enter 2nd Player Name");
  plr[0] = plr1;
  plr[1] = plr2;
}
let prevplr=[plr[0],plr[1]];
document.querySelector(".info").innerText ='Turn For '+ plr[0] ;
let music = new Audio("music.wav");
let turnm = new Audio("music.wav");
let continuem = new Audio("music.wav");
let gameover = new Audio("music.wav");
let turn = plr[0];
let isgameover = "false";

//Function to change turn

const chnageTurn = () => {
  return turn == plr[0] ? plr[1] : plr[0];
};

//function to check for the win
const checkWin = () => {
  // Three possibilities
  //1. Win 2. Loose 3. Draw
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [6, 7, 8],
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[1]].innerText !== ""
    ) {
      turn = chnageTurn();
      document.querySelector(".info").innerText = turn + " has been WON!!";
      //alert('The'+boxtext[e[0]].innerText + 'is WON');
      boxtext[e[0]].style.textDecoration = "line-through";
      isgameover = "true";
      boxtext[e[1]].style.textDecoration = "line-through";
      boxtext[e[2]].style.textDecoration = "line-through";
      document.querySelector(".imgbox").style =
        "display:flex;justify-content:center;align-item:center;";
    }
  });
};

// Game Logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && isgameover === "false") {
      boxtext.innerText = turn === plr[0] ? "X" : "O";
      turn = chnageTurn();
      turnm.play();
      checkWin();
      if (isgameover === "false") {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//Onclick on reset button
reset.addEventListener('click', ()=>{
  plr[0]=prevplr[0];
  plr[1]=prevplr[1];
let boxText = document.querySelectorAll(".boxtext");
    Array.from(boxText).forEach((e)=>{
     e.innerText='';
    })
    turn=plr[0];
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
          isgameover='false';
      document.querySelector(".imgbox").style = "display:none;";
}
)



let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGamebtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg= document.querySelector("#msg");



let turnO= true; //playerX, //playerO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return; // Not a draw if any box is empty
        }
    }
    // If we reach here, all boxes are filled
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const resetGame = () => {
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if (box.innerText === "") {
        if(turnO){
            box.innerText = "O";
            box.classList.add("O");
            turnO=false;
        } else{
            box.innerText="X";
            box.classList.add("X");
            turnO= true;
        }
        box.disabled= true;

        checkWinner();
    }
    })
})

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        box.classList.remove("X"); // Remove X class
        box.classList.remove("O"); // Remove O class
    }
}

const showWinner =(winner) => {
     msg.innerText =  `Congratulations,Winner is ${winner}`; //we using `` not "" or ''
     msgContainer.classList.remove("hide");
     disableBoxes();
};

const checkWinner= () => {
    for(let pattern of winPatterns){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val=== pos2Val && pos2Val=== pos3Val){
        console.log("Winner!",pos1Val);
        showWinner(pos1Val);
    } 
                             
    }
}
  checkDraw();
    }


newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




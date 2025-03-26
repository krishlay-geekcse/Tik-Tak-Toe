let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn  = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true; //playerX,playerO
const winpattern = [
    [ 0,1,2],
    [ 0,3,6],
    [ 0,4,8],  
    [ 1,4,7],
    [ 2,5,8],
    [ 2,4,6],
    [ 3,4,5],
    [ 6,7,8],
];
const resetgame =() =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click" ,() =>{
        
        if (turnO) {
            box.innerText="O";
            turnO = false;
        } else {
            box.innerText="X";
            turnO = true;
        }
        box.disabled ="True"
        checkwinner();
    });

});
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
} 
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
} 



const showwinner =(winner) =>{
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();


}


const checkwinner = () => {
    for( let pattern of winpattern) {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText ,
            boxes[pattern[1]].innerText ,
            boxes[pattern[2].innerText]
        );
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1 !="" && posval2 !="" && posval3 !="") {
            if(posval1 === posval2 && posval2 === posval3){
               
                showwinner(posval1);
            }
        }
    }


}
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
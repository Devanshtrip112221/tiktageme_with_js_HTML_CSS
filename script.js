let c   =  document.querySelectorAll(".box");
let s = document.querySelector(".resetbtn");
let wincontainer = document.querySelector(".hide");
let win = document.querySelector("#msg")


let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

c.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if(turn0){
            box.innerHTML = "O"
            turn0 = false;
        }
        else{
            box.innerHTML = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkwinner()
    });
});


const disabledbtn =() =>{
    for(let boxes of c){
        boxes.disabled = true;
    }
};
//......................................++.+.+..+.+.+.+.++.+..+.....................+.+.+.+.+............+.+++++
    const showinner = (winner) => {
    win.innerHTML = `Winner is ${winner}`;  
    wincontainer.classList.remove("hide");  // show the winner message
    disabledbtn();
};

const checkwinner = () =>{
    for(let pattern of winpattern){
        let val1 = c[pattern[0]].innerText;
        let val2 = c[pattern[1]].innerText;
        let val3 = c[pattern[2]].innerText;
        if(val1 != "" &&val2 !="" &&val3 != ""){  
            if(val1==val2 && val2==val3){
        console.log("Winner",val1);
        showinner(val1);
            }

            }
    }
};
const enablex =() =>{
    for(let boxes of c){
        boxes.disabled = false;
        boxes.innerText ="";
    }
};

const resett = () => {
    turn0 = true;
    enablex();
    wincontainer.classList.add("hide");  // hide the winner message on reset
};



s.addEventListener("click",resett);
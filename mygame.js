console.log("Welcome")
let turn = "X"
let end = false;

const change = ()=>{
    return turn === "X"? "0": "X"
}

const win = ()=>{
    let text = document.getElementsByClassName('text');
    let wins = [
        [2, 4, 6, 5, 15, 135],
        [0, 1, 2, 5, 5, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        
    ]
    wins.forEach(e =>{
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "") ){
            document.querySelector('.information').innerText = text[e[0]].innerText + " Won! Congratulations"
            end = true
            document.querySelector('.img1').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let text = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            if (!end){
                text.innerText = turn;
                turn = change();
                win();
                document.getElementsByClassName("information")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

reset.addEventListener('click', ()=>{
    let texts = document.querySelectorAll('.text');
    Array.from(texts).forEach(element => {
    element.innerText = ""
    });
    turn = "X"; 
    end = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("information")[0].innerText  = "Turn for " + turn;
    document.querySelector('.img1').getElementsByTagName('img')[0].style.width = "0px"
})

const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {},
};

function randomSquare(){
    state.view.squares.forEach((sqaure)=>{
        sqaure.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function addListenerHitbox(){
    state.view.squares.forEach((square)=>{
    });
}

function main(){
    randomSquare();
}

main();
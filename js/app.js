// Variables

// Variables Containers
const containerGame = document.querySelector(".juego");
const containerCellGame = containerGame.childNodes;
const containerMark = document.querySelector(".marcador").childNodes;
let containerMarkPlayer1 = containerMark[1];
let containerTurn = containerMark[3];
let containerMarkPlayer2 = containerMark[5];

// <i class="bi bi-x-lg"></i>
//<i class="bi bi-circle"></i>


// Funciones 
const loadApp = () => {
    markGame();
    playGame();
};
const markGame = () =>{
    containerMarkPlayer1.childNodes[3].innerHTML = 0;
    containerMarkPlayer2.childNodes[3].innerHTML = 0;
    
};
const playGame = (event) =>{
    event.innerHTML = `<i class="bi bi-x-lg"></i>`
    
    
    console.log(event);
};

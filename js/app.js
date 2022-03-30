// Variables

// Variables Containers
const containerGame = document.querySelector(".juego");
const containerCellGame = containerGame.childNodes;
const containerMenuStart = document.querySelector(".mensaje-inicio")
// Marcador
const containerMark = document.querySelector(".marcador").childNodes;
let containerMarkPlayer1 = containerMark[1].childNodes[3];
let containerTurn = containerMark[3];
let containerMarkPlayer2 = containerMark[5].childNodes[3];

// TUrnos
let turnPlayerJ = false;

// Botones inferiores
const containerBotones = document.querySelector(".container-botones").childNodes;
const containerBotonesRestar = containerBotones[1];
const containerBotonesPlay = containerBotones[3];
// <i class="bi bi-x-lg"></i>
//<i class="bi bi-circle"></i>
//<i class="bi bi-arrow-left-circle"></i> 
//<i class="bi bi-arrow-right-circle"></i> 


// Funciones 

// Cargar App
const loadApp = () => {
    markGame();
    
};

// Marcardor del Juego
const markGame = () =>{
    containerMarkPlayer1.innerHTML = 0;
    containerMarkPlayer2.innerHTML = 0;
    
};

// Turnos del juego
const startGame = () => {
    containerMenuStart.style.visibility = "hidden"
    let random = Math.floor(Math.random() * (3 - 1)) +1;
    if(random === 1){
        containerTurn.innerHTML = `<i class="bi bi-arrow-left-circle"></i>` ;
        turnPlayerJ = true
    }else{
        containerTurn.innerHTML = `<i class="bi bi-arrow-right-circle"></i>` ;
        turnPlayerJ = false
    };
    console.log(random)
    console.log(turnPlayerJ);
}
containerMenuStart.addEventListener('click',startGame);

// Marcado Tablero
const gameMove = (event) =>{
    if(turnPlayerJ == true){
        event.innerHTML = `<i class="bi bi-circle"></i>`;
        containerTurn.innerHTML = `<i class="bi bi-arrow-right-circle"></i>` ;
        turnPlayerJ = false;
    }else if(turnPlayerJ == false){
        event.innerHTML = `<i class="bi bi-x-lg"></i>`;
        containerTurn.innerHTML = `<i class="bi bi-arrow-left-circle"></i>` ;

        turnPlayerJ = true;
        
    }else{
        console.log("el programa a fallado")
    }
    
    
    console.log(event);
    checkGame()

};

const checkGame = () =>{
    console.log(containerGame)
}
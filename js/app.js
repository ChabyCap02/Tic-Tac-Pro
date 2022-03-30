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

// Arrays 
let arrayPositions = ['-','-','-','-','-','-','-','-','-']
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
}
containerMenuStart.addEventListener('click',startGame);

// Check Victorias
const checkGame = () =>{
    
    // Victorias Horizontales
    if(arrayPositions[0] != '-'&& arrayPositions[0] === arrayPositions[1] && arrayPositions[2] === arrayPositions[0]){
        console.log('VictoriaH 1');
    }else if(arrayPositions[3] != '-'&& arrayPositions[3] === arrayPositions[4] && arrayPositions[5] === arrayPositions[3]){
        console.log('victoriaH 2')
    }else if(arrayPositions[6] != '-'&& arrayPositions[6] === arrayPositions[7] && arrayPositions[8] === arrayPositions[6]){
        console.log('victoriaH 3')
    }
    // Victorias Verticales
    if(arrayPositions[0] != '-'&& arrayPositions[0] === arrayPositions[3] && arrayPositions[6] === arrayPositions[0]){
        console.log('VictoriaV 1');
    }else if(arrayPositions[1] != '-'&& arrayPositions[1] === arrayPositions[4] && arrayPositions[7] === arrayPositions[1]){
        console.log('victoriaV 2')
    }else if(arrayPositions[2] != '-'&& arrayPositions[2] === arrayPositions[5] && arrayPositions[8] === arrayPositions[2]){
        console.log('victoriaV 3')
    }
    // Diagonal
    if(arrayPositions[0] != '-'&& arrayPositions[0] === arrayPositions[4] && arrayPositions[8] === arrayPositions[0]){
        console.log('VictoriD 1');
    }else if(arrayPositions[2] != '-'&& arrayPositions[2] === arrayPositions[4] && arrayPositions[6] === arrayPositions[2]){
        console.log('victoriaD 2')
    }
}
// Marcado Tablero
const gameMove = (event,item) =>{
    if(turnPlayerJ == true){
        if(arrayPositions[item]!='x'){
            turnPlayerJ = false;
            arrayPositions[item] = 'o'
            event.innerHTML = `<i class="bi bi-circle"></i>`;
            containerTurn.innerHTML = `<i class="bi bi-arrow-right-circle"></i>` ;

        }else{
            console.log(`Posicion ${item} ocupada`)
        }
    }else if(turnPlayerJ == false){
        if(arrayPositions[item]!='o'){
            event.innerHTML = `<i class="bi bi-x-lg"></i>`;
            containerTurn.innerHTML = `<i class="bi bi-arrow-left-circle"></i>` ;

            turnPlayerJ = true;
            arrayPositions[item] = 'x'

        }else{
            console.log(`Posicion ${item} ocupada`)
        }
        
        
    }else{
        console.log("el programa a fallado")
    }
    console.log(arrayPositions)
    checkGame(); 
};


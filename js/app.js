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
let markP1 = 0;
let markP2 = 0;

// Arrays 
let arrayPositions = ['-','-','-','-','-','-','-','-','-'];
// TUrnos
let winCheck = false;
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
    containerMenuStart.childNodes[1].childNodes[1].innerHTML="Start"
    containerMenuStart.style.visibility = "visible";
    containerMarkPlayer1.innerHTML = 0;
    containerMarkPlayer2.innerHTML = 0;
    restartGame();
    
};

// Marcardor del Juego
containerBotonesRestar.addEventListener('click',loadApp)

// Turnos del juego
const startGame = () => {
    
    containerMenuStart.style.visibility = "hidden";
    let random = Math.floor(Math.random() * (3 - 1)) +1;
    if(random === 1){
        containerTurn.innerHTML = `<i class="bi bi-arrow-left-circle"></i>` ;
        turnPlayerJ = true
    }else{
        containerTurn.innerHTML = `<i class="bi bi-arrow-right-circle"></i>` ;
        turnPlayerJ = false
    }; 
    restartGame();
    
}
containerMenuStart.addEventListener('click',startGame);

// Check winChecks
const checkGame = () =>{
    
    // winChecks Horizontales
    if(arrayPositions[0] != '-'&& arrayPositions[0] === arrayPositions[1] && arrayPositions[2] === arrayPositions[0]){
        winCheck = true;
        console.log('winCheckH 1');
    }else if(arrayPositions[3] != '-'&& arrayPositions[3] === arrayPositions[4] && arrayPositions[5] === arrayPositions[3]){
        winCheck = true;
        console.log('winCheckH 2')
    }else if(arrayPositions[6] != '-'&& arrayPositions[6] === arrayPositions[7] && arrayPositions[8] === arrayPositions[6]){
        winCheck = true;
        console.log('winCheckH 3')
    }
    // winChecks Verticales
    if(arrayPositions[0] != '-'&& arrayPositions[0] === arrayPositions[3] && arrayPositions[6] === arrayPositions[0]){
        winCheck = true;
        console.log('winCheckV 1');
    }else if(arrayPositions[1] != '-'&& arrayPositions[1] === arrayPositions[4] && arrayPositions[7] === arrayPositions[1]){
        winCheck = true;
        console.log('winCheckV 2');
    }else if(arrayPositions[2] != '-'&& arrayPositions[2] === arrayPositions[5] && arrayPositions[8] === arrayPositions[2]){
        winCheck = true;
        console.log('winCheckV 3');
    }
    // Diagonal
    if(arrayPositions[0] != '-'&& arrayPositions[0] === arrayPositions[4] && arrayPositions[8] === arrayPositions[0]){
        winCheck = true;
        console.log('VictoriD 1');
    }else if(arrayPositions[2] != '-'&& arrayPositions[2] === arrayPositions[4] && arrayPositions[6] === arrayPositions[2]){
        winCheck = true;
        console.log('winCheckD 2');
    }else if(winCheck == false &&  ! arrayPositions.includes( '-' )){
        restartGame();
        arrayPositions = ['-','-','-','-','-','-','-','-','-'];

    }
    //Mensaje Winner
    if(turnPlayerJ==false && winCheck==true){
        console.log('Ganador O');
        containerMenuStart.style.visibility = "visible";
        containerMenuStart.childNodes[1].childNodes[1].innerHTML="Win J1 - O"
        markP1 +=1;
        containerMarkPlayer1.innerHTML = markP1;
    }else if(turnPlayerJ == true && winCheck ==true){
        console.log('Ganador x');
        containerMenuStart.style.visibility = "visible";
        containerMenuStart.childNodes[1].childNodes[1].innerHTML="Win J2 - X"
        markP2 +=1;
        containerMarkPlayer2.innerHTML = markP2;

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

// Restart Game
const restartGame = () =>{
    containerGame.innerHTML = `
    <div class="col item" onclick="gameMove(this,0)"></div>
    <div class="col item" onclick="gameMove(this,1)"></div>
    <div class="col item" onclick="gameMove(this,2)"></div>
    <div class="col item" onclick="gameMove(this,3)"></div>
    <div class="col item" onclick="gameMove(this,4)"></div>
    <div class="col item" onclick="gameMove(this,5)"></div>
    <div class="col item" onclick="gameMove(this,6)"></div>
    <div class="col item" onclick="gameMove(this,7)"></div>
    <div class="col item" onclick="gameMove(this,8)"></div>`

    arrayPositions = ['-','-','-','-','-','-','-','-','-'];
    winCheck=false;
}


function GameBoard(){
    const rows = 3;
    const colums = 3;
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < colums; j++){
            board[i].push()
        }
    }

    
    return board //! temporal
}


function cell (){
    let value = 0;

    const addOption = (player) =>{
        value = player;
    }

    const getValue = () => value;

    return {
        addOption,
        getValue
    }
}

console.log(GameBoard())

function gameController(/* playerOne, playerTwo */){

    const board = GameBoard();
    const[[one, two, three],[four, five, six],[seven, eight, nine]] = board



/*     const players = [
        {
            name: playerOne,
            option: 1
        },
        {
            name: playerTwo,
            option: 1
        }
    ] */
/* 
    let activePlayer = players[0] */

    function switchPlayer(){
        if(activePlayer === players[0]){
            activePlayer = players[1]
        } else {activePlayer = players[0]}
    }

    function selectOption(num){
        console.log (num)
    }
selectOption(nine)
}

gameController()
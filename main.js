function GameBoard(){
    const rows = 3;
    const colums = 3;
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < colums; j++){
            board[i].push(cell())//! temporal
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
function GameBoard(){
    const rows = 3;
    const colums = 3;
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < colums; j++){
            board[i].push("temporal")//! temporal
        }
    } 
    return board //! temporal
}
console.log(GameBoard())
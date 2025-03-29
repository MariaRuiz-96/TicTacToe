function gameBorard(){
    board=[]
    for (let i = 0; i < 3 ; i++){
        board.push([])

        for(let j = 0; j < 3; j++){
            board[i].push([])
        }
    }

    return board
}

function newPlayer(name, token){
    return{
        name: name,
        token: token
    }
}







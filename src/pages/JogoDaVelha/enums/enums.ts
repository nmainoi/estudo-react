export enum GameTurn{
    gameFinished = "Fim de jogo",
    PlayerOneTurn = "Turno do Jogador Um",
    PlayerTwoTurn = "Turno do Jogador Dois",
    PlayerOneWin ="Vitoria do jogador Um",
    PlayerTwoWin ="Vitoria do jogador Dois",
    even = "Deu velha!",
    gameCanStart = "Inicie um novo Jogo!"
}
export enum GameMark{
    None,
    PlayerOne,
    PlayerTwo,
}

export enum GameArea{
    One = 0,
    Two = 1,
    Three = 2,
    Four = 3,
    Five = 4,
    Six = 5,
    Seven = 6,
    Eight = 7,
    Nine = 8
}
export interface GamePosition {
    Position: GameArea;
    Player: GameMark;
}


// export function GameSate() {
//     return { rowOne: [0,0,0], rowTree: [0,0,0], rowFour: [0,0,0]}
// }
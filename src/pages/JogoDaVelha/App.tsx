import { useState, useEffect } from 'react'
import './App.css'
import { GameButton } from './components/GameButton/GameButton'
import { OptionButton } from './components/OptionButton/OptionButton'
import { GameTurn, GameArea, GameMark, GamePosition } from './enums/enums'
import TextField from '@mui/material/TextField';
import { VerifyGameState } from './utils/VerifyGameSate'
import Restart from './assets/restart.svg'

function refreshPage() {
    window.location.reload();
  }
export function TicTacToe() {
    const [GameState, UpdateGameSate] = useState(GameTurn.gameCanStart)
    const [GamePoints, UpdateGamePoints] = useState<GamePosition[]>([])

    const gameStart = () => {
        if (GameState == GameTurn.gameCanStart)
            UpdateGameSate(GameTurn.PlayerOneTurn)
    }
    const UpdateClick = (x: GameArea) => {

        let Player: GameMark;
        if (GameState == GameTurn.PlayerOneTurn) {
            Player = GameMark.PlayerOne
        }
        else if (GameState == GameTurn.PlayerTwoTurn) {
            Player = GameMark.PlayerTwo
        }
        else
            return;

        const Points: GamePosition = {
            Position: x,
            Player: Player
        }
        let NewPoints = GamePoints;
        NewPoints.push(Points);
        UpdateGamePoints(NewPoints)
        UpdateGameSate(VerifyGameState(GamePoints,GameState))

    }


    return (
        <>
            <div className="main">
                <div className="gameArea">
                    <div onClick={() => gameStart()}  className='header'><label >{GameState.toString()}</label></div>
                    <div className="playAbleArea">
                        <div className="areaOne">
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.One)} ></GameButton>
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Two)}></GameButton>
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Three)}></GameButton>
                        </div>
                        <div className="areaTwo">
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Four)}></GameButton>
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Five)}></GameButton>
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Six)}></GameButton>
                        </div>
                        <div className="areaTree">
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Seven)}></GameButton>
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Eight)}></GameButton>
                            <GameButton turn={GameState} onClick={() => UpdateClick(GameArea.Nine)}></GameButton>
                        </div>
                    </div>
                </div>
                <div onClick={refreshPage} className="restart"><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="#000" stroke-width="2" d="M20,8 C18.5343681,5.03213345 15.4860999,3 11.9637942,3 C7.01333514,3 3,7.02954545 3,12 M4,16 C5.4656319,18.9678666 8.51390007,21 12.0362058,21 C16.9866649,21 21,16.9704545 21,12 M9,16 L3,16 L3,22 M21,2 L21,8 L15,8"/>
</svg></div>
            </div>


        </>
    )
}


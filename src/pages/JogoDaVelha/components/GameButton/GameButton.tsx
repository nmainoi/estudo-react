import './style.css'
import { useState, useEffect,FC } from 'react'

import Circle from '../../assets/circle.svg'
import Start from '../../assets/start.svg'
import FreeSpace from '../../assets/default-bt.svg'
import { GameTurn,GameArea,GameMark  } from '../../enums/enums'

enum ButtonSate {
    MarkOne = 'X',
    MarkTwo = 'O',
    NONE = '?'
}
//turn: GameTurn = GameTurn.gameFinished
interface ButtonProps {
    turn: GameTurn;
    onClick: () => void;

}
const GameButton: FC<ButtonProps> = ({turn,onClick}) => {
    const [btSate, updateBtSate] = useState<ButtonSate>(ButtonSate.NONE)
    const [btImg, updateImg] = useState(FreeSpace);
    const [CanClick, updateCanClick] = useState(true)
    useEffect(() => {
        if (btSate == ButtonSate.NONE)
            updateImg(FreeSpace)
        else if (btSate == ButtonSate.MarkOne)
            updateImg(Circle)
        else if (btSate == ButtonSate.MarkTwo)
            updateImg(Start)

    }, [btSate])
    const UpdateClick = () => {
        if(!CanClick)
           return
        onClick()
        switch (turn) {
            case GameTurn.PlayerOneTurn:
                updateBtSate(ButtonSate.MarkOne);
                break;
            case GameTurn.PlayerTwoTurn:
                updateBtSate(ButtonSate.MarkTwo);
                break;
                default: return;

        }
        updateCanClick(false);

    }


    return <><button className={(!CanClick ? 'ClickAnimation' : 'CanClick' )+ ' GameButton'}  onClick={() => UpdateClick()}><img src={btImg ?? ''}></img></button></>
}
export {GameButton} 
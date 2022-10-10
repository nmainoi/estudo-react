import { GameTurn,GameArea,GameMark,GamePosition } from '../enums/enums'
export function VerifyGameState(GamePoints:GamePosition[],Turn:GameTurn){
    let PlayerOnePoints:GameArea[] =  GamePoints.filter( p => p.Player === GameMark.PlayerOne)
    .map(p => p.Position)
    let PlayerTwoPoints:GameArea[] =  GamePoints.filter( p => p.Player === GameMark.PlayerTwo)
    .map(p => p.Position)
    if(VerifyCombinations(PlayerOnePoints) ){
      return  GameTurn.PlayerOneWin;
    } else if(VerifyCombinations(PlayerTwoPoints) ){
     return GameTurn.PlayerTwoWin;    
    }
    if(GamePoints.length > 8){
        return GameTurn.even;
    }
    if (Turn == GameTurn.PlayerOneTurn) {
        return  GameTurn.PlayerTwoTurn
    }
    else if (Turn == GameTurn.PlayerTwoTurn) {
        return  GameTurn.PlayerOneTurn;
    }
  return Turn;
  }

  //console.log(arr1.every(elem => arr2.includes(elem)));
  function VerifyCombinations(GamePoints:GameArea[]){
        if(winConditionOne.every(elem => GamePoints.includes(elem))
        || winConditionTwo.every(elem => GamePoints.includes(elem)) 
        || winConditionThree.every(elem => GamePoints.includes(elem))
        || winConditionFour.every(elem => GamePoints.includes(elem))
        || winConditionFive.every(elem => GamePoints.includes(elem))
        || winConditionSix.every(elem => GamePoints.includes(elem))
        || winConditionSeven.every(elem => GamePoints.includes(elem))
        || winConditionEigth.every(elem => GamePoints.includes(elem))        
        )
            return true;


      return false  
  }

  const winConditionOne:GameArea[] = [GameArea.One, GameArea.Two, GameArea.Three] // 1 2 3
  const winConditionTwo = [GameArea.Four, GameArea.Five, GameArea.Six] // 4 5 6
  const winConditionThree = [GameArea.Seven, GameArea.Eight, GameArea.Nine] // 7 8 9

  const winConditionFour = [GameArea.One, GameArea.Four, GameArea.Seven] // 1 4 7
  const winConditionFive = [GameArea.Two, GameArea.Five, GameArea.Eight] // 2 5 8
  const winConditionSix = [GameArea.Three, GameArea.Six, GameArea.Nine] // 3 6 9
 
  const winConditionSeven = [GameArea.One, GameArea.Five, GameArea.Nine] // 1 5 9
  const winConditionEigth = [GameArea.Three, GameArea.Five, GameArea.Seven] // 3 5 7





  
  

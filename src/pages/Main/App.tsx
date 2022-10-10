import { useState } from 'react'
import './App.css'
import CalculatorIcon from '../../assets/calculator-svgrepo-com.svg'
import TicTacToeIcon from '../../assets/tic-tac-toe.svg' 

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="main">
  <div className="title">
  <h1>Projetos React TypeScript</h1>
  </div>  
  <div className="projects">
    <ul>
      <li> <a href='calculator'> <span>Calculadora</span>  <img className='Img' src={CalculatorIcon}/>  </a></li>
      <li> <a href='tictactoe'> <span> Jogo da velha </span><img className='Img' src={TicTacToeIcon}/></a></li>     
    </ul>
  </div>
    
</div>
  )
}

export default App

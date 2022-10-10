import { Routes, Route} from 'react-router-dom';

import Calculator from '../pages/Calculadora/App'
import {TicTacToe} from '../pages/JogoDaVelha/App'
import App from '../pages/Main/App'

export function AppRoutes () {

    return(<Routes>
        <Route path="/" element={<App />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />

    </Routes>)
}
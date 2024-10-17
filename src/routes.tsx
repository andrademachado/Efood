import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Estabelecimento from './pages/Estabelecimento';

const Rotas = () => (
    <Routes>
        <Route path= "/" element = {< Home />} />
        <Route path = "/estabelecimento" element = {< Estabelecimento />} />
    </Routes>
)


export default Rotas;

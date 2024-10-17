import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'
import  {  GlobalCss } from './styles';
import Home from './pages/Home';
import Categories from './pages/Estabelecimento';
import Estabelecimento from './pages/Estabelecimento';
import Italia from './compnents/Italia';
import Cartaz from './compnents/Cartaz';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/estabelecimento" element={<Estabelecimento />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className='container'>
      </div>       
      <Rotas />
    </BrowserRouter>
  )
}

export default App;

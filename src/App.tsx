import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './compnents/Banner';
import  {  GlobalCss } from './styles';
import Product from './compnents/Product';

const rotas = createBrowserRouter([
  {
    path: '/',
    element:(
      <>
        <Banner />
        <Product />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
        
      <div className='container'>
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App;

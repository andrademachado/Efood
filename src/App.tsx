import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './compnents/Banner';
import  {  GlobalCss } from './styles';
import ProductsList from './compnents/ProductsList';



const rotas = createBrowserRouter([
  {
    path: '/',
    element:(
      <>
        <Banner />
        <ProductsList  background='branco' />
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

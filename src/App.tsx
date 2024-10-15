import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  {  GlobalCss } from './styles';
import Home from './pages/Home';
import Categories from './pages/Categories';



const rotas = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path:'/categorias',
    element: <Categories />
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

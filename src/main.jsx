
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//BLOCO DE ROTAS
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';

import Erro404 from './routes/Erro404.jsx';

import Login from './routes/Login.jsx';

const router = createBrowserRouter([ 
  {path: "/", element: <App/> , errorElement: <Erro404/>, 
    children:[
      {path: "/", element: <Home/>},

      {path: "/login", element: <Login />}
    ]
  }
]);

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

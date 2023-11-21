# Participantes
Hellen Ramos Gonçalves Assis - RM98294

Ana Laura Juarez Zerlim - RM98065

## Notas

Para realizar login em nossa aplicação, executar o comando
- json-server --watch dados.json  --port 5000

Credenciais para Login disponíveis no arquivo
- dados.json

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Iniciando a criação de ROTAS com react-router-dom.
## Instalando a dependência no projeto
- npm install react-router-dom;
## Criar a pasta routes
- Criar a pasta routes.
## As rotas ou páginas
- Criando as rotas/páginas [Home, EditarProdutos, Produtos e Erro404].
## Importar os objetos das rotas no main.jsx e dos componentes de rotas.
- import { createBrowserRouter, RouterProvider } from 'react-router-dom';
- import Home..., import Produtos..., import EditarProdutos..., import Erro404...
## Criando o objeto de rotas com o createBrowserRouter.
- const router = createBrowserRouter([ ... ]);
## Trocar o componente <App/> pelo componente <RouterProvider/> no ReactDOM.render.
- ReactDOM.render(
    <React.StrictMode>
    +     <RouterProvider/>
    + </React.StrictMode>
);
## Adicionando a props router ao componente RouterProvider.
- ReactDOM.render(
    <React.StrictMode>
    +     <RouterProvider router={router}/>
    + </React.StrictMode>
);
    
import './App.css';
import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Main } from './Main'
import { Uppermed } from './Uppermed'
import { Grab } from './Grab'
import { Health } from './Health'
import { Cpf } from './Cpf'
import { CpfDls } from './CpfDls'
import { Bt } from './Bt'
import { About } from './About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/uppermed",
    element: <Uppermed />,
  },
  {
    path: "/grab",
    element: <Grab />,
  },
  {
    path: "/health",
    element: <Health />,
  },
  {
    path: "/cpf",
    element: <Cpf />,
  },
  {
    path: "/cpfdls",
    element: <CpfDls />,
  },
  {
    path: "/bt",
    element: <Bt />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

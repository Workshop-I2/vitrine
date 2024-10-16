import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Accueil from './pages/Accueil/Accueil';
import Contact from './pages/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import FakeMessage from './pages/FakeMessage/FakeMessage';
import Sensibilisation from './pages/Sensibilisation/Sensibilisation';
import Racisme from './pages/Racisme/Racisme';
import Sexisme from './pages/Sexisme/Sexisme';
import CyberHarcelement from './pages/CyberHarcelement/CyberHarcelement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/sensibilisation",
        element: <Sensibilisation />,
        children: [
          {
            path: "/sensibilisation/racisme",
            element: <Racisme/>,
          },
          {
            path: "/sensibilisation/sexisme",
            element: <Sexisme/>,
          },
          {
            path: "/sensibilisation/cyberharcelement",
            element: <CyberHarcelement/>,
          }
        ]
      },
      {
        path: "/fake-message",
        element: <FakeMessage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
     <RouterProvider router={router} />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

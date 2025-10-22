import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root.jsx'; 
import Home from './home.jsx'; 
import Hobbies from './hobbies.jsx'; 
import HobbyDetail from './hobbyDetails.jsx'; 
import About from './about.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, 
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: 'hobbies', 
        element: <Hobbies />,
      },
      {
        path: 'hobbies/:hobbyId', 
        element: <HobbyDetail />,
      },
      {
        path: 'about', 
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
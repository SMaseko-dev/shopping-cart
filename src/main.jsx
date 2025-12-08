import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import App from './App.jsx'
import Shoppingpage from './pages/Shoppingpage.jsx';
import Cartpage from './pages/Cartpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shoppingpage",
    element: <Shoppingpage />,
  },
  {
    path: "cartpage",
    element: <Cartpage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

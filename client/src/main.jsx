import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ItemStockPage from './pages/ItemStockPage.jsx'
import LocationStockPage from './pages/LocationStockPage.jsx'
import AddStockItem from './pages/AddStockItem.jsx'
import AddStockLocation from './pages/AddStockLocation.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/stock/items',
        element: <ItemStockPage />,
      },
      {
        path: '/stock/locations',
        element: <LocationStockPage />,
      },
      {
        path: '/stock/addItem',
        element: <AddStockItem />,
      },
      {
        path: '/stock/addLocation',
        element: <AddStockLocation />,
      },
  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './utils/router';
import {
  RouterProvider,
} from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>,
)

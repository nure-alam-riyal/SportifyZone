import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

import { RouterProvider,  } from 'react-router-dom'
import router from './router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>

</RouterProvider>
    </AuthProvider>
    <Toaster />
  
  </StrictMode>,
)

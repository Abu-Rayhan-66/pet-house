import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes'
import {  QueryClientProvider,QueryClient } from '@tanstack/react-query'
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />
       </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

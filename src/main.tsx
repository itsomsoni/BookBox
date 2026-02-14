import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppThemeProvider } from './app/providers/ThemeProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      
      <RouterProvider router={router}></RouterProvider>
      
    </AppThemeProvider>
  </StrictMode>,
)

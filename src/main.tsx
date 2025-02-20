import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme.tsx'
import { Provider } from 'react-redux'
import store from './state/store.ts'
import AppRoutes from './routes/AppRoutes.tsx'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <AppRoutes />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

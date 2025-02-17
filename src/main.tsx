import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.tsx'
import { Provider } from 'react-redux'
import store from './state/store.ts'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './pages/dashboard/Dashboard.tsx'
import Settings from './pages/settings/Settings.tsx'
import NotFound from './pages/Error/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

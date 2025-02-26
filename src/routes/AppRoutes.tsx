
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import { ErrorPage, NotFound } from '../pages/error'
import { DASHBOARD, SETTINGS } from '../constants/routePath'
import { lazy, Suspense } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'

const AppRoutes = () => {

    const Dashboard = lazy(() => import('../pages/dashboard'));
    const Settings = lazy(() => import('../pages/settings'));

    return (
        <BrowserRouter>
            <Layout>
                <Suspense
                    fallback={
                        <Backdrop
                            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                            open={true}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    }>
                    <ErrorBoundary FallbackComponent={ErrorPage}>
                        <Routes>
                            <Route path={DASHBOARD} element={<Dashboard />} />
                            <Route path={SETTINGS} element={<Settings />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRoutes
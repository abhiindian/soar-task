
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import { NotFound } from '../pages/error'
import { DASHBOARD, SETTINGS } from '../constants/routePath'
import { lazy, Suspense } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

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
                    <Routes>
                        <Route path={DASHBOARD} element={<Dashboard />} />
                        <Route path={SETTINGS} element={<Settings />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRoutes
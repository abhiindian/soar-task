
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import { NotFound } from '../pages/error'
import { DASHBOARD, SETTINGS } from '../constants/routePath'
import { lazy, Suspense } from 'react'

const AppRoutes = () => {

    const Dashboard = lazy(() => import('../pages/dashboard'));
    const Settings = lazy(() => import('../pages/settings'));

    return (
        <BrowserRouter>
            <Layout>
                <Suspense fallback={<>loading...</>}>
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
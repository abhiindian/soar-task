
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import { ErrorPage, NotFound } from '../pages/error'
import { DASHBOARD, SETTINGS } from '../constants/routePath'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Dashboard from '../pages/dashboard'
import Loading from '../components/shared/Loading'

const AppRoutes = () => {

    const Settings = lazy(() => import('../pages/settings'));

    return (
        <BrowserRouter>
            <Layout>
                <Suspense
                    fallback={<Loading />}>
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
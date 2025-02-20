
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'

import Dashboard from '../pages/dashboard'
import Settings from '../pages/settings'
import NotFound from '../pages/errors/NotFound'
import { DASHBOARD, SETTINGS } from '../constants/routePath'


const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={DASHBOARD} element={<Dashboard />} />
                    <Route path={SETTINGS} element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default AppRoutes
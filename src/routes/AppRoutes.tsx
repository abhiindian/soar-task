
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import { DASHBOARD, SETTINGS } from '../Constants/routePath'
import Dashboard from '../pages/Dashboard/Dashboard'
import Settings from '../pages/Settings/Settings'
import NotFound from '../pages/Errors/NotFound'


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
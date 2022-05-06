import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import { publicRoute } from './routes'

const App: React.FC = () => {
    const location = useLocation()
    return (
        <main className="main">
            {location.pathname.includes('watch') ? null : <Header />}
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Page />}
                        />
                    )
                })}
            </Routes>
        </main>
    )
}

export default App

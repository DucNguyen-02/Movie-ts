import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import BlankLayout from './layout/BlankLayout'
import CommonLayout from './layout/CommonLayout'
import HeaderLayout from './layout/HeaderLayout'
import { publicRoute } from './routes'

// Configure Firebase.

const App: React.FC = () => {
    const config = {
        apiKey: 'AIzaSyBJt7_5TG3oLPxS4svmDrqJDyJeGPxXlbs',
        authDomain: 'sign-in-26be9.firebaseapp.com',
    }
    firebase.initializeApp(config)
    // useEffect(() => {
    //     const unregisterAuthObserver = firebase
    //         .auth()
    //         .onAuthStateChanged(async (user) => {
    //             if (!user) {
    //                 console.log('user is not loggin')
    //                 return
    //             }

    //             console.log('login user:', user.displayName)
    //             const token = await user.getIdToken()
    //             console.log(token)
    //         })
    //     return () => unregisterAuthObserver()
    // }, [])

    return (
        <main className="main">
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component
                    const layout = route.layout
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                layout === 'default' ? (
                                    <CommonLayout>
                                        <Page />
                                    </CommonLayout>
                                ) : layout === 'onlyHeader' ? (
                                    <HeaderLayout>
                                        <Page />
                                    </HeaderLayout>
                                ) : (
                                    <BlankLayout>
                                        <Page />
                                    </BlankLayout>
                                )
                            }
                        />
                    )
                })}
            </Routes>
        </main>
    )
}

export default App

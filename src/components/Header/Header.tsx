import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import './header.scss'

const Header = () => {
    const [search, setSearch] = useState<string>('')
    const [user, setUser] = useState<any>()
    const navigate = useNavigate()
    const headerRef = useRef<HTMLDivElement>(null)

    const handleSubmit = (e: React.MouseEvent) => {
        if (search === '') {
            return
        }
        e.preventDefault()
        navigate(`/search?query=${search}`, { replace: false })
        setSearch('')
    }

    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                if (!user) {
                    return
                }

                setUser(user)
                const token = await user.getIdToken()
            })
        return () => unregisterAuthObserver()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60
                ? headerRef?.current?.classList?.add('fixed')
                : headerRef?.current?.classList?.remove('fixed')
        })

        return window.removeEventListener('scroll', () => {
            window.scrollY > 60
                ? headerRef?.current?.classList?.add('fixed')
                : headerRef?.current?.classList?.remove('fixed')
        })
    })

    const handleLogout = () => {
        setUser(undefined)
        firebase.auth().signOut()
    }

    return (
        <div ref={headerRef} className="header">
            <div className="header-left">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="header-list nav">
                    <li className="header-item nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="header-item nav-item">
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className="header-item nav-item">
                        <Link to="/TVShows">TV Shows</Link>
                    </li>
                    <li className="header-item nav-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

            <div className="header-right d-none d-md-flex">
                <form className="header-form">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="header-search"
                        type="text"
                    />
                    <button
                        onClick={(e) => {
                            handleSubmit(e)
                        }}
                        className="header-btn"
                    >
                        <FaSearch />
                    </button>
                </form>

                {user ? (
                    <div className="container">
                        <div className=" d-none d-md-flex justify-content-between align-items-center">
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-light btn-sm dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    {user.displayName}
                                </button>
                                <div className="dropdown-menu">
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-danger w-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="mbtn header-login">Login</button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Header

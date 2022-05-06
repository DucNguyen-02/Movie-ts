import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import './header.scss'

const Header = () => {
    const [search, setSearch] = useState<string>('')
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
    return (
        <div ref={headerRef} className="header">
            <div className="header-left">
                <div className="header-logo">
                    <img src={logo} alt="" />
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

            <form className="header-right d-none d-md-flex">
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
        </div>
    )
}

export default Header

import React from 'react'
import { FaRegSadTear } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'
import './notFound.scss'

const NotFound = () => {
    useTitle('Page Not Found')

    return (
        <div className="notFound">
            <div className="notFound-wrapper">
                <i className="notFound-icon">
                    <FaRegSadTear />
                </i>
                <h2 className="notFound-title">Oops!</h2>
                <h2 className="notFound-title">Page not found</h2>
                <Link to="/" className="notFound-back">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound

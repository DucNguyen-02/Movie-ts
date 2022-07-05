import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Props } from '../interfaces/interfaces'

const CommonLayout = ({ children }: Props) => {
    return (
        <div className="commonLayout">
            <Header />
            <div className="commonLayout-wrapper">{children}</div>
            <Footer />
        </div>
    )
}

export default CommonLayout

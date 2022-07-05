import React from 'react'
import Header from '../components/Header/Header'
import { Props } from '../interfaces/interfaces'

const HeaderLayout = ({ children }: Props) => {
    return (
        <div className="headerLayout">
            <Header />
            <div className="headerLayout-wrapper">{children}</div>
        </div>
    )
}

export default HeaderLayout

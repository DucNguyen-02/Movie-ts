import React from 'react'
import { Props } from '../interfaces/interfaces'

const BlankLayout = ({ children }: Props) => {
    return (
        <div className="blankLayout">
            <div className="blankLayout-wrapper">{children}</div>
        </div>
    )
}

export default BlankLayout

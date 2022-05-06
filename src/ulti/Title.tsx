import React, { useEffect } from 'react'
import { TitleInterface } from '../interfaces/interfaces'

const Title = ({ title }: TitleInterface) => {
    useEffect(() => {
        document.title = title
    })
    return <></>
}

export default Title

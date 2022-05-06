import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_FILM } from '../../constants/request'
import Title from '../../ulti/Title'
import './watch.scss'

const Watch = () => {
    const { type, id } = useParams()
    const [esp, setEsp] = useState<number>(1)

    const handleNext = (): void => {
        setEsp(esp + 1)
    }

    if (type === 'tv') {
        return (
            <div className="watch">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=1&e=${esp}`}
                    title="Movie player"
                    frameBorder="0"
                    allowFullScreen
                />
                <button onClick={handleNext}>next</button>
            </div>
        )
    }
    return (
        <div className="watch">
            <Title title={'Watch'} />
            <iframe
                width="100%"
                height="100%"
                src={`${URL_FILM}${id}`}
                title="Movie player"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    )
}

export default Watch

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL_FILM } from '../../constants/request'
import useTitle from '../../hooks/useTitle'
import './watch.scss'

const Watch = () => {
    const { type, id } = useParams()
    const [esp, setEsp] = useState<number>(1)

    const handleNext = (): void => {
        setEsp(esp + 1)
    }

    useTitle('Watch')

    if (type === 'tv') {
        return (
            <div className="watch">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://2embed.org/embed/${id}/1/${esp}`}
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

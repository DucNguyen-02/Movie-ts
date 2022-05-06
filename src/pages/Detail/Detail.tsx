import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { API_KEY, BASE_URL, URL } from '../../constants/request'
import Title from '../../ulti/Title'
import './detail.scss'

const Detail = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [movie, setMovie] = useState<any>()
    const { type, id } = useParams<string>()
    const fetchMovie = async (): Promise<void> => {
        const resp = await axios.get(`${URL}/${type}/${id}?api_key=${API_KEY}`)
        setMovie(resp.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div
            className="banner-background"
            style={{
                backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
            }}
        >
            <Title title={'Detail'} />

            <div className="detail">
                <img
                    className="detail-img"
                    src={`${BASE_URL}${movie?.poster_path}`}
                    alt=""
                />
                <div className="detail-content">
                    <h2 className="detail-title">
                        {movie?.original_title || movie?.name}
                    </h2>
                    <p className="detail-desc">{movie?.overview}</p>
                    <p className="detail-release">
                        Release date:{' '}
                        {movie?.release_date || movie?.first_air_date}
                    </p>
                    <Link
                        to={
                            type === 'tv'
                                ? `/watch/${type}/${movie?.id}`
                                : `/watch/${type}/${movie?.imdb_id}`
                        }
                    >
                        <button className="mbtn banner-btn banner-btn-play">
                            {' '}
                            <FaPlay className="banner-icon" /> Play
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Detail

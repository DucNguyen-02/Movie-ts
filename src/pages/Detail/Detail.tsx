import { useEffect } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import movieApi from '../../apis/movieAPI'
import { API_KEY, BASE_URL, URL } from '../../constants/request'
import useFetch from '../../hooks/useFetch'
import { setMovieAtLocal } from '../../ulti/localStorage'
import Title from '../../ulti/Title'
import './detail.scss'

const Detail = () => {
    const { type, id } = useParams<string>()

    const { data: movie }: any = useFetch({
        fetcher: movieApi.getMovieDetail,
        url: `${URL}/${type}/${id}?api_key=${API_KEY}`,
    })

    useEffect(() => {
        let movieType = type === 'tv' ? movie?.id : movie?.imdb_id
        setMovieAtLocal({
            id: movieType,
            name: movie?.original_title || movie?.name,
            poster_path: movie?.poster_path,
            media_type: type,
        })
    }, [movie])

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
                    <div
                        className="Stars"
                        aria-label="Rating of this product is 2.3 out of 5."
                    ></div>
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

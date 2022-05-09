import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { URL } from '../../constants/request'
import { ListMovieInterface, MovieInterface } from '../../interfaces/interfaces'
import ListItem from '../ItemMovie/ItemMovie'
import './listMovie.scss'

const ListMovie = ({ type, title, fetchURL }: ListMovieInterface) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [movies, setMovies] = useState<MovieInterface[]>([])
    const [slidePerView, setSlidePerView] = useState<number>((): number => {
        return window.innerWidth <= 739 ? 3 : window.innerWidth <= 1023 ? 6 : 8
    })

    const fetchMovies = async (): Promise<void> => {
        const resp = await axios.get(`${URL}${fetchURL}`)
        setLoading(false)
        setMovies(resp.data.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    useEffect(() => {
        const setSize = (): void => {
            if (window.innerWidth <= 739) {
                setSlidePerView(3)
            } else if (window.innerWidth <= 1023) {
                setSlidePerView(6)
            } else {
                setSlidePerView(8)
            }
        }

        window.addEventListener('resize', setSize)

        return () => window.removeEventListener('resize', setSize)
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="list">
            <h2 className="list-title">{title}</h2>
            <Swiper
                navigation
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={slidePerView}
            >
                {movies.map((movie) => {
                    return (
                        <SwiperSlide key={movie.id} className="row-item">
                            <Link to={`/detail/${type}/${movie.id}`}>
                                <ListItem movie={movie} />
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default ListMovie

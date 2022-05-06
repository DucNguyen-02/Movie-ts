import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemMovie from '../../components/ItemMovie/ItemMovie'
import { API_KEY, URL } from '../../constants/request'
import { MoviesInterface } from '../../interfaces/interfaces'
import Title from '../../ulti/Title'
import './movies.scss'

const Movies = () => {
    const [movies, setMovies] = useState<MoviesInterface[]>([])
    const [page, setPage] = useState<number>(1)

    const fetchMovies = async (): Promise<void> => {
        const resp = await axios.get(
            `${URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
        )
        setMovies([...movies, ...resp.data.results])
    }

    useEffect(() => {
        fetchMovies()
    }, [page])

    const loadMore = (): void => {
        setPage(page + 1)
    }

    return (
        <div className="movies">
            <Title title={'Movies'} />
            <h2 className="movies-title">Movies</h2>
            <div className="movies-list">
                {movies?.map((movie) => {
                    return (
                        <li key={movie.id} className="movies-item">
                            <Link to={`/detail/movie/${movie.id}`}>
                                {' '}
                                <ItemMovie movie={movie} />
                            </Link>
                        </li>
                    )
                })}
            </div>
            <button className="movies-btn" onClick={loadMore}>
                Load More
            </button>
        </div>
    )
}

export default Movies

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ItemMovie from '../../components/ItemMovie/ItemMovie'
import { API_KEY, URL } from '../../constants/request'
import { SearchInterface } from '../../interfaces/interfaces'
import Title from '../../ulti/Title'
import './search.scss'

const Search = () => {
    const [movies, setMovies] = useState<SearchInterface[]>([])
    const [page, setPage] = useState<number>(1)
    const location = useLocation()
    const searchParam = new URLSearchParams(location.search)
    const keyword: string | null = searchParam.get('query')

    const fetchSearchNew = async (): Promise<void> => {
        const resp = await axios.get(
            `${URL}/search/multi?api_key=${API_KEY}&query=${keyword}&page=1`
        )
        setMovies(resp.data.results)
    }

    const fetchSearchMore = async (): Promise<void> => {
        const resp = await axios.get(
            `${URL}/search/multi?api_key=${API_KEY}&query=${keyword}&page=${page}`
        )
        setMovies([...movies, ...resp.data.results])
    }

    const loadMore = (): void => {
        setPage(page + 1)
    }

    useEffect(() => {
        fetchSearchNew()
    }, [keyword])

    useEffect(() => {
        fetchSearchMore()
    }, [page])
    return (
        <div className="search">
            <Title title={`Results for "${keyword}"`} />
            <h2 className="movies-title">{`Results for "${keyword}"`}</h2>
            <ul className="movies-list">
                {movies?.map((movie) => {
                    return (
                        <li key={movie.id} className="movies-item">
                            <Link
                                to={`/detail/${movie.media_type}/${movie.id}`}
                            >
                                {' '}
                                <ItemMovie movie={movie} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button className="movies-btn" onClick={loadMore}>
                Load More
            </button>
        </div>
    )
}

export default Search

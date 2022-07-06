import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import movieApi from '../../apis/movieAPI'
import ItemMovie from '../../components/ItemMovie/ItemMovie'
import { API_KEY, URL } from '../../constants/request'
import useFetch from '../../hooks/useFetch'
import useTitle from '../../hooks/useTitle'
import { MoviesInterface } from '../../interfaces/interfaces'
import InfiniteScroll from 'react-infinite-scroll-component'
import './movies.scss'

const Movies = () => {
    const [movies, setMovies] = useState<MoviesInterface[]>([])
    const [page, setPage] = useState<number>(1)

    const fetchMovies = async (): Promise<void> => {
        const resp = await axios.get(
            `${URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
        )
        setMovies([...movies, ...resp.data.results])
        setPage(page + 1)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    useTitle('Movies')

    return (
        <InfiniteScroll
            dataLength={movies.length} //This is important field to render the next data
            next={fetchMovies}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="movies">
                <h2 className="movies-title">Movies</h2>
                <div className="movies-list">
                    {movies?.map((movie: any) => {
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
            </div>
        </InfiniteScroll>
    )
}

export default Movies

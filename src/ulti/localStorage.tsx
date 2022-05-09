import { RecentlyInterface } from '../interfaces/interfaces'

const getMovieFromLocal = () => {
    const movies: any = localStorage.getItem('list-movies')
    if (movies) {
        return JSON.parse(movies)
    }
    return ''
}

const setMovieAtLocal = (movie: RecentlyInterface): void => {
    if (movie.id) {
        const listMovies = getMovieFromLocal() || []
        const existMovie = listMovies.some(
            (item: RecentlyInterface) => item.id === movie.id
        )
        if (!existMovie) {
            listMovies.push(movie)
            localStorage.setItem('list-movies', JSON.stringify(listMovies))
        }
    }
}

export { getMovieFromLocal, setMovieAtLocal }

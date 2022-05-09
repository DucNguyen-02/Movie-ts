const API_KEY: string | undefined = process.env.REACT_APP_API_KEY
const URL: string = `https://api.themoviedb.org/3`
const BASE_URL: string = 'https://image.tmdb.org/t/p/original/'
const URL_FILM: string = 'https://www.2embed.ru/embed/imdb/movie?id='

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
export { API_KEY, URL, BASE_URL, URL_FILM }

// comment something

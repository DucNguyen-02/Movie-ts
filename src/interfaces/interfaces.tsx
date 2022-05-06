interface BannerInterface {
    id: number
    name: string
    original_name: string
    title: string
    backdrop_path: string
    overview: string
}

interface ListMovieInterface {
    type: string
    title: string
    fetchURL: string
}

interface MovieInterface {
    id: number
    name: string
    original_name: string
    title: string
    backdrop_path: string
    overview: string
}

interface DetailInterface {
    backdrop_path: string
    poster_path: string
    original_title: string
    name: string
    overview: string
    release_date: string
    first_air_date: string
    imdb_id: string | number
    id: string | number
}

interface SearchInterface {
    id: number | string
    media_type: string
}

interface MoviesInterface {
    id: string | number
}

interface TitleInterface {
    title: string
}

export type {
    BannerInterface,
    ListMovieInterface,
    MovieInterface,
    DetailInterface,
    SearchInterface,
    MoviesInterface,
    TitleInterface,
}

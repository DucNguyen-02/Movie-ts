import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import movieApi from '../../apis/movieAPI'
import useFetch from '../../hooks/useFetch'
import useWindowSize from '../../hooks/useWindowSize'
import { ListMovieInterface } from '../../interfaces/interfaces'
import ListItem from '../ItemMovie/ItemMovie'
import './listMovie.scss'

const ListMovie = ({ type, title, fetchURL }: ListMovieInterface) => {
    const { data: movies }: any = useFetch({
        fetcher: movieApi.getMovieList,
        url: fetchURL,
    })

    const { width } = useWindowSize()

    const [slidePerView, setSlidePerView] = useState<number>((): number => {
        return width <= 739 ? 3 : width <= 1023 ? 6 : 8
    })

    useEffect(() => {
        const setSize = (): void => {
            if (width <= 739) {
                setSlidePerView(3)
            } else if (width <= 1023) {
                setSlidePerView(6)
            } else {
                setSlidePerView(8)
            }
        }

        window.addEventListener('resize', setSize)

        return () => window.removeEventListener('resize', setSize)
    }, [])

    return (
        <div className="list">
            <h2 className="list-title">{title}</h2>
            <Swiper
                navigation
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={slidePerView}
            >
                {movies?.results?.map((movie: any) => {
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

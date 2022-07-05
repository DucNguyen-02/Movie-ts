import { FaInfo, FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import movieApi from '../../apis/movieAPI'
import requests, { BASE_URL, URL } from '../../constants/request'
import useFetch from '../../hooks/useFetch'
import './banner.scss'

const Banner = () => {
    const { data: banners }: any = useFetch({
        fetcher: movieApi.getBanner,
        url: `${URL}${requests.fetchTrending}`,
    })

    const subDesc = (str: string, n: number): string => {
        return str?.length >= n ? `${str.substring(0, n)}...` : str
    }

    return (
        <Swiper
            modules={[Autoplay]}
            navigation
            autoplay={{ delay: 7000 }}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={1}
        >
            {banners?.results?.map((banner: any) => {
                return (
                    <SwiperSlide key={banner.id} className="banner">
                        <div
                            className="banner-background"
                            style={{
                                backgroundImage: `url(${BASE_URL}${banner?.backdrop_path})`,
                            }}
                        >
                            <div className="banner-content">
                                <h2 className="banner-title">
                                    {banner?.name ||
                                        banner?.original_name ||
                                        banner?.title}
                                </h2>
                                <div className="banner-btn">
                                    <Link to={`/detail/movie/${banner.id}`}>
                                        <button className="mbtn banner-btn-play">
                                            {' '}
                                            <FaPlay className="banner-icon" />{' '}
                                            Play
                                        </button>
                                    </Link>
                                    <Link to={`/detail/movie/${banner.id}`}>
                                        <button className="mbtn banner-btn-info">
                                            <FaInfo className="banner-icon" />
                                            More Info
                                        </button>
                                    </Link>
                                </div>
                                <p className="banner-desc">
                                    {subDesc(banner?.overview, 200)}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Banner

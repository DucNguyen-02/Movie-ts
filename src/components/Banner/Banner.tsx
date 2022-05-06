import React, { useEffect, useState } from 'react'
import { FaPlay, FaInfo } from 'react-icons/fa'
import requests, { BASE_URL, URL } from '../../constants/request'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import 'swiper/scss/autoplay'
import 'swiper/scss'
import './banner.scss'
import { BannerInterface } from '../../interfaces/interfaces'
import axios from 'axios'

const Banner = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [banners, setBanners] = useState<BannerInterface[]>()

    const fetchBanner = async (): Promise<void> => {
        const resp = await axios.get(`${URL}${requests.fetchTrending}`)
        setLoading(false)
        setBanners(resp.data.results)
    }

    const subDesc = (str: string, n: number): string => {
        return str?.length >= n ? `${str.substring(0, n)}...` : str
    }

    useEffect(() => {
        fetchBanner()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
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
            {banners?.map((banner) => {
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

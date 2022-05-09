import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RecentlyInterface } from '../../interfaces/interfaces'
import ListItem from '../ItemMovie/ItemMovie'

const Recently = ({ recently }: any) => {
    const [slidePerView, setSlidePerView] = useState<number>((): number => {
        return window.innerWidth <= 739 ? 3 : window.innerWidth <= 1023 ? 6 : 8
    })

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
    return (
        <div>
            <div className="list">
                <h2 className="list-title">Recently</h2>
                <Swiper
                    navigation
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={slidePerView}
                >
                    {recently.map((movie: RecentlyInterface) => {
                        return (
                            <SwiperSlide key={movie.id} className="row-item">
                                <Link
                                    to={`/detail/${movie.media_type}/${movie.id}`}
                                >
                                    <ListItem movie={movie} />
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Recently

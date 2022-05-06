import React from 'react'
import { BASE_URL } from '../../constants/request'
import './itemMovie.scss'

const ItemMovie = ({ movie }: any) => {
    const subTitle = (str: string, n: number) => {
        return str?.length >= n ? `${str.substring(0, n)}...` : str
    }
    return (
        <div className="list-item my-2">
            <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
            <h2 className="list-item-name">
                {subTitle(movie?.name || movie?.title, 25)}
            </h2>
        </div>
    )
}

export default ItemMovie

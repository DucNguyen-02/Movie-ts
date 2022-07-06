import { BASE_URL } from '../../constants/request'
import subDesc from '../../helper/limitString'
import './itemMovie.scss'

const ItemMovie = ({ movie }: any) => {
    return (
        <div className="list-item my-2">
            <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
            <h2 className="list-item-name">
                {subDesc(movie?.name || movie?.title, 25)}
            </h2>
        </div>
    )
}

export default ItemMovie

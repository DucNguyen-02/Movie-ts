import { URL } from '../constants/request'
import axiosClient from './axiosClient'

const movieApi = {
    getMovieList(fetchURL: string) {
        const url = `${URL}${fetchURL}`
        return axiosClient.get(url)
    },
    getMovieDetail(fetchURL: string) {
        return axiosClient.get(fetchURL)
    },
    getWatch(fetchURL: string) {},
    getBanner(fetchURL: string) {
        return axiosClient.get(fetchURL)
    },
}

export default movieApi

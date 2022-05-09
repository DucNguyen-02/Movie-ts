import React, { useMemo } from 'react'
import Banner from '../../components/Banner/Banner'
import ListMovie from '../../components/ListMovie/ListMovie'
import Recently from '../../components/Recently/Recently'
import requests from '../../constants/request'
import { RecentlyInterface } from '../../interfaces/interfaces'
import { getMovieFromLocal } from '../../ulti/localStorage'
import Title from '../../ulti/Title'

const Home = () => {
    const recently: RecentlyInterface = useMemo(getMovieFromLocal, [])
    return (
        <div className="home">
            <Title title={'Home'} />
            <Banner />
            {recently && <Recently recently={recently} />}
            <ListMovie
                type="tv"
                title="NETFLIX ORIGINALS"
                fetchURL={requests.fetchNetflixOriginals}
            />

            <ListMovie
                type="movie"
                title="TRENDING"
                fetchURL={requests.fetchTrending}
            />

            <ListMovie
                type="movie"
                title="Horror"
                fetchURL={requests.fetchHorrorMovies}
            />
        </div>
    )
}

export default Home

import React from 'react'
import Banner from '../../components/Banner/Banner'
import ListMovie from '../../components/ListMovie/ListMovie'
import requests from '../../constants/request'
import Title from '../../ulti/Title'

const Home = () => {
    return (
        <div className="home">
            <Title title={'Home'} />
            <Banner />
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

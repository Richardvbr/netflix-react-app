import React from 'react'
import './HomeScreen.css'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Row from '../Rows/Row'
import requests from '../../Requests.js'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Rows */}\
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocu} />

    </div>
  )
}

export default HomeScreen

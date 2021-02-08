import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import requests from '../../Requests'
import './Banner.css'
// import BgImage from '../../img/home_background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Banner() {
  const [movie, setMovie] = useState([]);

  // Async fetch from TMDB API that returns a random result for the banner
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }

    fetchData()
  }, []);

  /* Function that truncates text that's too long.
  Checks a string's length, if > n, then creates a new substring consisting
  of the original text minus the final character, replacing it with '...'
  If > n, then render original string */
  const truncateText = (string, n) => {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : string;
  }

  return (
    <header className='banner' style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>

      {/* Banner content */}
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className='banner__button'><FontAwesomeIcon icon={faPlay} className='button-icon' />Play</button>
          <button className='banner__button'><FontAwesomeIcon icon={faPlus} className='button-icon' />My List</button>
        </div>
        <h1 className="banner__description">
          {/* Truncate text function with a 150 character limit */}
          {truncateText(`${movie?.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header >
  )
}

export default Banner

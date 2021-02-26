import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../Axios'
import ScrollContainer from 'react-indiana-drag-scroll'

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  // 'w342' downloads the images at a maximum width of 342 pixels
  // correct path to corresponding image is added on line 39
  const baseUrl = 'https://image.tmdb.org/t/p/w342';

  // Get movie information (title and poster)
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>

      <ScrollContainer className='scroll-container'>
        {movies.map(movie => (
          // Only render posters if there is a poster or backdrop available, preventing empty results
          (isLargeRow && movie.poster_path ||
            !isLargeRow && movie.backdrop_path) && (
            <div>
              {/* Image thumbnails and link to trailer */}
              <a target="_blank" rel='noopener noreferrer' href={`https://youtube.com/results?search_query=${movie.title || movie.name || movie.original_name} trailer`}>
                <img
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  key={movie.id}
                  // Takes the baseUrl and (after fetchUrl) appends the correct path to download corresponding image
                  src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.poster_path}`}
                  alt={`${movie.title || movie.name || movie.original_name} poster`}
                />
              </a>
              {/* Movie names - currently hidden because posters already show the name */}
              {/* <p className="movie__title">{movie.title || movie.name || movie.original_name}</p> */}

            </div>
          )
        ))}
      </ScrollContainer>
    </div>
  )
}

export default Row

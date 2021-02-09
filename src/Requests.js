const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`,
  fetchAction: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocu: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`
}

export default requests;
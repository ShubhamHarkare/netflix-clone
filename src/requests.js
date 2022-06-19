/* eslint-disable no-template-curly-in-string */
const API = 'c0f3597874912e338b609d7cd06fba40';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_network=213`,
    fetchTopRated: `/movie/top_rated??api_key=${API}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentries: `discover/movie?api_key=${API}&with_genres=99`,
}

export default requests;
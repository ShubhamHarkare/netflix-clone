import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';

const baseURL = 'https://image.tmdb.org/t/p/original/'

function Row(props) {
    const [movies,setMovies] = useState([]);
    const [trailerURL,setTrailerurl] = useState("");
    useEffect(()=>{
      //run when row loads and dont run again
      async function fetchData() {
        const requests = await axios.get(props.fetchURL)
        console.log(requests);
        setMovies(requests.data.results);
        return requests; 
      }
      fetchData();
    }
    ,[props.fetchURL]);

    const opts={
      height:"390",
      width: "100%",
      autoplay: '1'
    }

    function handleClick(movie) {
      if (trailerURL) {
        setTrailerurl("");
      }else{
        movieTrailer(movie?.name || "")
        .then(url =>{
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerurl(urlParams.get('v'));
        }).catch(error=>console.log(error))
      }
    }
  console.log(movies);
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='row__posters'>
          {movies.map(movie =>{
            return(

              <img onClick={()=> handleClick(movie)} 
              key={movie.id} className={`row__poster ${props.isLargeRow && 'row__posterLarge'}`} src={`${baseURL}${props.isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}/>
            
          )})}
        </div>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}

    </div>
  )
}

export default Row
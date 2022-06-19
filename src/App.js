import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    
    <Row isLargeRow title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals}/>
    <Row title = 'Trending Now' fetchURL={requests.fetchTrending}/>
    <Row title = 'Top Rated' fetchURL={requests.fetchTrending}/>
    <Row title = 'Action Movies' fetchURL={requests.fetchActionMovies}/>
    <Row title = 'Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
    <Row title = 'Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
    <Row title = 'Romance Movies' fetchURL={requests.fetchHorrorMovies}/>
    <Row title = 'Documetries' fetchURL={requests.fetchDocumentries}/>
    
    </div>
  );
}

export default App;

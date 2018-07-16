import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title : "matirx",
    poster : "https://static.vrv.co/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpg"
  },
  {
    title : "full metal",
    poster : "https://static.vrv.co/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0662921aa3b81ff85737ddeb56deefab.jpg"
    // poster : "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg"
  },
  {
    title : "oldboy",
    poster : "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/11/oldboy-still.jpg"
    // poster : "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/11/oldboy-still.jpg"
  },
  {
    title : "dokkk",
    poster : "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/11/oldboy-still.jpg"
    // poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJ2GOG186UpupBlpy_66CIVmxLeWRrOan2o5xAGWrWmqvTqYz"
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map( movie => {
           return < Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;

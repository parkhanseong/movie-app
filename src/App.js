import React, { Component } from 'react';
// import logo from './logo.svg';
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
  },
  {
    title : "oldboy",
    poster : "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/11/oldboy-still.jpg"
  },
  {
    title : "dokkk",
    poster : "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2013/11/oldboy-still.jpg"
  }
]


class App extends Component {
  
  state = {
    greeting: "Hello!"
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting : 'Hello again!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map( (movie, index) => {
           return < Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  
  state = {
  }
  
  componentDidMount(){
    //기존 function 선언
    // setTimeout(function(){
      //   console.log("");
      // }, 1000}
      
      //최신 자바스크립트 () => {}
      setTimeout(() => {
        this.setState({
            movies : [
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
              },
              {
                title:"Transporting",
                poster : "https://cdn2.i-scmp.com/sites/default/files/styles/landscape/public/images/methode/2017/02/16/36445594-edd4-11e6-8960-2c6b8565de23_1280x720.jpg?itok=N9YiRUyJ"
              }
            ]
      })
    }, 5000)
  }
  
  _renderMovies = () => {
      const movies = this.state.movies.map( (movie, index) => {
         return < Movie title={movie.title} poster={movie.poster} key={index}/>
      })
      return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."} 
      </div>
    );
  }
}

export default App;

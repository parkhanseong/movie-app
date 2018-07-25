import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';

// class Movie extends Component{

//     static propTypes = {
//         title : propTypes.string.isRequired,
//         poster : propTypes.string.isRequired
//     }

//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>     
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
    
//     static propTypes ={
//         poster : propTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} alt="Movie Poster"/>
//         )
//     }
// }

//dump component
function Movie({poster, title, genres, synopsis}){
    
    //console.log(">>>> genres :" + genres);
    
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>     
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>    
        </div>
    )
}

Movie.prototype = {
    poster : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    genres : propTypes.string.isRequired,
    synopsis : propTypes.string.isRequired
}
MoviePoster.propTypes = {
     poster : propTypes.string.isRequired,
     alt : propTypes.string.isRequired
}
MovieGenre.propTypes = {
     genre : propTypes.string.isRequired
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return  (
        <span className="Movie_genre">{genre} </span>
    )
}


export default Movie
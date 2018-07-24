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
function Movie({poster, title}){
    return (
        <div className="Movie">
            <div className="Movie_Clumns">
                <MoviePoster poster={poster}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>     
                <div className="Movie_Genres">
                    </div>
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

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

function MovieGenre(){
    return  (
        <span className="Movie_genre"></span>
    )
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired
}

export default Movie
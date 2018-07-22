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
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>     
        </div>
    )
}

Movie.prototype = {
    poster : propTypes.string.isRequired,
    title : propTypes.string.isRequired
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired
}

export default Movie
import React from 'react';
import './Movie.css';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css'

//dump component
function Movie({poster, title, genres, synopsis}){
    
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
                <div className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />   
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
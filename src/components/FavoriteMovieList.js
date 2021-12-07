import React from 'react';
import { removeFavorite } from '../actions/favoritesActions';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props;
    console.log(props)

    const handleFavorites = (id) => {
        removeFavorite(id);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => handleFavorites(movie.id)}><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites
    }
}


export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);
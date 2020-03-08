import React, { Component } from 'react';

import axios from '../../../../axios-tmdb';

import { TMDB_API_KEY_V3 } from "../../../../token";
import Classes from './Results.module.css';

class Results extends Component {
  state = {

  };

  addMovieToList = (id) => {
    if (!this.isMovieAlreadyAdded(id)) {
      axios.post(`/list/5309/item_status?api_key=${TMDB_API_KEY_V3}`)
    }
  };

  isMovieAlreadyAdded = (id) => {
    axios.get(`/list/5309/item_status?api_key=${TMDB_API_KEY_V3}&movie_id=${id}`)
      .then(response => response.data.item_present);
  };

  render() {
    const list = this.props.movies.map(movie => {
      const path = movie.poster_path !== null ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` : '/no-img.png';
      const overview = movie.overview.length > 400 ? `${movie.overview.substring(0, 400)}...` : movie.overview;

      return <div className={Classes.ResultRow} key={movie.id}>
        <h5 className={Classes.Title}>{movie.title}</h5>
        <div className={Classes.ImgContainer}>
          <img src={path} alt=""/>
        </div>
        <div className={Classes.Info}>
          <p>{overview}</p>
          <div className="Actions">
            <button onClick={() => this.addMovieToList(movie.id)}>+ Add</button>
          </div>
        </div>
      </div>
    });

    return (
      <div className={ Classes.Results }>{ list }</div>
    );
  }
}

export default Results;

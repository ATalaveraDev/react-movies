import React from 'react';

import Movie from '../Movie/Movie';
import Classes from './List.module.css';

const list = (props) => {
    const movies = props.movies.map(movie => <Movie key={ movie.id } className={ Classes.Movie } title={ movie.title }/>);

    return (<div className={ Classes.List }>{movies}</div>);
};

export default list;

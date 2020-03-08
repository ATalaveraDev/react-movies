import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import ListPage from './ListPage/ListPage';
import SearchPage from './SearchPage/SearchPage';
import Classes from './MovieListMaker.module.css';

class MoviesListMaker extends Component {
    render() {
        return (
            <div className={ Classes.MovieListMaker }>
                <Route path="/" component={ ListPage }></Route>
                <Route path="/search" exact component={ SearchPage }></Route>
            </div>
        );
    }
}

export default MoviesListMaker;

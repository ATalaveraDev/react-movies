import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import List from './List/List';
import Search from './Search/Search';
import Classes from './MovieListMaker.module.css';

class MoviesListMaker extends Component {
    render() {
        return (
            <div className={ Classes.MovieListMaker }>
                <Route path="/" exact component={ List }></Route>
                <Route path="/search" exact component={ Search }></Route>
            </div>
        );
    }
}

export default MoviesListMaker;

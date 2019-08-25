import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import List from './List/List';
import Search from './Search/Search';

class MoviesListMaker extends Component {
    render() {
        return (
            <Aux>
                <Route path="/" exact component={ List }></Route>
                <Route path="/search" exact component={ Search }></Route>
            </Aux>
        );
    }
}

export default MoviesListMaker;

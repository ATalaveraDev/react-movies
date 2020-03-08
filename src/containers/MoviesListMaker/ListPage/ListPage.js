import React, { Component } from 'react';

import List from '../../../components/List/List';
import Filters from '../../../containers/MoviesListMaker/ListPage/Filters/Filters';
import Classes from './ListPage.module.css';

class ListPage extends Component {
    state = {
        movies: [
            {
                id: '1',
                title: 'Terminator'
            },
            {
                id: '2',
                title: 'Ghost in the shell'
            },
            {
                id: '3',
                title: 'Patlabor'
            },
            {
                id: '4',
                title: 'Patlabor'
            },
            {
                id: '5',
                title: 'Patlabor'
            },
            {
                id: '6',
                title: 'Patlabor'
            },
            {
                id: '7',
                title: 'Patlabor'
            },
            {
                id: '8',
                title: 'Patlabor'
            },
            {
                id: '9',
                title: 'Patlabor'
            },
            {
                id: '10',
                title: 'Patlabor'
            }
        ]
    };

    render() {
        return (
            <div className={ Classes.ListPage }>
                <Filters></Filters>
                <List movies={ this.state.movies } />
            </div>
        );
    }
}

export default ListPage;

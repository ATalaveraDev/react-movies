import React, { Component } from 'react';

import Movie from '../../../components/Movie/Movie';
import Classes from './List.module.css';

class List extends Component {
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
        const list = this.state.movies.map(movie => <Movie key={ movie.id } className={ Classes.Movie } title={ movie.title }/>);

        return (
            <div className={ Classes.List }>{ list }</div>
        );
    }
}

export default List;

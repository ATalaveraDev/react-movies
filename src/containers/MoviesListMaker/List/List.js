import React, { Component } from 'react';

import Movie from '../../../components/Movie/Movie';

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
            }
        ]
    };

    render() {
        const list = this.state.movies.map(movie => <Movie key={ movie.id } title={ movie.title }/>);

        return (
            <div>{ list }</div>
        );
    }
}

export default List;

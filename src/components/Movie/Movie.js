import React, { Component } from 'react';

import Classes from './Movie.module.css';

class Movie extends Component {
    classes = [this.props.className, Classes.Movie].join(' ');

    render() {
        return (
            <div className={this.classes}>
                <p>{ this.props.title }</p>
            </div>
        );
    }
}

export default Movie;

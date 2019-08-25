import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <header className={ classes.Header }>
                    <ul>
                        <li><Link to="/">LISTS</Link></li>
                        <li><Link to="/search">SEARCH</Link></li>
                    </ul>
                </header>
                <main>
                    { this.props.children }
                </main>
            </Aux>
        );
    }
}

export default Layout;

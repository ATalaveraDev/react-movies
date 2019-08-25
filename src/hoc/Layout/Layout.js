import React from 'react';

import { Link } from 'react-router-dom';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <header className={ classes.Header }>
            <ul>
                <li><Link to="/">LISTS</Link></li>
                <li><Link to="/search">SEARCH</Link></li>
            </ul>
        </header>
        <main>
            { props.children }
        </main>
    </Aux>
);

export default layout;

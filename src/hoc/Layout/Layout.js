import React, { Component } from 'react';
import Aux from "../Aux/Aux";
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <header className={ classes.Header }>
                    <ul>
                        <li>LISTS</li>
                        <li>SEARCH</li>
                    </ul>
                </header>
                <main></main>
            </Aux>
        );
    }
}

export default Layout;

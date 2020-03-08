import React from 'react';

import Classes from './Filters.module.css';
import Icon from '../../../../eye-solid.svg';

const filters = (props) => {
    const color = {color: '#cccccc'};
    return (
        <div>
            <svg style={color} src={Icon} width="25" height="25"></svg>
            <input className={ Classes.TextFilter } type="text"/>
        </div>
    );
};

export default filters;

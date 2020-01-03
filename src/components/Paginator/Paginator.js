import React from 'react';

import Simple from './Simple/Simple';
import Complex from './Complex/Complex';

import Classes from './Paginator.module.css';

const paginator = (props) => {
  const paginator = props.totalPages > 10 ? <Complex pages={ props.totalPages } goToPage={ props.goToPageHandler } activePage={ props.activePage } /> : <Simple pages={ props.totalPages } goToPage={ props.goToPageHandler } activePage={ props.activePage } />;

  return (
    <div className={ Classes.Paginator }>
      { paginator }
    </div>
  );
};

export default paginator;

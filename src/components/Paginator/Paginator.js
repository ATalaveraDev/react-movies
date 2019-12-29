import React from 'react';

import Simple from './Simple/Simple';

import Classes from './Paginator.module.css';

const paginator = (props) => {
  // let paginator;

  // paginator = props.totalPages > 10 ? <Complex pages={ props.totalPages } /> : <Simple pages={ props.totalPages } />;
  // paginator = <Simple pages={ props.totalPages } />;

  return (
    <div className={ Classes.Paginator }>
      <Simple pages={ props.totalPages } />
    </div>
  );
};

export default paginator;

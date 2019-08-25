import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import MoviesListMaker from './containers/MoviesListMaker/MoviesListMaker';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Layout>
                <MoviesListMaker />
            </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;

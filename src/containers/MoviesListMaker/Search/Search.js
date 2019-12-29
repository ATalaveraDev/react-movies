import React, { Component } from 'react';

import axios from "../../../axios-tmdb";

import Searcher from "../../../components/Searcher/Searcher";
import Results from "../Search/Results/Results";
import Aux from "../../../hoc/Aux/Aux";
import Paginator from "../../../components/Paginator/Paginator";
import {TMDB_API_KEY_V3} from "../../../token";

class Search extends Component {
  state = {
    results: [],
    totalPages: 0
  };

  performSearch = (event) => {
    axios.get(`/search/movie?api_key=${TMDB_API_KEY_V3}&query=${event.target.value}`)
      .then((response) => {
        this.setState({ results: response.data.results, totalPages: response.data.total_pages });
        console.log(response);
      })
      .catch(() => { });
  };

  render() {
      return (
        <Aux>
          <Searcher keyUpHandler={ this.performSearch }></Searcher>
          <Results movies={ this.state.results }></Results>
          <Paginator totalPages={ this.state.totalPages }></Paginator>
        </Aux>
      );
  }
}

export default Search;

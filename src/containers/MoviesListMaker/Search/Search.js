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
    totalPages: 0,
    text: '',
    page: 1
  };

  performSearch = (event) => {
    this.setState({ text: event.target.value });
    axios.get(`/search/movie?api_key=${TMDB_API_KEY_V3}&query=${event.target.value}`)
      .then((response) => {
        this.setState({ results: response.data.results, totalPages: response.data.total_pages, page: response.data.page });
        console.log('r', response);
      })
      .catch(() => { });
  };

  goToPage = (page) => {
    axios.get(`/search/movie?api_key=${TMDB_API_KEY_V3}&query=${this.state.text}&page=${page}`)
      .then((response) => {
        this.setState({ results: response.data.results, totalPages: response.data.total_pages, page: page });
      })
      .catch(() => { });
  };

  render() {
      return (
        <Aux>
          <Searcher keyUpHandler={ this.performSearch }></Searcher>
          <Results movies={ this.state.results }></Results>
          <Paginator totalPages={ this.state.totalPages } goToPageHandler={ this.goToPage } activePage={ this.state.page }></Paginator>
        </Aux>
      );
  }
}

export default Search;

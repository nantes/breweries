import React, { Component } from 'react';

import BreweryContainer from './containers/breweryContainer'
import Search from './components/search'

class App extends Component {
  render() {
    return (
      <div>
        <Search></Search>
        <Search withSagas="true" ></Search>
        <BreweryContainer />
      </div>
    );
  }
}

export default App;

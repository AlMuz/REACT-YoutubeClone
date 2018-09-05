import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyA5eID-0ta5A4_lNz8dm4y4C1hcp8jlQZ4';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));

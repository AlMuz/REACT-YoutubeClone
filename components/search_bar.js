import React, { Component }  from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
  }

  render() {
    return(
      <nav className="navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">AlexReact</a>

        <div className="search-bar">
          <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.props.onSearchTermChange(event.target.value)
                  }
                }}
          />
        </div>
      </nav>
    )
  }
}

export default SearchBar;

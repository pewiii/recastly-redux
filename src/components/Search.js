import React from 'react';
import { debounce } from 'lodash';


class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.debounce = debounce((e) => { this.props.handleSearchInputChange(e); }, 500);
  }

  handleInputChange(e) {
    this.debounce(e);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={(e)=> this.handleInputChange(e.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';

export default class SearchPanel extends Component {
  state = {
    text: '',
  }

  onChange = ({ target }) => {
    const { onSearch } = this.props;
    this.setState({ text: target.value });
    onSearch(target.value);
  }

  render() {
    
    return (
      <input 
        type="text"
        className="form-control search-input"
        onChange={this.onChange}
        placeholder="type to search"
        value={this.state.value} />
    );
  }
};

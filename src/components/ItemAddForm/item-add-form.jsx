import React, { Component } from 'react';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }

  onChange = ({ target }) => {
    this.setState({label: target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addItem } = this.props;
    const { label } = this.state;
    addItem(label);
    this.setState({label: ''});
  }


  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onChange}
          placeholder="What needs to be done"
          value={this.state.label} />
        <button className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    )
  }
};
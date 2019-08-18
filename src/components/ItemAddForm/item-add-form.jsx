import React, { Component } from 'react';

export default class ItemAddForm extends Component {
  render() {
    const { addItem } = this.props;
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary" onClick={() => addItem('Drink tea')}>Add Item</button>
      </div>
    )
  }
};
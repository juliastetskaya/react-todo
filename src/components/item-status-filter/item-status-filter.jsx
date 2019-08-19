import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  render() {
    const { onFilter, filter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const activeClass = filter === name ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
                className={`btn ${activeClass}`}
                key={name}
                onClick={() => onFilter(name)}>{label}</button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};

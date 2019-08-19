import React, { Component } from 'react';
import cn from 'classnames';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  render() {
    const { onFilter, filter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const buttonClasses = cn({
        btn: true,
        'btn-info': filter === name,
        'btn-outline-secondary': filter !== name,
      });

      return (
        <button
          type="button"
          className={buttonClasses}
          key={name}
          onClick={() => onFilter(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

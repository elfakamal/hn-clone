import React from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES } from '../constants';
import Button from './Button';

const Filters = ({ onFilterClick, disabled }) => (
  <div className="hackernews-app-body-filters">
    {CATEGORIES.map(category => (
      <Button
        disabled={disabled}
        key={category.name}
        onClick={() => onFilterClick(category.endpoint)}
      >
        {category.name}
      </Button>
    ))}
  </div>
);

Filters.propTypes = {
  onFilterClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Filters;

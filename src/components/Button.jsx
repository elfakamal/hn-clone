import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(['danger', 'primary', 'warning']),
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    noUpper: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.shape(),
    text: PropTypes.string,
  }

  render() {
    const {
      children,
      color,
      disabled,
      noUpper,
      onClick,
      style,
      text,
      type,
      className: additionalClassName,
    } = this.props;

    const displayedInner = text || children;

    return (
      <button
        className={classNames('common-button', color, additionalClassName, {
          'uppercase': !noUpper,
        })}
        disabled={disabled}
        onClick={onClick}
        style={style}
        type={type}
      >
        {displayedInner && ' '}
        {displayedInner}
      </button>
    );
  }
}

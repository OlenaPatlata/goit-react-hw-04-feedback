import React from 'react';
import s from './Buttons.module.css';
import PropTypes from 'prop-types';

const Buttons = ({ names, onIncrement }) => {
  return (
    <div className={s.wrapper}>
      {names.map(name => (
        <button
          name={name}
          key={name}
          id={name}
          type="button"
          className={s.btn}
          onClick={onIncrement}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
Buttons.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onIncrement: PropTypes.func.isRequired,
};
export default Buttons;

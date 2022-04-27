import React from 'react';
import Item from 'components/Item/Item';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ statisticArray }) => {
  return (
    <>
      {statisticArray[3][1] > 0 ? (
        <ul>
          {statisticArray.map(array => {
            return <Item key={array[0]} array={array} />;
          })}
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  statisticArray: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  total: PropTypes.number,
};

export default Statistics;

import React from 'react';
import PropTypes from 'prop-types';

const Item = props => (
  <div style={{ display: 'flex' }}>
    <img src={props.picture} alt="" />
    <p>{props.title}</p>
  </div>
);

Item.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
};

export default Item;

import React from 'react';
import PropTypes from 'prop-types';

const Hit = props => (
  <div style={{ display: 'flex' }}>
    <img src={props.picture} alt="" />
    <p>{props.title}</p>
  </div>
);

Hit.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
};

export default Hit;

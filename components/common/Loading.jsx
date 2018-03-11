import React from 'react';

/* eslint react/prop-types: 0 */
export default props => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  }
  return null;
};

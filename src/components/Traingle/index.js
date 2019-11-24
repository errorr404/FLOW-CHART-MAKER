import React from 'react';
import './traingle.scss';
const Triangle = (props) => {
  const { onStart, nodeDetails } = props;
  console.log(nodeDetails);
  return (
    <div
      className="triangle"
      onMouseDown={onStart}
      onTouchStart={onStart}
      style={{ top: nodeDetails.top, left: nodeDetails.left }}
      id={nodeDetails.id}
    >
      <span className="triangle__text"> {nodeDetails.textValue}</span>
    </div>
  );
};
export default Triangle;

import React from 'react';
import './square.scss';
const Square = (props) => {
  const { onStart, nodeDetails } = props;
  console.log(nodeDetails);
  return (
    <div
      className="square"
      onMouseDown={onStart}
      onTouchStart={onStart}
      style={{ top: nodeDetails.top, left: nodeDetails.left }}
      id={nodeDetails.id}
    >
      <span className="square__text"> {nodeDetails.textValue}</span>
    </div>
  );
};
export default Square;

import React from 'react';
import './hLine.scss';
const HLine = (props) => {
  const { onStart, nodeDetails } = props;
  console.log(nodeDetails);
  return (
    <div
      className="hLine"
      onMouseDown={onStart}
      onTouchStart={onStart}
      style={{ top: nodeDetails.top, left: nodeDetails.left }}
      id={nodeDetails.id}
    >
      <span className="text"> {nodeDetails.textValue}</span>
    </div>
  );
};
export default HLine;

import React from 'react';
import './vLine.scss';
const VLine = (props) => {
  const { onStart, nodeDetails } = props;
  console.log(nodeDetails);
  return (
    <div
      className="vLine"
      onMouseDown={onStart}
      onTouchStart={onStart}
      style={{ top: nodeDetails.top, left: nodeDetails.left }}
      id={nodeDetails.id}
    >
      <span className="text"> {nodeDetails.textValue}</span>
    </div>
  );
};
export default VLine;

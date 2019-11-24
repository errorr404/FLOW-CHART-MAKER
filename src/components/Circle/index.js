import React, { useState } from 'react';
import './circle.scss';
const Circle = (props) => {
  const { onStart, nodeDetails, selectedNode } = props;
  return (
    <div
      className={selectedNode ? 'circle active' : 'circle'}
      onMouseDown={onStart}
      onTouchStart={onStart}
      style={{ top: nodeDetails.top, left: nodeDetails.left }}
      id={nodeDetails.id}
    >
      {nodeDetails.textValue}
    </div>
  );
};
export default Circle;

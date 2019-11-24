import React from 'react';
import Circle from '../Circle';
import Square from '../Square';
import Triangle from '../Traingle';
import HLine from '../HLine';
import VLine from '../VLine';
const Elements = (props) => {
    const {type, onStart, nodeDetails} = props;
    console.log('in elements',props);
    console.log(nodeDetails);
  return (
    <React.Fragment>
    {
        type === 'circle' && <Circle onStart={onStart} nodeDetails={nodeDetails} />
    }
     {
        type === 'square' && <Square onStart={onStart} nodeDetails={nodeDetails} />
    }
    {
        type === 'triangle' && <Triangle onStart={onStart} nodeDetails={nodeDetails} />
    }
    {
        type === 'hLine' && <HLine onStart={onStart} nodeDetails={nodeDetails} />
    }
    {
        type === 'vLine' && <VLine onStart={onStart} nodeDetails={nodeDetails} />
    }
    </React.Fragment>
  );
};
export default Elements;

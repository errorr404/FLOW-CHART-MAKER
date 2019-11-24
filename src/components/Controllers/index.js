import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteNode, updateNodeText } from '../../actions';
import './controller.scss';

const Controllers = (props) => {
  const [textValue, setTextValue] = useState('');
  const deleteNodeElement = (e) => {
    console.log('in controllers');
    e.preventDefault();
    props.deleteNode(props.id);
  };
  const submitText = (e) => {
    e.preventDefault();
    if (props.id && textValue.length > 0)
      props.updateNodeText(props.id, textValue);
    setTextValue('');
  };
  return (
    <div className="controllers">
      <span>{props.id && `You have selected ${props.id} node`}</span>
      <div className="controllers__inputSection">
        <textarea
          placeholder="click on item for add value"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button onClick={submitText}>Save Element Value</button>
      </div>
      <button onClick={deleteNodeElement}>Delete</button>
      <button onClick={() => props.saveChart()}>Save flow Diagram</button>
    </div>
  );
};
export default connect(null, { deleteNode, updateNodeText })(Controllers);

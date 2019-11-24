import {
  ADD_NODE,
  CHANGE_OFFSET,
  DELETE_NODE,
  CHANGE_TEXT_VALUE,
  ADD_ALL_NODES
} from '../constant';

export const addNode = (type) => {
  console.log(type);
  const action = {
    type: ADD_NODE,
    payload: {
      type,
      top: '150px',
      left: '150px',
      textValue: '',
      id: Math.floor(Math.random() * 1000000) + 1
    }
  };
  return action;
};
export const addAllNodes = (nodes) => {
  const action = {
    type: ADD_ALL_NODES,
    payload: {
      nodes
    }
  };
  return action;
};

export const deleteNode = (id) => {
  const action = {
    type: DELETE_NODE,
    payload: {
      id
    }
  };
  return action;
};

export const changeOffset = (top, left, id) => {
  console.log('in changeoffset');
  const action = {
    type: CHANGE_OFFSET,
    payload: {
      top,
      left,
      id
    }
  };
  return action;
};

export const updateNodeText = (id, text) => {
  const action = {
    type: CHANGE_TEXT_VALUE,
    payload: {
      text,
      id
    }
  };
  return action;
};

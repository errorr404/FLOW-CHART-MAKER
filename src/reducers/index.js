import {
  ADD_NODE,
  CHANGE_OFFSET,
  DELETE_NODE,
  CHANGE_TEXT_VALUE,
  ADD_ALL_NODES
} from '../constant';

const nodeReducer = (
  state = {
    nodes: []
  },
  action
) => {
  switch (action.type) {
    case ADD_NODE:
      const tempNodes = [...state.nodes, action.payload];
      return { ...state, nodes: [...tempNodes] };
    case ADD_ALL_NODES:
      return { ...state, nodes: [...action.payload.nodes] };
    case CHANGE_OFFSET:
      console.log(action.payload);
      const nodesCopy = [...state.nodes];
      for (let i = 0; i < nodesCopy.length; i++) {
        if (nodesCopy[i].id === parseInt(action.payload.id)) {
          console.log('i m here insid3');
          nodesCopy[i].top = action.payload.top;
          nodesCopy[i].left = action.payload.left;
          break;
        }
      }
      return { ...state, nodes: [...nodesCopy] };
    case DELETE_NODE:
      const tempArray = state.nodes.filter(
        (node) => node.id !== parseInt(action.payload.id)
      );
      return { ...state, nodes: tempArray };
    case CHANGE_TEXT_VALUE:
      const nodesCopyArr = [...state.nodes];
      for (let i = 0; i < nodesCopyArr.length; i++) {
        if (nodesCopyArr[i].id === parseInt(action.payload.id)) {
          nodesCopyArr[i].textValue = action.payload.text;
          break;
        }
      }
      return { ...state, nodes: [...nodesCopyArr] };
    default:
      return state;
  }
};
export default nodeReducer;

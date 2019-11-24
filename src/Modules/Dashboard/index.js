import React from 'react';
import { connect } from 'react-redux';
import { addNode, changeOffset, addAllNodes } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import debounce from 'debounce';
import Elements from '../../components/Elements';
import Controllers from '../../components/Controllers';
import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    // Initial props:
    super(props);
    this.state = {
      currentSeletedNode: null
    };

    // Attach listeners:
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);

    // Instance variables:
    this.element = null;
    this.distX = 0;
    this.distY = 0;
  }

  onStart(e) {
    console.log('start');
    e.preventDefault();
    this.element = e.target;
    this.setState({ currentSeletedNode: this.element.id });
    // console.log(e.target);
    let evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
    this.distX = Math.abs(this.element.offsetLeft - evt.clientX);
    this.distY = Math.abs(this.element.offsetTop - evt.clientY);
    console.log(this.distX, this.distY);
    this.element.style.pointerEvents = 'none';
  }

  onEnd(e) {
    // console.log('end');
    if (this.element) this.element.style.pointerEvents = 'initial';
  }

  onMove(e) {
    console.log('moving');
    if (this.element) {
      if (this.element.style.pointerEvents === 'none') {
        let evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
        this.element.style.left = `${evt.clientX - this.distX}px`;
        this.element.style.top = `${evt.clientY - this.distY}px`;
        this.props.changeOffset(
          this.element.style.top,
          this.element.style.left,
          this.element.id
        );
      }
    }
  }
  addElement = (type) => {
    this.props.addNode(type);
  };
  componentDidMount() {
    const chart = localStorage.getItem('flow-chart');
    if(chart) this.props.addAllNodes(JSON.parse(chart));
  }

  saveToLocalStorage = () => {
    localStorage.setItem('flow-chart', JSON.stringify(this.props.nodes));
  };

  render() {
    const { nodes } = this.props;
    const { currentSeletedNode } = this.state;
    const buttons = [
      { type: 'circle', icon: 'circle' },
      { type: 'square', icon: 'square' },
      { type: 'triangle', icon: 'caret-up' },
      { type: 'hLine', icon: 'arrow-right' },
      { type: 'vLine', icon: 'arrow-down' }
    ];
    console.log('here is node', nodes, currentSeletedNode);
    return (
      <div className="dashboard">
        <div className="dashboard__buttonSection">
          <span className="dashboard__buttonSection__text">Add Elements</span>
          <div className="dashboard__buttonSection__container">
            {buttons.map((button) => (
              <button
                className="dashboard__buttonSection__container__button"
                onClick={() => this.addElement(button.type)}
              >
                <FontAwesomeIcon
                  icon={button.icon}
                  className="dashboard__buttonSection__container__button__icon"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="dashboard__controllers">
          <Controllers
            id={currentSeletedNode}
            saveChart={this.saveToLocalStorage}
          />
        </div>
        <div
          style={{ height: '100vh' }}
          onMouseMove={(e) => debounce(this.onMove(e), 1000)}
          onTouchMove={(e) => debounce(this.onMove(e), 1000)}
          onMouseUp={this.onEnd}
          onTouchEnd={this.onEnd}
        >
          {nodes.map((node) => (
            <Elements
              type={node.type}
              onStart={this.onStart}
              nodeDetails={node}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { nodes: state.nodes };
};
export default connect(mapStateToProps, { addNode, changeOffset, addAllNodes })(
  Dashboard
);

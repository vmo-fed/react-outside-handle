import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

class ReactOutsideHandle extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', (e) => {
      if (this.myRef.current && !this.myRef.current.contains(e.target)) {
        this.props.handleClick();
      }
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{display: 'inline-block'}} ref={this.myRef}>{children}</div>
    )
  }
}

ReactOutsideHandle.propTypes = propTypes;

export default ReactOutsideHandle;

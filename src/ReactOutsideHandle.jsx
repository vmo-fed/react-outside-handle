import React, { Component } from 'react';

class ReactOutsideHandle extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', (e) => {
      if (!this.myRef.current.contains(e.target)) {
        this.props.handleClick();
      }
    });
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{position: 'absolute'}} ref={this.myRef}>{children}</div>
    )
  }
}

export default ReactOutsideHandle;

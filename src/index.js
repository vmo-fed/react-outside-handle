import React from "react";
import ReactDOM from "react-dom";
import ReactOutsideHandle  from './ReactOutsideHandle';

class HelloMessage extends React.Component {
  render() {
    return (
      <ReactOutsideHandle handleClick={() => alert(123)}>
        <div style={{width: '100px', height: '100px', backgroundColor: 'red', color: '#fff'}}>点我没反应</div>
      </ReactOutsideHandle>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);

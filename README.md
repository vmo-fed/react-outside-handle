# react-outside-handle

### 安装

```shell
npm i react-outside-handle -S
```

### 使用

```jsx
import ReactOutsideHandle from 'react-outside-handle';

class App extends React.Component {
  render() {
    return (
      <ReactOutsideHandle handleClick={() => alert(123)}>
        <div>点我没反应</div>
      </ReactOutsideHandle>
    );
  }
}
```

[在线DEMO](#https://codesandbox.io/s/9o0mm2476o)


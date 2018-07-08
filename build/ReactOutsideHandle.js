'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  handleClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired
};

var ReactOutsideHandle = function (_Component) {
  _inherits(ReactOutsideHandle, _Component);

  function ReactOutsideHandle(props) {
    _classCallCheck(this, ReactOutsideHandle);

    var _this = _possibleConstructorReturn(this, (ReactOutsideHandle.__proto__ || Object.getPrototypeOf(ReactOutsideHandle)).call(this, props));

    _this.myRef = _react2.default.createRef();
    return _this;
  }

  _createClass(ReactOutsideHandle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener('click', function (e) {
        if (_this2.myRef.current && !_this2.myRef.current.contains(e.target)) {
          _this2.props.handleClick();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' }, ref: this.myRef },
        children
      );
    }
  }]);

  return ReactOutsideHandle;
}(_react.Component);

ReactOutsideHandle.propTypes = propTypes;

exports.default = ReactOutsideHandle;

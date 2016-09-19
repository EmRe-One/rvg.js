'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');
var React = require('react');

var Text = function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var fill = _props.fill;
      var fontSize = _props.fontSize;
      var fontFamily = _props.fontFamily;


      var text = this.props.children;

      var lineHeight = this.props.lineHeight || fontSize;

      if (util.isArray(text)) {
        text = text.map(function (string, index) {
          return React.createElement(
            'tspan',
            { key: index, x: x, y: lineHeight * index + y },
            string
          );
        });
      }

      return React.createElement(
        'text',
        { x: x, y: y, fill: fill, textAnchor: 'start', fontSize: fontSize, fontFamily: fontFamily },
        text
      );
    }
  }]);

  return Text;
}(React.Component);

// Prop types


Text.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  fontSize: React.PropTypes.number,
  fontFamily: React.PropTypes.string
};

Text.defaultProps = {
  x: 0,
  y: 0,
  fill: '#000',
  fontSize: 20,
  fontFamily: 'serif'
};

module.exports = Text;
//# sourceMappingURL=text.js.map
System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req0 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req1 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req2 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req3 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react2) {
      _req4 = _react2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _react = _interopRequireDefault(require("react"));

        var Star = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(Star, _React$Component);

          var _super = (0, _createSuper2.default)(Star);

          function Star() {
            var _this;

            (0, _classCallCheck2.default)(this, Star);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));

            _this.onHover = function (e) {
              var _this$props = _this.props,
                  onHover = _this$props.onHover,
                  index = _this$props.index;
              onHover(e, index);
            };

            _this.onClick = function (e) {
              var _this$props2 = _this.props,
                  onClick = _this$props2.onClick,
                  index = _this$props2.index;
              onClick(e, index);
            };

            _this.onKeyDown = function (e) {
              var _this$props3 = _this.props,
                  onClick = _this$props3.onClick,
                  index = _this$props3.index;

              if (e.keyCode === 13) {
                onClick(e, index);
              }
            };

            return _this;
          }

          (0, _createClass2.default)(Star, [{
            key: "getClassName",
            value: function getClassName() {
              var _this$props4 = this.props,
                  prefixCls = _this$props4.prefixCls,
                  index = _this$props4.index,
                  value = _this$props4.value,
                  allowHalf = _this$props4.allowHalf,
                  focused = _this$props4.focused;
              var starValue = index + 1;
              var className = prefixCls;

              if (value === 0 && index === 0 && focused) {
                className += " ".concat(prefixCls, "-focused");
              } else if (allowHalf && value + 0.5 >= starValue && value < starValue) {
                className += " ".concat(prefixCls, "-half ").concat(prefixCls, "-active");

                if (focused) {
                  className += " ".concat(prefixCls, "-focused");
                }
              } else {
                className += starValue <= value ? " ".concat(prefixCls, "-full") : " ".concat(prefixCls, "-zero");

                if (starValue === value && focused) {
                  className += " ".concat(prefixCls, "-focused");
                }
              }

              return className;
            }
          }, {
            key: "render",
            value: function render() {
              var onHover = this.onHover,
                  onClick = this.onClick,
                  onKeyDown = this.onKeyDown;
              var _this$props5 = this.props,
                  disabled = _this$props5.disabled,
                  prefixCls = _this$props5.prefixCls,
                  character = _this$props5.character,
                  characterRender = _this$props5.characterRender,
                  index = _this$props5.index,
                  count = _this$props5.count,
                  value = _this$props5.value;
              var characterNode = typeof character === 'function' ? character(this.props) : character;

              var start = /*#__PURE__*/_react.default.createElement("li", {
                className: this.getClassName()
              }, /*#__PURE__*/_react.default.createElement("div", {
                onClick: disabled ? null : onClick,
                onKeyDown: disabled ? null : onKeyDown,
                onMouseMove: disabled ? null : onHover,
                role: "radio",
                "aria-checked": value > index ? 'true' : 'false',
                "aria-posinset": index + 1,
                "aria-setsize": count,
                tabIndex: disabled ? -1 : 0
              }, /*#__PURE__*/_react.default.createElement("div", {
                className: "".concat(prefixCls, "-first")
              }, characterNode), /*#__PURE__*/_react.default.createElement("div", {
                className: "".concat(prefixCls, "-second")
              }, characterNode)));

              if (characterRender) {
                start = characterRender(start, this.props);
              }

              return start;
            }
          }]);
          return Star;
        }(_react.default.Component);

        exports.default = Star; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/classCallCheck': _req0,
        '@babel/runtime/helpers/createClass': _req1,
        '@babel/runtime/helpers/inherits': _req2,
        '@babel/runtime/helpers/createSuper': _req3,
        'react': _req4
      }));
    }
  };
});
//# sourceMappingURL=17605df1e77272d47354336ae1ed7f78689dab33.js.map
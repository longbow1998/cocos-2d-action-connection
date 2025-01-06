System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _ResizableTextArea0, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req2 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req3 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req4 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req5 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "ResizableTextArea", {
          enumerable: true,
          get: function get() {
            return _ResizableTextArea.default;
          }
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var React = _interopRequireWildcard(require("react"));

        var _ResizableTextArea = _interopRequireDefault(require("./ResizableTextArea"));

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var TextArea = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(TextArea, _React$Component);

          var _super = (0, _createSuper2.default)(TextArea);

          function TextArea(props) {
            var _this;

            (0, _classCallCheck2.default)(this, TextArea);
            _this = _super.call(this, props);
            _this.resizableTextArea = void 0;

            _this.focus = function () {
              _this.resizableTextArea.textArea.focus();
            };

            _this.saveTextArea = function (resizableTextArea) {
              _this.resizableTextArea = resizableTextArea;
            };

            _this.handleChange = function (e) {
              var onChange = _this.props.onChange;

              _this.setValue(e.target.value);

              if (onChange) {
                onChange(e);
              }
            };

            _this.handleKeyDown = function (e) {
              var _this$props = _this.props,
                  onPressEnter = _this$props.onPressEnter,
                  onKeyDown = _this$props.onKeyDown;

              if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
              }

              if (onKeyDown) {
                onKeyDown(e);
              }
            };

            var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
            _this.state = {
              value: value
            };
            return _this;
          }

          (0, _createClass2.default)(TextArea, [{
            key: "setValue",
            value: function setValue(value, callback) {
              if (!('value' in this.props)) {
                this.setState({
                  value: value
                }, callback);
              }
            }
          }, {
            key: "blur",
            value: function blur() {
              this.resizableTextArea.textArea.blur();
            }
          }, {
            key: "render",
            value: function render() {
              return /*#__PURE__*/React.createElement(_ResizableTextArea.default, (0, _extends2.default)({}, this.props, {
                value: this.state.value,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                ref: this.saveTextArea
              }));
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps) {
              if ('value' in nextProps) {
                return {
                  value: nextProps.value
                };
              }

              return null;
            }
          }]);
          return TextArea;
        }(React.Component);

        var _default = TextArea;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _ResizableTextArea0 = module.exports.ResizableTextArea;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/classCallCheck': _req2,
        '@babel/runtime/helpers/createClass': _req3,
        '@babel/runtime/helpers/inherits': _req4,
        '@babel/runtime/helpers/createSuper': _req5,
        'react': _req6,
        './ResizableTextArea': _req7
      }));
    }
  };
});
//# sourceMappingURL=de81d0c28eff7e6fdb3628a5bc6365a8a39a7fb9.js.map
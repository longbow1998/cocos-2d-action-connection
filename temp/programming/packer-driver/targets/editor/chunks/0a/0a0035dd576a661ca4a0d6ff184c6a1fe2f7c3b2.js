System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "."], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req1 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req2 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req3 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req4 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_2) {
      _req6 = _2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var React = _interopRequireWildcard(require("react"));

        var _ = _interopRequireDefault(require("."));

        var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(ErrorBoundary, _React$Component);

          var _super = (0, _createSuper2["default"])(ErrorBoundary);

          function ErrorBoundary() {
            var _this;

            (0, _classCallCheck2["default"])(this, ErrorBoundary);
            _this = _super.apply(this, arguments);
            _this.state = {
              error: undefined,
              info: {
                componentStack: ''
              }
            };
            return _this;
          }

          (0, _createClass2["default"])(ErrorBoundary, [{
            key: "componentDidCatch",
            value: function componentDidCatch(error, info) {
              this.setState({
                error: error,
                info: info
              });
            }
          }, {
            key: "render",
            value: function render() {
              var _this$props = this.props,
                  message = _this$props.message,
                  description = _this$props.description,
                  children = _this$props.children;
              var _this$state = this.state,
                  error = _this$state.error,
                  info = _this$state.info;
              var componentStack = info && info.componentStack ? info.componentStack : null;
              var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
              var errorDescription = typeof description === 'undefined' ? componentStack : description;

              if (error) {
                return /*#__PURE__*/React.createElement(_["default"], {
                  type: "error",
                  message: errorMessage,
                  description: /*#__PURE__*/React.createElement("pre", null, errorDescription)
                });
              }

              return children;
            }
          }]);
          return ErrorBoundary;
        }(React.Component);

        var _default = ErrorBoundary;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/classCallCheck': _req1,
        '@babel/runtime/helpers/createClass': _req2,
        '@babel/runtime/helpers/inherits': _req3,
        '@babel/runtime/helpers/createSuper': _req4,
        'react': _req5,
        '.': _req6
      }));
    }
  };
});
//# sourceMappingURL=0a0035dd576a661ca4a0d6ff184c6a1fe2f7c3b2.js.map
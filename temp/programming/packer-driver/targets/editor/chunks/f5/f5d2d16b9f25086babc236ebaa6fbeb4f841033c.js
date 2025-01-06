System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "react-dom", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req3 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req4 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req5 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req6 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_reactDom2) {
      _req8 = _reactDom2.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
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
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var React = _interopRequireWildcard(require("react"));

        var _reactDom = _interopRequireDefault(require("react-dom"));

        var _classnames = _interopRequireDefault(require("classnames"));

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

        var Notice = /*#__PURE__*/function (_Component) {
          (0, _inherits2.default)(Notice, _Component);

          var _super = (0, _createSuper2.default)(Notice);

          function Notice() {
            var _this;

            (0, _classCallCheck2.default)(this, Notice);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this.closeTimer = null;

            _this.close = function (e) {
              if (e) {
                e.stopPropagation();
              }

              _this.clearCloseTimer();

              var _this$props = _this.props,
                  onClose = _this$props.onClose,
                  noticeKey = _this$props.noticeKey;

              if (onClose) {
                onClose(noticeKey);
              }
            };

            _this.startCloseTimer = function () {
              if (_this.props.duration) {
                _this.closeTimer = window.setTimeout(function () {
                  _this.close();
                }, _this.props.duration * 1000);
              }
            };

            _this.clearCloseTimer = function () {
              if (_this.closeTimer) {
                clearTimeout(_this.closeTimer);
                _this.closeTimer = null;
              }
            };

            return _this;
          }

          (0, _createClass2.default)(Notice, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              this.startCloseTimer();
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
              if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark || // Visible again need reset timer
              this.props.visible !== prevProps.visible && this.props.visible) {
                this.restartCloseTimer();
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              this.clearCloseTimer();
            }
          }, {
            key: "restartCloseTimer",
            value: function restartCloseTimer() {
              this.clearCloseTimer();
              this.startCloseTimer();
            }
          }, {
            key: "render",
            value: function render() {
              var _this2 = this;

              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  className = _this$props2.className,
                  closable = _this$props2.closable,
                  closeIcon = _this$props2.closeIcon,
                  style = _this$props2.style,
                  onClick = _this$props2.onClick,
                  children = _this$props2.children,
                  holder = _this$props2.holder;
              var componentClass = "".concat(prefixCls, "-notice");
              var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
                if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
                  acc[key] = _this2.props[key];
                }

                return acc;
              }, {});
              var node = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
                className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
                style: style,
                onMouseEnter: this.clearCloseTimer,
                onMouseLeave: this.startCloseTimer,
                onClick: onClick
              }, dataOrAriaAttributeProps), /*#__PURE__*/React.createElement("div", {
                className: "".concat(componentClass, "-content")
              }, children), closable ? /*#__PURE__*/React.createElement("a", {
                tabIndex: 0,
                onClick: this.close,
                className: "".concat(componentClass, "-close")
              }, closeIcon || /*#__PURE__*/React.createElement("span", {
                className: "".concat(componentClass, "-close-x")
              })) : null);

              if (holder) {
                return /*#__PURE__*/_reactDom.default.createPortal(node, holder);
              }

              return node;
            }
          }]);
          return Notice;
        }(React.Component);

        exports.default = Notice;
        Notice.defaultProps = {
          onClose: function onClose() {},
          duration: 1.5
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/classCallCheck': _req3,
        '@babel/runtime/helpers/createClass': _req4,
        '@babel/runtime/helpers/inherits': _req5,
        '@babel/runtime/helpers/createSuper': _req6,
        'react': _req7,
        'react-dom': _req8,
        'classnames': _req9
      }));
    }
  };
});
//# sourceMappingURL=f5d2d16b9f25086babc236ebaa6fbeb4f841033c.js.map
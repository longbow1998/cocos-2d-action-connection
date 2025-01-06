System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/defineProperty", "react", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req4 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req5 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAssertThisInitialized) {
      _req6 = _babelRuntimeHelpersAssertThisInitialized.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req7 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req8 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req9 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req11 = _classnames2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _excluded = ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick"];

        function isString(str) {
          return typeof str === 'string';
        }

        var Step = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(Step, _React$Component);

          var _super = (0, _createSuper2.default)(Step);

          function Step() {
            var _this;

            (0, _classCallCheck2.default)(this, Step);

            for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
              _args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(_args));
            (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function () {
              var _this$props = _this.props,
                  onClick = _this$props.onClick,
                  onStepClick = _this$props.onStepClick,
                  stepIndex = _this$props.stepIndex;

              if (onClick) {
                onClick.apply(void 0, arguments);
              }

              onStepClick(stepIndex);
            });
            return _this;
          }

          (0, _createClass2.default)(Step, [{
            key: "renderIconNode",
            value: function renderIconNode() {
              var _classNames;

              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  progressDot = _this$props2.progressDot,
                  stepIcon = _this$props2.stepIcon,
                  stepNumber = _this$props2.stepNumber,
                  status = _this$props2.status,
                  title = _this$props2.title,
                  description = _this$props2.description,
                  icon = _this$props2.icon,
                  iconPrefix = _this$props2.iconPrefix,
                  icons = _this$props2.icons;
              var iconNode;
              var iconClassName = (0, _classnames.default)("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), (0, _defineProperty2.default)(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && (icons && !icons.finish || !icons)), (0, _defineProperty2.default)(_classNames, "".concat(iconPrefix, "icon-cross"), !icon && status === 'error' && (icons && !icons.error || !icons)), _classNames));
              var iconDot = /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-icon-dot")
              }); // `progressDot` enjoy the highest priority

              if (progressDot) {
                if (typeof progressDot === 'function') {
                  iconNode = /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-icon")
                  }, progressDot(iconDot, {
                    index: stepNumber - 1,
                    status: status,
                    title: title,
                    description: description
                  }));
                } else {
                  iconNode = /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-icon")
                  }, iconDot);
                }
              } else if (icon && !isString(icon)) {
                iconNode = /*#__PURE__*/React.createElement("span", {
                  className: "".concat(prefixCls, "-icon")
                }, icon);
              } else if (icons && icons.finish && status === 'finish') {
                iconNode = /*#__PURE__*/React.createElement("span", {
                  className: "".concat(prefixCls, "-icon")
                }, icons.finish);
              } else if (icons && icons.error && status === 'error') {
                iconNode = /*#__PURE__*/React.createElement("span", {
                  className: "".concat(prefixCls, "-icon")
                }, icons.error);
              } else if (icon || status === 'finish' || status === 'error') {
                iconNode = /*#__PURE__*/React.createElement("span", {
                  className: iconClassName
                });
              } else {
                iconNode = /*#__PURE__*/React.createElement("span", {
                  className: "".concat(prefixCls, "-icon")
                }, stepNumber);
              }

              if (stepIcon) {
                iconNode = stepIcon({
                  index: stepNumber - 1,
                  status: status,
                  title: title,
                  description: description,
                  node: iconNode
                });
              }

              return iconNode;
            }
          }, {
            key: "render",
            value: function render() {
              var _classNames2;

              var _this$props3 = this.props,
                  className = _this$props3.className,
                  prefixCls = _this$props3.prefixCls,
                  style = _this$props3.style,
                  active = _this$props3.active,
                  _this$props3$status = _this$props3.status,
                  status = _this$props3$status === void 0 ? 'wait' : _this$props3$status,
                  iconPrefix = _this$props3.iconPrefix,
                  icon = _this$props3.icon,
                  wrapperStyle = _this$props3.wrapperStyle,
                  stepNumber = _this$props3.stepNumber,
                  disabled = _this$props3.disabled,
                  description = _this$props3.description,
                  title = _this$props3.title,
                  subTitle = _this$props3.subTitle,
                  progressDot = _this$props3.progressDot,
                  stepIcon = _this$props3.stepIcon,
                  tailContent = _this$props3.tailContent,
                  icons = _this$props3.icons,
                  stepIndex = _this$props3.stepIndex,
                  onStepClick = _this$props3.onStepClick,
                  onClick = _this$props3.onClick,
                  restProps = (0, _objectWithoutProperties2.default)(_this$props3, _excluded);
              var classString = (0, _classnames.default)("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(status), className, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-item-custom"), icon), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-item-active"), active), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));
              var stepItemStyle = (0, _objectSpread2.default)({}, style);
              var accessibilityProps = {};

              if (onStepClick && !disabled) {
                accessibilityProps.role = 'button';
                accessibilityProps.tabIndex = 0;
                accessibilityProps.onClick = this.onClick;
              }

              return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, restProps, {
                className: classString,
                style: stepItemStyle
              }), /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
                onClick: onClick
              }, accessibilityProps, {
                className: "".concat(prefixCls, "-item-container")
              }), /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-item-tail")
              }, tailContent), /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-item-icon")
              }, this.renderIconNode()), /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-item-content")
              }, /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-item-title")
              }, title, subTitle && /*#__PURE__*/React.createElement("div", {
                title: typeof subTitle === 'string' ? subTitle : undefined,
                className: "".concat(prefixCls, "-item-subtitle")
              }, subTitle)), description && /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-item-description")
              }, description))));
            }
          }]);
          return Step;
        }(React.Component);

        exports.default = Step; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        '@babel/runtime/helpers/classCallCheck': _req4,
        '@babel/runtime/helpers/createClass': _req5,
        '@babel/runtime/helpers/assertThisInitialized': _req6,
        '@babel/runtime/helpers/inherits': _req7,
        '@babel/runtime/helpers/createSuper': _req8,
        '@babel/runtime/helpers/defineProperty': _req9,
        'react': _req10,
        'classnames': _req11
      }));
    }
  };
});
//# sourceMappingURL=82ef9d4f68747bcdb769ed689edcff411d3f852e.js.map
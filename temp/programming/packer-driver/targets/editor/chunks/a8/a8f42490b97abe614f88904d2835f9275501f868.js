System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@ant-design/icons/CloseCircleFilled", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req2 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req3 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req4 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req5 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req6 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _context = require("../form/context");

        var _reactNode = require("../_util/reactNode");

        var _statusUtils = require("../_util/statusUtils");

        var _type = require("../_util/type");

        var ClearableInputType = (0, _type.tuple)('text', 'input');

        function hasAddon(props) {
          return !!(props.addonBefore || props.addonAfter);
        }

        var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(ClearableLabeledInput, _React$Component);

          var _super = (0, _createSuper2["default"])(ClearableLabeledInput);

          function ClearableLabeledInput() {
            (0, _classCallCheck2["default"])(this, ClearableLabeledInput);
            return _super.apply(this, arguments);
          }

          (0, _createClass2["default"])(ClearableLabeledInput, [{
            key: "renderClearIcon",
            value: function renderClearIcon(prefixCls) {
              var _classNames;

              var _this$props = this.props,
                  value = _this$props.value,
                  disabled = _this$props.disabled,
                  readOnly = _this$props.readOnly,
                  handleReset = _this$props.handleReset,
                  suffix = _this$props.suffix;
              var needClear = !disabled && !readOnly && value;
              var className = "".concat(prefixCls, "-clear-icon");
              return /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], {
                onClick: handleReset,
                // Do not trigger onBlur when clear input
                // https://github.com/ant-design/ant-design/issues/31200
                onMouseDown: function onMouseDown(e) {
                  return e.preventDefault();
                },
                className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(className, "-hidden"), !needClear), (0, _defineProperty2["default"])(_classNames, "".concat(className, "-has-suffix"), !!suffix), _classNames), className),
                role: "button"
              });
            }
          }, {
            key: "renderTextAreaWithClearIcon",
            value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
              var _classNames2;

              var _this$props2 = this.props,
                  value = _this$props2.value,
                  allowClear = _this$props2.allowClear,
                  className = _this$props2.className,
                  style = _this$props2.style,
                  direction = _this$props2.direction,
                  bordered = _this$props2.bordered,
                  hidden = _this$props2.hidden,
                  customStatus = _this$props2.status;
              var contextStatus = statusContext.status,
                  hasFeedback = statusContext.hasFeedback;

              if (!allowClear) {
                return (0, _reactNode.cloneElement)(element, {
                  value: value
                });
              }

              var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames2, "".concat(className), !hasAddon(this.props) && className), _classNames2));
              return /*#__PURE__*/React.createElement("span", {
                className: affixWrapperCls,
                style: style,
                hidden: hidden
              }, (0, _reactNode.cloneElement)(element, {
                style: null,
                value: value
              }), this.renderClearIcon(prefixCls));
            }
          }, {
            key: "render",
            value: function render() {
              var _this = this;

              return /*#__PURE__*/React.createElement(_context.FormItemInputContext.Consumer, null, function (statusContext) {
                var _this$props3 = _this.props,
                    prefixCls = _this$props3.prefixCls,
                    inputType = _this$props3.inputType,
                    element = _this$props3.element;

                if (inputType === ClearableInputType[0]) {
                  return _this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
                }
              });
            }
          }]);
          return ClearableLabeledInput;
        }(React.Component);

        var _default = ClearableLabeledInput;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/classCallCheck': _req2,
        '@babel/runtime/helpers/createClass': _req3,
        '@babel/runtime/helpers/inherits': _req4,
        '@babel/runtime/helpers/createSuper': _req5,
        '@ant-design/icons/CloseCircleFilled': _req6,
        'classnames': _req7,
        'react': _req8,
        '../form/context': _req9,
        '../_util/reactNode': _req10,
        '../_util/statusUtils': _req11,
        '../_util/type': _req12
      }));
    }
  };
});
//# sourceMappingURL=a8f42490b97abe614f88904d2835f9275501f868.js.map
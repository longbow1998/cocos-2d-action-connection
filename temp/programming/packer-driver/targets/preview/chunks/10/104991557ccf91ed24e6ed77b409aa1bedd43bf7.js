System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/defineProperty", "classnames", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req3 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req4 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAssertThisInitialized) {
      _req5 = _babelRuntimeHelpersAssertThisInitialized.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req6 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req7 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req8 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
    }, function (_react2) {
      _req10 = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

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

        var _classnames = _interopRequireDefault(require("classnames"));

        var _react = _interopRequireDefault(require("react"));

        var _Step = _interopRequireDefault(require("./Step"));

        var _excluded = ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange", "items"];

        var Steps = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(Steps, _React$Component);

          var _super = (0, _createSuper2.default)(Steps);

          function Steps() {
            var _this;

            (0, _classCallCheck2.default)(this, Steps);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStepClick", function (next) {
              var _this$props = _this.props,
                  onChange = _this$props.onChange,
                  current = _this$props.current;

              if (onChange && current !== next) {
                onChange(next);
              }
            });
            return _this;
          }

          (0, _createClass2.default)(Steps, [{
            key: "render",
            value: function render() {
              var _classNames,
                  _this2 = this;

              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  _this$props2$style = _this$props2.style,
                  style = _this$props2$style === void 0 ? {} : _this$props2$style,
                  className = _this$props2.className,
                  children = _this$props2.children,
                  direction = _this$props2.direction,
                  type = _this$props2.type,
                  labelPlacement = _this$props2.labelPlacement,
                  iconPrefix = _this$props2.iconPrefix,
                  status = _this$props2.status,
                  size = _this$props2.size,
                  current = _this$props2.current,
                  progressDot = _this$props2.progressDot,
                  stepIcon = _this$props2.stepIcon,
                  initial = _this$props2.initial,
                  icons = _this$props2.icons,
                  onChange = _this$props2.onChange,
                  _this$props2$items = _this$props2.items,
                  items = _this$props2$items === void 0 ? [] : _this$props2$items,
                  restProps = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
              var isNav = type === 'navigation';
              var adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;
              var classString = (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(direction), className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), direction === 'horizontal'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-dot"), !!progressDot), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-navigation"), isNav), _classNames));
              return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
                className: classString,
                style: style
              }, restProps), items.filter(function (item) {
                return item;
              }).map(function (item, index) {
                var mergedItem = (0, _objectSpread2.default)({}, item);
                var stepNumber = initial + index; // fix tail color

                if (status === 'error' && index === current - 1) {
                  mergedItem.className = "".concat(prefixCls, "-next-error");
                }

                if (!mergedItem.status) {
                  if (stepNumber === current) {
                    mergedItem.status = status;
                  } else if (stepNumber < current) {
                    mergedItem.status = 'finish';
                  } else {
                    mergedItem.status = 'wait';
                  }
                }

                return /*#__PURE__*/_react.default.createElement(_Step.default, (0, _extends2.default)({}, mergedItem, {
                  active: stepNumber === current,
                  stepNumber: stepNumber + 1,
                  stepIndex: stepNumber,
                  key: stepNumber,
                  prefixCls: prefixCls,
                  iconPrefix: iconPrefix,
                  wrapperStyle: style,
                  progressDot: progressDot,
                  stepIcon: stepIcon,
                  icons: icons,
                  onStepClick: onChange && _this2.onStepClick
                }));
              }));
            }
          }]);
          return Steps;
        }(_react.default.Component);

        exports.default = Steps;
        (0, _defineProperty2.default)(Steps, "Step", _Step.default);
        (0, _defineProperty2.default)(Steps, "defaultProps", {
          type: 'default',
          prefixCls: 'rc-steps',
          iconPrefix: 'rc',
          direction: 'horizontal',
          labelPlacement: 'horizontal',
          initial: 0,
          current: 0,
          status: 'process',
          size: '',
          progressDot: false
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        '@babel/runtime/helpers/classCallCheck': _req3,
        '@babel/runtime/helpers/createClass': _req4,
        '@babel/runtime/helpers/assertThisInitialized': _req5,
        '@babel/runtime/helpers/inherits': _req6,
        '@babel/runtime/helpers/createSuper': _req7,
        '@babel/runtime/helpers/defineProperty': _req8,
        'classnames': _req9,
        'react': _req10,
        './Step': _req11
      }));
    }
  };
});
//# sourceMappingURL=104991557ccf91ed24e6ed77b409aa1bedd43bf7.js.map
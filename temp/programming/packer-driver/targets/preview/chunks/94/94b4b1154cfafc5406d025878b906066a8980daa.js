System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "classnames", "lodash/debounce", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_lodashDebounce) {
      _req5 = _lodashDebounce.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req6 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _debounce = _interopRequireDefault(require("lodash/debounce"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _reactNode = require("../_util/reactNode");

        var _type = require("../_util/type");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

        var defaultIndicator = null;

        function renderIndicator(prefixCls, props) {
          var indicator = props.indicator;
          var dotClassName = "".concat(prefixCls, "-dot"); // should not be render default indicator when indicator value is null

          if (indicator === null) {
            return null;
          }

          if ((0, _reactNode.isValidElement)(indicator)) {
            return (0, _reactNode.cloneElement)(indicator, {
              className: (0, _classnames["default"])(indicator.props.className, dotClassName)
            });
          }

          if ((0, _reactNode.isValidElement)(defaultIndicator)) {
            return (0, _reactNode.cloneElement)(defaultIndicator, {
              className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
            });
          }

          return /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
          }, /*#__PURE__*/React.createElement("i", {
            className: "".concat(prefixCls, "-dot-item")
          }), /*#__PURE__*/React.createElement("i", {
            className: "".concat(prefixCls, "-dot-item")
          }), /*#__PURE__*/React.createElement("i", {
            className: "".concat(prefixCls, "-dot-item")
          }), /*#__PURE__*/React.createElement("i", {
            className: "".concat(prefixCls, "-dot-item")
          }));
        }

        function shouldDelay(spinning, delay) {
          return !!spinning && !!delay && !isNaN(Number(delay));
        }

        var Spin = function Spin(props) {
          var prefixCls = props.spinPrefixCls,
              _props$spinning = props.spinning,
              customSpinning = _props$spinning === void 0 ? true : _props$spinning,
              delay = props.delay,
              className = props.className,
              _props$size = props.size,
              size = _props$size === void 0 ? 'default' : _props$size,
              tip = props.tip,
              wrapperClassName = props.wrapperClassName,
              style = props.style,
              children = props.children,
              restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "size", "tip", "wrapperClassName", "style", "children"]);

          var _React$useState = React.useState(function () {
            return customSpinning && !shouldDelay(customSpinning, delay);
          }),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              spinning = _React$useState2[0],
              setSpinning = _React$useState2[1];

          React.useEffect(function () {
            var updateSpinning = (0, _debounce["default"])(function () {
              setSpinning(customSpinning);
            }, delay);
            updateSpinning();
            return function () {
              var _a;

              (_a = updateSpinning === null || updateSpinning === void 0 ? void 0 : updateSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(updateSpinning);
            };
          }, [delay, customSpinning]);

          var isNestedPattern = function isNestedPattern() {
            return typeof children !== 'undefined';
          };

          var renderSpin = function renderSpin(_ref) {
            var _classNames;

            var direction = _ref.direction;
            var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-spinning"), spinning), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-show-text"), !!tip), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // fix https://fb.me/react-unknown-prop

            var divProps = (0, _omit["default"])(restProps, ['indicator', 'prefixCls']);
            var spinElement = /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
              style: style,
              className: spinClassName,
              "aria-live": "polite",
              "aria-busy": spinning
            }), renderIndicator(prefixCls, props), tip ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-text")
            }, tip) : null);

            if (isNestedPattern()) {
              var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-blur"), spinning));
              return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
                className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
              }), spinning && /*#__PURE__*/React.createElement("div", {
                key: "loading"
              }, spinElement), /*#__PURE__*/React.createElement("div", {
                className: containerClassName,
                key: "container"
              }, children));
            }

            return spinElement;
          };

          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderSpin);
        };

        var SpinFC = function SpinFC(props) {
          var customizePrefixCls = props.prefixCls;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
          var spinClassProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
            spinPrefixCls: spinPrefixCls
          });
          return /*#__PURE__*/React.createElement(Spin, (0, _extends2["default"])({}, spinClassProps));
        };

        SpinFC.setDefaultIndicator = function (indicator) {
          defaultIndicator = indicator;
        };

        if (process.env.NODE_ENV !== 'production') {
          SpinFC.displayName = 'Spin';
        }

        var _default = SpinFC;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'classnames': _req4,
        'lodash/debounce': _req5,
        'rc-util/lib/omit': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../_util/reactNode': _req9,
        '../_util/type': _req10
      }));
    }
  };
});
//# sourceMappingURL=94b4b1154cfafc5406d025878b906066a8980daa.js.map
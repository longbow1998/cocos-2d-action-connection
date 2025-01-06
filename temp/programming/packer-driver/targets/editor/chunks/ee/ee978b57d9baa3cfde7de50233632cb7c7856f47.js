System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _context = require("../config-provider/context");

        var _skeleton = _interopRequireDefault(require("../skeleton"));

        var _Number = _interopRequireDefault(require("./Number"));

        var Statistic = function Statistic(props) {
          var prefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              valueStyle = props.valueStyle,
              _props$value = props.value,
              value = _props$value === void 0 ? 0 : _props$value,
              title = props.title,
              valueRender = props.valueRender,
              prefix = props.prefix,
              suffix = props.suffix,
              _props$loading = props.loading,
              loading = _props$loading === void 0 ? false : _props$loading,
              direction = props.direction,
              onMouseEnter = props.onMouseEnter,
              onMouseLeave = props.onMouseLeave,
              _props$decimalSeparat = props.decimalSeparator,
              decimalSeparator = _props$decimalSeparat === void 0 ? '.' : _props$decimalSeparat,
              _props$groupSeparator = props.groupSeparator,
              groupSeparator = _props$groupSeparator === void 0 ? ',' : _props$groupSeparator;
          var valueNode = /*#__PURE__*/React.createElement(_Number["default"], (0, _extends2["default"])({
            decimalSeparator: decimalSeparator,
            groupSeparator: groupSeparator
          }, props, {
            value: value
          }));
          var cls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
          return /*#__PURE__*/React.createElement("div", {
            className: cls,
            style: style,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave
          }, title && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-title")
          }, title), /*#__PURE__*/React.createElement(_skeleton["default"], {
            paragraph: false,
            loading: loading,
            className: "".concat(prefixCls, "-skeleton")
          }, /*#__PURE__*/React.createElement("div", {
            style: valueStyle,
            className: "".concat(prefixCls, "-content")
          }, prefix && /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-content-prefix")
          }, prefix), valueRender ? valueRender(valueNode) : valueNode, suffix && /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-content-suffix")
          }, suffix))));
        };

        var WrapperStatistic = (0, _context.withConfigConsumer)({
          prefixCls: 'statistic'
        })(Statistic);
        var _default = WrapperStatistic;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        'classnames': _req3,
        'react': _req4,
        '../config-provider/context': _req5,
        '../skeleton': _req6,
        './Number': _req7
      }));
    }
  };
});
//# sourceMappingURL=ee978b57d9baa3cfde7de50233632cb7c7856f47.js.map
System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = Dot;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _util = require("../util");

        var _context = _interopRequireDefault(require("../context"));

        function Dot(props) {
          var prefixCls = props.prefixCls,
              value = props.value,
              style = props.style,
              activeStyle = props.activeStyle;

          var _React$useContext = React.useContext(_context.default),
              min = _React$useContext.min,
              max = _React$useContext.max,
              direction = _React$useContext.direction,
              included = _React$useContext.included,
              includedStart = _React$useContext.includedStart,
              includedEnd = _React$useContext.includedEnd;

          var dotClassName = "".concat(prefixCls, "-dot");
          var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================

          var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _util.getDirectionStyle)(direction, value, min, max)), typeof style === 'function' ? style(value) : style);

          if (active) {
            mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
          }

          return /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames.default)(dotClassName, (0, _defineProperty2.default)({}, "".concat(dotClassName, "-active"), active)),
            style: mergedStyle
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3,
        'classnames': _req4,
        '../util': _req5,
        '../context': _req6
      }));
    }
  };
});
//# sourceMappingURL=87f6916a4d8991e3a57effa40706b24545d43584.js.map
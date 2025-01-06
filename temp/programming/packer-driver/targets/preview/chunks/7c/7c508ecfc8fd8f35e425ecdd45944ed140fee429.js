System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = Steps;

        var React = _interopRequireWildcard(require("react"));

        var _context = _interopRequireDefault(require("../context"));

        var _Dot = _interopRequireDefault(require("./Dot"));

        function Steps(props) {
          var prefixCls = props.prefixCls,
              marks = props.marks,
              dots = props.dots,
              style = props.style,
              activeStyle = props.activeStyle;

          var _React$useContext = React.useContext(_context.default),
              min = _React$useContext.min,
              max = _React$useContext.max,
              step = _React$useContext.step;

          var stepDots = React.useMemo(function () {
            var dotSet = new Set(); // Add marks

            marks.forEach(function (mark) {
              dotSet.add(mark.value);
            }); // Fill dots

            if (dots && step !== null) {
              var current = min;

              while (current <= max) {
                dotSet.add(current);
                current += step;
              }
            }

            return Array.from(dotSet);
          }, [min, max, step, dots, marks]);
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-step")
          }, stepDots.map(function (dotValue) {
            return /*#__PURE__*/React.createElement(_Dot.default, {
              prefixCls: prefixCls,
              key: dotValue,
              value: dotValue,
              style: style,
              activeStyle: activeStyle
            });
          }));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        '../context': _req2,
        './Dot': _req3
      }));
    }
  };
});
//# sourceMappingURL=7c508ecfc8fd8f35e425ecdd45944ed140fee429.js.map
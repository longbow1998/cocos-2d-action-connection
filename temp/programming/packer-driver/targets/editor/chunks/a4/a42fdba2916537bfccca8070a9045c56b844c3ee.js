System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "rc-util/lib/raf", "rc-util/lib/ref", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_rcUtilLibRaf) {
      _req2 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req3 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _ref = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _tooltip = _interopRequireDefault(require("../tooltip"));

        var SliderTooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var open = props.open;
          var innerRef = (0, React.useRef)(null);
          var rafRef = (0, React.useRef)(null);

          function cancelKeepAlign() {
            _raf["default"].cancel(rafRef.current);

            rafRef.current = null;
          }

          function keepAlign() {
            rafRef.current = (0, _raf["default"])(function () {
              var _a;

              (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
              rafRef.current = null;
            });
          }

          React.useEffect(function () {
            if (open) {
              keepAlign();
            } else {
              cancelKeepAlign();
            }

            return cancelKeepAlign;
          }, [open, props.title]);
          return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({
            ref: (0, _ref.composeRef)(innerRef, ref)
          }, props));
        });
        var _default = SliderTooltip;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'rc-util/lib/raf': _req2,
        'rc-util/lib/ref': _req3,
        'react': _req4,
        '../tooltip': _req5
      }));
    }
  };
});
//# sourceMappingURL=a42fdba2916537bfccca8070a9045c56b844c3ee.js.map
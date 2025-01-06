System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "rc-util/lib/Dom/canUseDom"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibDomCanUseDom) {
      _req1 = _rcUtilLibDomCanUseDom.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _react = require("react");

        var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom")); // It's safe to use `useLayoutEffect` but the warning is annoying


        var useIsomorphicLayoutEffect = (0, _canUseDom.default)() ? _react.useLayoutEffect : _react.useEffect;
        var _default = useIsomorphicLayoutEffect;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'rc-util/lib/Dom/canUseDom': _req1
      }));
    }
  };
});
//# sourceMappingURL=d7ba97fbeb1fff4869a6f79eb6d99a2cd1a3fc78.js.map
System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _useLayoutUpdateEffect, _default0, __cjsMetaURL;

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
        exports.useLayoutUpdateEffect = exports.default = void 0;

        var React = _interopRequireWildcard(require("react"));

        var _canUseDom = _interopRequireDefault(require("../Dom/canUseDom"));
        /**
         * Wrap `React.useLayoutEffect` which will not throw warning message in test env
         */


        var useLayoutEffect = process.env.NODE_ENV !== 'test' && (0, _canUseDom.default)() ? React.useLayoutEffect : React.useEffect;
        var _default = useLayoutEffect;
        exports.default = _default;

        var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
          var firstMountRef = React.useRef(true);
          useLayoutEffect(function () {
            if (!firstMountRef.current) {
              return callback();
            }
          }, deps); // We tell react that first mount has passed

          useLayoutEffect(function () {
            firstMountRef.current = false;
            return function () {
              firstMountRef.current = true;
            };
          }, []);
        };

        exports.useLayoutUpdateEffect = useLayoutUpdateEffect; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _useLayoutUpdateEffect = module.exports.useLayoutUpdateEffect;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        '../Dom/canUseDom': _req2
      }));
    }
  };
});
//# sourceMappingURL=f8144efa31752210f572338bd3cabd99da6a8165.js.map
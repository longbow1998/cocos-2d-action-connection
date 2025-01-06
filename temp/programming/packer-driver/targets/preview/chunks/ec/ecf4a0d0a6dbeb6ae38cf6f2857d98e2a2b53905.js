System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useMemo;

        var React = _interopRequireWildcard(require("react"));

        function useMemo(getValue, condition, shouldUpdate) {
          var cacheRef = React.useRef({});

          if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
            cacheRef.current.value = getValue();
            cacheRef.current.condition = condition;
          }

          return cacheRef.current.value;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=ecf4a0d0a6dbeb6ae38cf6f2857d98e2a2b53905.js.map
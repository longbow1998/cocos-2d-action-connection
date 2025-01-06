System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, _noop, _resetWarned, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req0 = _rcUtilLibWarning.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;
        exports.noop = noop;
        Object.defineProperty(exports, "resetWarned", {
          enumerable: true,
          get: function get() {
            return _warning.resetWarned;
          }
        });

        var _warning = _interopRequireWildcard(require("rc-util/lib/warning"));

        function noop() {} // eslint-disable-next-line import/no-mutable-exports


        var warning = noop;

        if (process.env.NODE_ENV !== 'production') {
          warning = function warning(valid, component, message) {
            (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message)); // StrictMode will inject console which will not throw warning in React 17.

            if (process.env.NODE_ENV === 'test') {
              (0, _warning.resetWarned)();
            }
          };
        }

        var _default = warning;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _noop = module.exports.noop;
        _resetWarned = module.exports.resetWarned;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'rc-util/lib/warning': _req0
      }));
    }
  };
});
//# sourceMappingURL=952bef4535079536e0be5fddd588a012fae640b0.js.map
System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _Col, _Row, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req1 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req2 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "Col", {
          enumerable: true,
          get: function get() {
            return _col["default"];
          }
        });
        Object.defineProperty(exports, "Row", {
          enumerable: true,
          get: function get() {
            return _row["default"];
          }
        });
        exports["default"] = void 0;

        var _col = _interopRequireDefault(require("./col"));

        var _useBreakpoint = _interopRequireDefault(require("./hooks/useBreakpoint"));

        var _row = _interopRequireDefault(require("./row")); // Do not export params


        function useBreakpoint() {
          return (0, _useBreakpoint["default"])();
        }

        var _default = {
          useBreakpoint: useBreakpoint
        };
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Col = module.exports.Col;
        _Row = module.exports.Row;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './col': _req0,
        './hooks/useBreakpoint': _req1,
        './row': _req2
      }));
    }
  };
});
//# sourceMappingURL=a3be53fb7e341f1675ec5901c47ba0f60ec7a763.js.map
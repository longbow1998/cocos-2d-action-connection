System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _slider = _interopRequireDefault(require("./slider"));

        var _default = _slider["default"];
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './slider': _req0
      }));
    }
  };
});
//# sourceMappingURL=aa0ad65f2ec814c879c0b4f949caf61ead913c3d.js.map
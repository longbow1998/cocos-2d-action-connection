System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _BaseInput0, _default0, __cjsMetaURL;

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
        Object.defineProperty(exports, "BaseInput", {
          enumerable: true,
          get: function get() {
            return _BaseInput.default;
          }
        });
        exports.default = void 0;

        var _BaseInput = _interopRequireDefault(require("./BaseInput"));

        var _Input = _interopRequireDefault(require("./Input"));

        var _default = _Input.default;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _BaseInput0 = module.exports.BaseInput;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './BaseInput': _req0,
        './Input': _req1
      }));
    }
  };
});
//# sourceMappingURL=75576b8b37631324dbee76328a66a13223dd8c6a.js.map
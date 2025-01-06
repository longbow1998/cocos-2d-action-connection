System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _CSSMotionList0, _default0, __cjsMetaURL;

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
        Object.defineProperty(exports, "CSSMotionList", {
          enumerable: true,
          get: function get() {
            return _CSSMotionList.default;
          }
        });
        exports.default = void 0;

        var _CSSMotion = _interopRequireDefault(require("./CSSMotion"));

        var _CSSMotionList = _interopRequireDefault(require("./CSSMotionList"));

        var _default = _CSSMotion.default;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _CSSMotionList0 = module.exports.CSSMotionList;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './CSSMotion': _req0,
        './CSSMotionList': _req1
      }));
    }
  };
});
//# sourceMappingURL=84e0e43eb6c0d2108430207d4cece69c982e4590.js.map
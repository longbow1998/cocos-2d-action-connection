System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _Circle0, _Line0, _default0, __cjsMetaURL;

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
        Object.defineProperty(exports, "Circle", {
          enumerable: true,
          get: function get() {
            return _Circle.default;
          }
        });
        Object.defineProperty(exports, "Line", {
          enumerable: true,
          get: function get() {
            return _Line.default;
          }
        });
        exports.default = void 0;

        var _Line = _interopRequireDefault(require("./Line"));

        var _Circle = _interopRequireDefault(require("./Circle"));

        var _default = {
          Line: _Line.default,
          Circle: _Circle.default
        };
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Circle0 = module.exports.Circle;
        _Line0 = module.exports.Line;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './Line': _req0,
        './Circle': _req1
      }));
    }
  };
});
//# sourceMappingURL=de34e58664628854f31273aace21e4e64361cdb7.js.map
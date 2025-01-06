System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _Button, _Group, _default0, __cjsMetaURL;

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
        Object.defineProperty(exports, "Button", {
          enumerable: true,
          get: function get() {
            return _radioButton["default"];
          }
        });
        Object.defineProperty(exports, "Group", {
          enumerable: true,
          get: function get() {
            return _group["default"];
          }
        });
        exports["default"] = void 0;

        var _group = _interopRequireDefault(require("./group"));

        var _radio = _interopRequireDefault(require("./radio"));

        var _radioButton = _interopRequireDefault(require("./radioButton"));

        var Radio = _radio["default"];
        Radio.Button = _radioButton["default"];
        Radio.Group = _group["default"];
        Radio.__ANT_RADIO = true;
        var _default = Radio;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Button = module.exports.Button;
        _Group = module.exports.Group;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './group': _req0,
        './radio': _req1,
        './radioButton': _req2
      }));
    }
  };
});
//# sourceMappingURL=0464e218d0b2131c3b5f7440fba47ae0496d778f.js.map
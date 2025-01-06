System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _changeConfirmLocale, _getConfirmLocale, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
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
        exports.changeConfirmLocale = changeConfirmLocale;
        exports.getConfirmLocale = getConfirmLocale;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _default = _interopRequireDefault(require("../locale/default"));

        var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

        function changeConfirmLocale(newLocale) {
          if (newLocale) {
            runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
          } else {
            runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
          }
        }

        function getConfirmLocale() {
          return runtimeLocale;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _changeConfirmLocale = module.exports.changeConfirmLocale;
        _getConfirmLocale = module.exports.getConfirmLocale;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        '../locale/default': _req1
      }));
    }
  };
});
//# sourceMappingURL=b0ed16872b7ea73ab7dac9e083c6ea4c48bf2964.js.map